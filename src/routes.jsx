import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const routes = [
  {path: '/', element: <Login/>},
  {path: '/signup', element: <Signup/>},
  {path: '/home', element: <Home/>},
  {path: '/home/:username', element: <ProfilePage/>},
]

export default routes;