import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Company from "./pages/Company/Company";
import Career from "./pages/Career/Career";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";

import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
