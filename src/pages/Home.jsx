import { useEffect, useState } from "react";
import List from "@/components/ui/List";

function Home() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setList(data));
    }, []);

    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded w-1/2 mx-auto my-4">
            {/* list */}
            <h2 className="text-2xl font-bold">List Data</h2>
            <List
                list={list}
                className="bg-white p-4 rounded-2xl shadow-inner"
            />
        </div>
    );
}

export default Home;