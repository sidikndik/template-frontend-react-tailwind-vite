import Card from "./Card";

function List({ list, className = "" }) {
    // Validasi sederhana: Jika list kosong, tampilkan pesan (mirip cek nil di Go)
    if (!list || list.length === 0) {
        return <p className="text-gray-500">Tidak ada data untuk ditampilkan.</p>;
    }

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {list.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.body}
                />
            ))}
        </div>
    );
}

export default List;