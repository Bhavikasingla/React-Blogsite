import Post from "../post/Post"
import Post1 from "../post1/Post1"
import Post2 from "../post2/Post2"
import Post3 from "../post3/Post3"
import Post4 from "../post4/Post4"
import Post5 from "../post5/Post5"
import "./posts.css"


export default function Posts() {
  return (
    <>
    <div className="posts">
        <Post4/>
        <Post5/>
        <Post2/>
        <Post1/>
        <Post/>
        <Post3/>
    </div>
    </>
  )
}
