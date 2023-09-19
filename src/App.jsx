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
} from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
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
