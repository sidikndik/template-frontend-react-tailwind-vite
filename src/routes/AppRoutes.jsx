import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AddPost from "@/pages/AddPost";
import UpdatePost from "@/pages/UpdatePost";
import DeletePost from "@/pages/DeletePost";
import ListPost from "@/pages/ListPost";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/update-post" element={<UpdatePost />} />
                <Route path="/delete-post" element={<DeletePost />} />
                <Route path="/list-post" element={<ListPost />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;