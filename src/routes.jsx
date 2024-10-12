import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const routes = [
  {path: '/', element: <Login/>},
  {path: '/signup', element: <Signup/>},
  {path: '/home', element: <Home/>},
]

export default routes;