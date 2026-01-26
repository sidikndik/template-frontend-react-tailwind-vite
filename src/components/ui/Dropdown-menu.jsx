function DropdownMenu({ label, ...props }) {
    return (
        <div className="flex flex-col gap-4">
            <label htmlFor="">{label}</label>
            <select className="border border-gray-300 rounded p-2" {...props}>
                {props.children}
            </select>
        </div>
    );
}

export default DropdownMenu;