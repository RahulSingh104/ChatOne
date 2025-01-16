import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-white py-20 px-8 md:px-24">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Welcome to ChatOne
          </h1>
          <p className="text-lg md:text-xl mb-12 leading-relaxed">
            Connect with friends, family, and communities in real-time.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-500 hover:bg-blue-100 font-medium py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-8 md:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Real-Time Messaging</h3>
              <p className="text-gray-600">Experience instant communication with lightning-fast message delivery.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Group Chats</h3>
              <p className="text-gray-600">Create vibrant communities and connect with multiple people at once.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">File Sharing</h3>
              <p className="text-gray-600">Seamlessly share photos, videos, documents, and more with ease.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">Your conversations are protected with end-to-end encryption for maximum privacy.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Customizable Profiles</h3>
              <p className="text-gray-600">Express yourself with customizable profiles and avatars.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Cross-Platform Support</h3>
              <p className="text-gray-600">Access PieChat on all your devices - desktop, mobile, and web.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Voice and Video Calls</h3>
              <p className="text-gray-600">Enjoy high-quality voice and video calls with your contacts.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Read Receipts</h3>
              <p className="text-gray-600">Know when your messages have been seen by the recipient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 px-8 md:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg shadow-md p-8 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Basic</h3>
              <p className="text-gray-600 text-5xl font-bold mb-4">$0</p>
              <p className="text-gray-600 mb-6">Free forever</p>
              <ul className="text-gray-600 space-y-2">
                <li>Up to 10 users</li>
                <li>Basic messaging features</li>
                <li>5GB storage</li>
              </ul>
              <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg w-full">
                Get Started
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg shadow-md p-8 transform scale-105">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Pro</h3>
              <p className="text-gray-600 text-5xl font-bold mb-4">$10</p>
              <p className="text-gray-600 mb-6">Per month</p>
              <ul className="text-gray-600 space-y-2">
                <li>Up to 50 users</li>
                <li>Advanced messaging features</li>
                <li>50GB storage</li>
                <li>Priority support</li>
                <li>Voice and Video Calls</li>
                <li>Read Receipts</li>
              </ul>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg w-full">
                Get Started
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-8 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Enterprise</h3>
              <p className="text-gray-600 text-5xl font-bold mb-4">$50</p>
              <p className="text-gray-600 mb-6">Per month</p>
              <ul className="text-gray-600 space-y-2">
                <li>Unlimited users</li>
                <li>All features</li>
                <li>Unlimited storage</li>
                <li>Dedicated support</li>
                <li>Custom integrations</li>
                <li>Advanced analytics</li>
              </ul>
              <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg w-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 px-8 md:px-24 text-center">
        <p>&copy; {new Date().getFullYear()} PieChat. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default HomePage;
    export const metadata  = {
      title: 'Home-ChatOne',
      description: 'ChatOne helps you connect with people of your choice',
    }