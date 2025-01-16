import { StreamChat } from "stream-chat";
import { clerkClient, Client } from "@clerk/nextjs/server";

const api_key = "wqj73msp6n2v";
const api_secret =
  "zbmatb6jb3z6qva7gugqh45u5vtm4zd8bsanab6s4h6kkepxktyku752s2gwyv83";
//const user_id = "user_2rcNUUeDqi5Hoj6YWG1J5h8S2gr";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  //    //create user token
   const token = serverClient.createToken(user.data.id);
   console.log("A NEW USER HAS BEEN CREATED",token)
   const client = await clerkClient()
   await serverClient.upsertUser({id:user.data.id})
  
   await client.users.updateUserMetadata(user.data.id,{
    publicMetadata :{
        token :token
    }

   })

   //give access to this user for all chats
  const slugs =  ["python-chat-new","javascript-chat-new", "react-chat-new ", "web-Development-chat-new", "data-Science-chat-new", "mobile-Development-chat-new"]

   slugs.forEach(async(item)=>{
    const channel = serverClient.channel('messaging', item, {
        image: 'https://getstream.io/random_png/?name=react',
        name:capitalize(item) + "discussion",
        //members: [userId],
        created_by_id : user.data.id
      });
      await channel.create()
      channel.addMembers([user.data.id])
   })

  return Response.json({ message: "hello world" });
}
