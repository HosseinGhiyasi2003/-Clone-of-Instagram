import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'

function App() {

  let router = useRoutes(routes);

  return (
      router
  );
}

export default App
