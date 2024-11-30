import { RouterProvider } from 'react-router';
import routeConfig from './routes/routeConfig';

function App() {
  return <RouterProvider router={routeConfig} />;
}

export default App;
