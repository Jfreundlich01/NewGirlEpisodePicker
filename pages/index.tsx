import { trpc } from "@/components/utils/trpc";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchItemData = () => {
    fetch(`/api/db/movies`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.data);
      })
      // TODO implement error logging
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchItemData();
  }, []);

  return (
    <>
      <div>Hello This is DeV</div>
      {movies.map((movie, index) => (
        <div key={index}>{movie}</div>
      ))}
    </>
  );
}
