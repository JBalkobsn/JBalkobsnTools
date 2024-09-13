import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home, TsmPricing } from "./pages";
import axios from "axios";
import { AppLayout } from "./layouts";

axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/tsmPricing" element={<TsmPricing />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
};

export default App;
