function Card({ title, description }) {
    return (
        <div className="bg-white shadow-md rounded-md p-4 max-w-sm w-full">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
        </div>
    );
}

export default Card;
