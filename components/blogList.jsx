import Image from "next/image"
import urlFor from "./urlFor"


export default function BlogList({posts}) { 
 
  return (
    <div>
      <hr className="border-[#faab0a] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-5 px-10 mx-auto cursor-pointer">
      {
        posts.map((post, index) => ( 
                   
          <div key={index} className="group">
            <div className="relative w-full h-80 drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out">
              
              <Image src={urlFor(post.mainImage).url()} alt={post.author.name} fill />
              <div className=" absolute bottom-0 w-full  backdrop-blur-xl bg-white/20 flex flex-col md:flex-row space-y-5 md:space-y-0 items-start justify-between p-3">
                <div className="text-white ">
                  <p className=" font-bold">{post.title.substring(0, 40)}...</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString(
                      "en-US", {
                        day : "numeric",
                        month : "long",
                        year : "numeric"
                      }
                    )}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories?.map((category, index) =>(
                    <div key={index} className="bg-[#f7ab0a]  text-center text-black px-5 py-1 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>                
              </div>             
            </div>
            <div className="px-3 py-5 ">            
             <h4 className=" font-medium">{post.title.substring(0, 40)}</h4>
             <p className="line-clamp-2 text-gray-500">{post.description.substring (0, 100)}...</p>
             <button className="mt-5 block font-bold group-hover:underline">Read Post {`>`}</button>
            </div>
          </div>
             
        ))
      }
      </div>
    </div>
  )
}
