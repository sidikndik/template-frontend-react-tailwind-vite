function List({ children, className }) {
    return (
        <ul className={`list-disc list-inside ${className}`}>
            {children}
        </ul>
    );
}

export default List;
