import {usePreview} from '../lib/sanity.preview'
import BlogList from './blogList'
type Props = {
    query : string
}

export default function PreviewBlogList({query} : Props) {
    const posts = usePreview(null, query)
    console.log("LOADING Posts...", posts)
  return <BlogList posts={posts} />
}
