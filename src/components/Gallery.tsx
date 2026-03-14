import { useCallback, useMemo, useReducer, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouriteReducer, initialState } from "../reducer/favouriteReducer";
import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";
import Spinner from "./Spinner";

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState<string>("");
  const [state, dispatch] = useReducer(favouriteReducer, initialState);
  const toggleFav = (id: string) => {
    dispatch({ type: "Toggle_favourite", payload: id });
  };
  const handleSearch = useCallback((value: string) => setSearch(value), []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading)
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;
  return (
    <div className="p-4">
      <SearchBar search={search} setSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={state.favourites.includes(photo.id)}
            toggleFav={toggleFav}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
