import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhX25DiiLcOJu3_SR2L38hTT-Qljo2TYlwg&usqp=CAU" 
        alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Beauty of nature...</span>
            <hr/>
            <span className="postDate">1 month ago</span>
        </div>
        <p className="postDesc"> Lorem ipsum dolor sit ametmolestias nisi? Ut, culpa.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus libero aspernatur eligendi, optio accusamus inventore atque cum sed fugiat eius sapiente? Repellendus recusandae at explicabo optio adipisci. Natus, fugit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam id impedit mollitia, quidem aut dignissimos obcaecati nemo inventore sit ipsa cum corrupti tempore non fugiat consequuntur error nesciunt. Sunt.</p>
    </div>
  )
}
