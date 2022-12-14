import { Link, NavLink } from "react-router-dom";
import "./topbar.css"
export default function TopBar() {
  const user = false;
  return (
   // <>
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/sidebar">
              ABOUT
            </Link></li>
          <li className="topListItem">
            <Link className="link" to="/settings">
              CONTACT
            </Link></li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          // <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkO-zoVBqOD1ukJWrggYfbPdqJ84REsFtClQ&usqp=CAU"
              alt=""
            />
          // </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    //</>
  );
}
