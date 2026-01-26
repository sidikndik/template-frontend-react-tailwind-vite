import { useState } from "react";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import DropdownMenu from "@/components/ui/Dropdown-menu";
import RadioGroup from "@/components/ui/RadioGroup";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dropdown, setDropdown] = useState("");
    const [radio, setRadio] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, dropdown, radio);
    };

    const radioOptions = [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
    ];

    return (
        <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded w-1/2 mx-auto my-4">
            {/* form register */}
            <h1 className="text-2xl font-bold">Form Register</h1>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <DropdownMenu label="Select" value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </DropdownMenu>
                <RadioGroup
                    label="Pilih Level Developer:"
                    name="radio"
                    options={radioOptions}
                    value={radio}
                    onChange={(val) => setRadio(val)}
                />
                <Button type="submit">Register</Button>
            </Form>
        </div>
    );
}

export default Register;