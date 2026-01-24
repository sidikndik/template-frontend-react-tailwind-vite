import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import List from "@/components/ui/List";

function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // list
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setList(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    };

    return (
        <div className="flex flex-col gap-4">
            {/* form */}
            <h1>Form Data</h1>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Click me</Button>
            </Form>

            {/* list */}
            <h2>List Data</h2>
            <List className="flex flex-col gap-4">
                {list.map((item) => (
                    <Card key={item.id} title={item.title} description={item.body} />
                ))}
            </List>
        </div>
    );
}

export default Home;