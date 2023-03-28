import {previewData} from 'next/headers'
import Banner from '@/components/banner'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'

import {groq} from 'next-sanity'
import { client } from '@/lib/sanity.client'
import  PreviewSuspense  from '../components/PreviewSuspense'
import PreviewBlogList from '@/components/previewBlogList'
import BlogList from '@/components/blogList'

const query = groq `
*[_type == "post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

export default async function Home() {
  
  if(previewData()){
    return <PreviewSuspense fallback={
      <div role='status'>
        <p className="text-center text-lg animate-pulse text-[#faab0a]">
          Loading Preview Data...
        </p>
      </div>
    }>
      <PreviewBlogList query={query} />
    </PreviewSuspense> 
  }
  const posts = await client.fetch(query)
  
  return <BlogList posts={posts} />
}
