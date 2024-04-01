import ViewBlog from "@/pages/Blogs/ViewBlog";
import { NavRoutes } from "../components/constants";
import Blogs from "../pages/Blogs/Blogs";
import { Route, Routes } from "react-router-dom";

const BlogsRoute = () => {
  return (
    <Routes>
      <Route index element={<Blogs />} />
      <Route path={NavRoutes.ViewBlog} element={<ViewBlog />} />
    </Routes>
  );
};

export default BlogsRoute;
