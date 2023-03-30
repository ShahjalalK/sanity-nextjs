import { groq } from "next-sanity"
import { useRouter } from "next/router"
import { client } from "../../lib/sanity.client"
import Navbar from "../../components/navbar"
import Image from "next/image"
import urlFor from "../../components/urlFor"
import { PortableText } from '@portabletext/react'
import myPortableTextComponents from '../../components/myportablecomponents'


export default function BlogItem({ blog }) {

    console.log(blog)
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={`relative p-5 text-white`}>
                    <Image src={urlFor(blog.mainImage).url()} fill alt={blog.author.name} className="w-full object-cover h-full -z-10" />
                    <div className=" absolute top-0 left-0 w-full h-full content-[''] -z-10 bg-[#faab0a]/75"></div>
                    <div className=" z-10">
                        <div className="text-white">
                            <div>
                                <div className="flex mb-5 items-center gap-1 md:pr-52">

                                    <div className=" relative w-8 h-8 border-gray-600 overflow-hidden rounded-full border p-1">
                                        <Image src={urlFor(blog.author.image).url()} alt={blog.author.name} fill className=" rounded-full w-8 h-8 object-cover" />
                                    </div>
                                    <p className=" font-bold capitalize">{blog.author.name} <sup className="text-xs text-gray-100">(Author)</sup></p>
                                </div>
                                <h1 className="font-extrabold text-4xl">{blog.title}</h1>

                            </div>

                            <p className="mt-3 font-medium">{blog.description}</p>
                        </div>
                        <div className="mt-10 space-y-5 md:space-y-0 flex justify-between items-start">

                            <p className="font-bold">-{new Date(blog._updatedAt).toLocaleDateString(
                                "en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }
                            )}</p>
                            <div>
                                <span className="border border-gray-100 px-5 py-1 rounded-full"> Nodejs {blog.categories?.title}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <PortableText
                        value={blog.body}
                        components={myPortableTextComponents}
                    />
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { slug } = context.query
    const query = groq`
    *[_type == "post" && slug.current == '${slug}'][0]{
        ...,
    author->,
    categories[]->
    }
`
    const blog = await client.fetch(query)
    return {
        props: { blog }, // will be passed to the page component as props
    }
}