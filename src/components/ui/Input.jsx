function Input({ type, placeholder, value, onChange, className }) {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`border border-gray-300 rounded-md p-2 ${className}`} />
    );
}

export default Input;