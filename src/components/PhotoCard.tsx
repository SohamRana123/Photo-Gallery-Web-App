import type { Photo } from "../types/photo";

interface Props {
  photo: Photo;
  isFav: boolean;
  toggleFav: (id: string) => void;
}

const PhotoCard = ({ photo, isFav, toggleFav }: Props) => {
  return (
    <div className="bg-slate-300 rounded-xl">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 rounded"
      />

      <div className="flex justify-between items-center mt-2 p-2">
        <p className="text-sm font-medium">{photo.author}</p>
        <button onClick={() => toggleFav(photo.id)}>
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
