import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
         alt="" />
    </div>
  )
}
