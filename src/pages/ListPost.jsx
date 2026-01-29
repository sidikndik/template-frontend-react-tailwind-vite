import { useState } from "react";
import { filterPost } from "@/api/post.api";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import List from "@/components/ui/List";

function ListPost() {
    const [params, setParams] = useState({ userId: "" });
    const [message, setMessage] = useState("");
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);

    {/* handle submit filter post */ }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseData(null);
        try {
            const response = await filterPost(params);
            setResponseData(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setParams({ userId: "" });
            setMessage("Post filtered successfully");
        }
    }

    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded w-1/2 mx-auto my-4">
            {/* form */}
            <h1 className="text-2xl font-bold">List Post</h1>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="User ID" value={params.userId} onChange={(e) => setParams({ ...params, userId: e.target.value })} />
                <Button type="submit" disabled={loading}>{loading ? "Loading..." : "Filter Post"}</Button>
            </Form>

            {/* message success filter post */}
            <div className="text-green-500">{message}</div>

            {/* response data */}
            {responseData && responseData.length > 0 && (
                <List list={responseData} className="flex flex-col gap-2" />
            )}
        </div>
    );
}
export default ListPost;      
