import '../styles/globals.css'
import {client} from '../lib/sanity.client'
import Image from "next/image";
import urlFor from "../components/urlFor";
import { groq } from 'next-sanity';
import {HiChevronDoubleRight} from 'react-icons/hi'
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Link from 'next/link';
import { useState } from 'react';

import { ThreeCircles } from  'react-loader-spinner'


export default function Home({posts}) { 
  console.log(posts)
  return (
    <div>
      <Navbar />
      {posts ? (
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container my-5 md:px-10">
      {posts.map((post, index) => {       
         return(
           <div key={index} className="group border-2 shadow-md cursor-pointer">
            <Link href="/blog/[slug]" as={`/blog/${post.slug.current}`}>
            
            <div className=" relative w-full h-80 overflow-hidden ">
               <Image src={urlFor(post.mainImage).url()} alt={post.author.name} fill className="group-hover:scale-110 transition-transform duration-200" />
               <div className="absolute bottom-0 left-0 w-full bg-black/80 drop-shadow-xl p-3 flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex flex-col space-y-0">
                <p className="text-white">{post.title.substring(0, 50)}...</p>
                <p className="text-white text-xs">{ new Date(post._updatedAt).toLocaleDateString("en-US", {
                  day : "numeric",
                  month : "long",
                  year : "numeric"
                })}</p>
                </div>
                {post.categories.map((item, index) => {
                 return(
                  <div key={index}>
                    <button  className=" mt-3 md:mt-0 lowercase text-white bg-[#faab0a] px-5 py-1 rounded-full">{item.title}</button>
                  </div>
                 )
                })}
               </div>
            </div>
            <div className="py-5 px-3">
             <h1 className="font-bold">{post.title.substring(0, 50)}</h1>
             <p>{post.description.substring(0, 100)}...</p>
             <button className="mt-5 flex items-center group-hover:tracking-tighter transition-all">Reade More <HiChevronDoubleRight /></button>
            </div>
            
            
            
            </Link>
           </div>
         )
       })}
      </div>

      ) :
      (

      <div className=" h-96 flex items-center justify-center">
        <ThreeCircles
  height="100"
  width="100"
  color="#faab0a"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
      </div>

      )
      
      }
    
    </div>
  )
}


export async function getServerSideProps(context) {
  const query = groq `
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `
  const posts = await client.fetch(query);
  return {
    props: {posts}
  }
}