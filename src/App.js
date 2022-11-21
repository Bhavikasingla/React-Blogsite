import Home from "./pages/home/Home";
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import TopBar from "./components/topbar/TopBar"; 
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
 import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import SideBar from "./components/sidebar/SideBar";
function App() {
   const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/posts" element={<Home/>} />
        <Route exact path="/sidebar" element={<SideBar/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
