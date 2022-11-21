import "./post1.css"

export default function Post1() {
  return (
    <div className="post">
        <img className="postImg" src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" 
        alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Cinema</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Nature !</span>
            <hr/>
            <span className="postDate">3 weeks ago</span>
        </div>
        <p className="postDesc"> Lorem ipsum dolor sit ametmolestias nisi? Ut, culpa.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus libero aspernatur eligendi, optio accusamus inventore atque cum sed fugiat eius sapiente? Repellendus recusandae at explicabo optio adipisci. Natus, fugit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam id impedit mollitia, quidem aut dignissimos obcaecati nemo inventore sit ipsa cum corrupti tempore non fugiat consequuntur error nesciunt. Sunt.</p>
    </div>
  )
}
