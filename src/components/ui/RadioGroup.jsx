function RadioGroup({ label, options, name, value, onChange }) {
    return (
        <div className="flex flex-col gap-2">
            <span className="font-bold text-gray-700">{label}</span>
            <div className="flex gap-4">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={() => onChange(option.value)}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default RadioGroup;