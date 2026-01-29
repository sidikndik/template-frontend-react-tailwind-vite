import { useState } from "react";
import { updatePost } from "@/api/post.api";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";

function UpdatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [message, setMessage] = useState("");
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);

    {/* handle submit update post */ }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await updatePost(1, { title, body, userId: 1 });
            setResponseData(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setTitle("");
            setBody("");
            setMessage("Post updated successfully");
        }
    }

    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded w-1/2 mx-auto my-4">
            {/* form */}
            <h1 className="text-2xl font-bold">Update Post</h1>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
                <Button type="submit" disabled={loading}>{loading ? "Loading..." : "Update Post"}</Button>
            </Form>

            {/* message success update post */}
            <div className="text-green-500">{message}</div>

            {/* response data */}
            {responseData && (
                <div className="flex flex-col gap-2">
                    <p className="text-green-500">ID: {responseData.id}</p>
                    <p className="text-green-500">Title: {responseData.title}</p>
                    <p className="text-green-500">Body: {responseData.body}</p>
                    <p className="text-green-500">User ID: {responseData.userId}</p>
                </div>
            )}
        </div>
    );
}
export default UpdatePost;  