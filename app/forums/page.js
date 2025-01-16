// import React from 'react'

// const  Forums = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default  Forums


import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const topics = [
  {
    text: "Python",
    img: "/python.png",
    des: "Let's discuss everything related to Python",
    slug:"python-chat-new"
  },
  {
    text: "JavaScript",
    img: "/javascript.png",
    des: "A hub for all things JavaScript, from frameworks to fundamentals.",
    slug:"javascript-chat-new"
  },
  {
    text: "React",
    img: "/react.png",
    des: "Share your React projects, ask questions, and learn from the community.",
    slug:"react-chat-new "
  },
  {
    text: "Web Development",
    img: "/webdev.png",
    des: "Discussions about HTML, CSS, front-end, back-end, and everything web-related.",
    slug:"web-Development-chat-new"
  },
  {
    text: "Data Science",
    img: "/datascience.png",
    des: "Explore data analysis, machine learning, and the world of data science.",
    slug:"data-Science-chat-new"
  },
    {
    text: "Mobile Development",
    img: "/mobiledev.png",
    des: "Discuss iOS, Android, cross-platform development, and mobile app design.",
    slug:"mobile-Development-chat-new"
  },
];
const Forums = () => {
  return (
    <div className='container  mx-auto my-28'>
      <h1 className='text-3xl text-center font-bold'>Discussion Forums</h1>
      <div className='flex flex-wrap justify-center'>
        {topics.map((topic)=>{
          return <div key={topic.text} className='shadow-lg bg-slate-500 w-1/4 m-4 flex justify-center flex-col items-center py-10 '>
           <Image src={topic.img} alt={topic.text} width={34} height={34} className='rounded-full' />
            <h2 className='text-2xl'>{topic.text}</h2>
            <p> {topic.des} </p>
            <Link href={`/forum/${topic.slug}`}>
            <Button className='px-4 border border-slate-300 py-2'>Discuss Now</Button>
            </Link>
            </div>
        })}
      </div>
    </div>
  )
}

export default Forums;
