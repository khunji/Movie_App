import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams(); //const params = useParams(); const id = params.id;
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetail(json.data.movie); //위의 json파일을 url에 넣어서 직접 보면 movies가 아닌 movie
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.movie}>
          <img src={detail.medium_cover_image} alt={detail.title} />
          <div>
            <h2>{detail.title_long}</h2>
            <h2>Rating : {detail.rating}</h2>
            <h2>Runtime : {detail.runtime}</h2>
            <ul>
              {detail.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <h2>Summary</h2>
            <h5>{detail.description_full}</h5>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
