import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  About,
  Services,
  Contact,
  Blogs,
  Blog,
  Reservation,
  Notfound,
} from "./pages";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
