import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://i.ytimg.com/vi/yrTP-k26e94/maxresdefault.jpg" 
            alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor Maxime deleniti reprehenderit fugit necessitatibus consequuntur.
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                
                <span className="singlePostAuthor">Author: <b>Bhavii</b></span>
                <span className="singlePostDate"> 1 hour ago </span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus
                 dolore modi reiciendis! Quos fugit vitae unde, dolor beatae facere! Nobis, tenetur 
                saepe iure debitis laudantium consequuntur sint blanditiis aperiam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus
                 dolore modi reiciendis! Quos fugit vitae unde
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus
                 dolore modi reiciendis! Quos fugit vitae unde
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus
                 dolore modi reiciendis! Quos fugit vitae unde
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus
                 dolore modi reiciendis! Quos fugit vitae unde
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus
                 dolore modi reiciendis! Quos fugit vitae unde
                 </p>
        </div>
    </div>
  )
}
