import "./settings.css"
import SideBar from "../../components/sidebar/SideBar";
export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form onSubmit = {(e)=>e.preventDefault()} className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img 
              src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
              alt="" 
              />
              <br/>
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="bhavi" />
            <label>Email</label>
            <input type="email" placeholder="noor@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <SideBar/>
    </div>
  )
}
