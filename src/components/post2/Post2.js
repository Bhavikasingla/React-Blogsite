import "./post2.css"

export default function Post2() {
  return (
    <div className="post">
        <img className="postImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1fFmgrlr-jBFYEfCPx7NIlcqGfW8ATax1ibo9tsK&s" 
        alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Style</span>
                <span className="postCat">Cinema</span>
            </div>
            <span className="postTitle">#All about life</span>
            <hr/>
            <span className="postDate">10 days ago</span>
        </div>
        <p className="postDesc"> Lorem ipsum dolor sit ametmolestias nisi? Ut, culpa.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus libero aspernatur eligendi, optio accusamus inventore atque cum sed fugiat eius sapiente? Repellendus recusandae at explicabo optio adipisci. Natus, fugit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam id impedit mollitia, quidem aut dignissimos obcaecati nemo inventore sit ipsa cum corrupti tempore non fugiat consequuntur error nesciunt. Sunt.</p>
    </div>
  )
}
