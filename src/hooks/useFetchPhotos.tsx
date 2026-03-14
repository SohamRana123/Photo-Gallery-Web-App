import { useEffect, useState } from "react";
import type { Photo } from "../types/photo";

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch("https://picsum.photos/v2/list?limit=30");
        if (!res.ok) throw new Error("Failed to fetch photos");
        const data: Photo[] = await res.json();
        setPhotos(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

export default useFetchPhotos;
