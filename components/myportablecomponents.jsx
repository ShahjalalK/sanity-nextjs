import Image from "next/image"
import urlFor from "./urlFor"
import Link from "next/link"
const myPortableTextComponents = {
    types: {
      image: ({value}) => 
      <div className=" relative w-full h-96 m-10 mx-auto">
        <Image src={urlFor(value).url()} fill alt="blog post image" className=" object-contain" />
      </div>,
      callToAction: ({value, isInline}) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <Link href={value.href} rel={rel} className=" underline  decoration-[#faab0a] hover:decoration-black">
            {children}
          </Link>
        )
      },
    },

    list: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <ul className="ml-5 py-5 list-disc space-y-5">{children}</ul>,
      number: ({children}) => <ol className="mt-lg list-decimal">{children}</ol>,
  
      // Ex. 2: rendering custom lists
      checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },
  
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-5xl py-10 font-bold">{children}</h1>,
      h2: ({children}) => <h2 className="text-4xl py-10 font-bold">{children}</h2>,
      h3: ({children}) => <h3 className="text-3xl py-10 font-bold">{children}</h3>,
      h4: ({children}) => <h4 className="text-2xl py-10 font-bold">{children}</h4>,
      h5: ({children}) => <h5 className="text-xl py-10 font-bold">{children}</h5>,
      blockquote: ({children}) => <blockquote className="border-l-[#faab0a] border-l-4 pl-5">{children}</blockquote>,
  
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-[#faab0a]">{children}</h2>
      ),
    },
    
  }


  export default myPortableTextComponents