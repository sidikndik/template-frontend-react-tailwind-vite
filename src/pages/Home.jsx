import List from "@/components/ui/List";
import LoaderModal from "@/components/ui/Loarder";
import useFetch from "@/hooks/useFetch";
import { getPost } from "@/api/post.api";

function Home() {
  const { data: posts, isLoading, error } = useFetch(getPost);

  return (
    <div className="mx-auto flex w-1/2 flex-col gap-4 rounded border border-gray-300 p-4 my-5">
      <LoaderModal isOpen={isLoading} text="Sedang mengambil postingan..." />
      <h2 className="text-2xl font-bold text-gray-800">List Data Post</h2>
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-600 border border-red-200">
          Gagal memuat data: {error.message || "Terjadi kesalahan sistem."}
        </div>
      )}
      {!isLoading && posts && posts.length > 0 ? (
        <List
          list={posts}
          className="bg-white p-4 rounded-2xl shadow-inner"
        />
      ) : (
        !isLoading && !error && (
          <p className="text-center text-gray-500 italic">
            Belum ada postingan yang tersedia.
          </p>
        )
      )}
    </div>
  );
}

export default Home;