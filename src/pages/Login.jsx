import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import { useState } from "react";
import Input from "@/components/ui/Input";
import CheckBox from "@/components/ui/CheckBox";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleRemember = (e) => {
        setRemember(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    };

    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded w-1/2 mx-auto my-4">
            {/* form */}
            <h1 className="text-2xl font-bold">Form Login</h1>
            <Form onSubmit={handleSubmit}>
                <CheckBox label="Remember me" checked={remember} onChange={handleRemember} />
                <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Login</Button>
            </Form>
        </div>
    );
}

export default Login;