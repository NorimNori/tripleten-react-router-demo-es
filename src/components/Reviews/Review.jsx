import "./Review.css";
import { useParams } from "react-router-dom";

function Review({ reviews }) {
  const params = useParams();
  let id = params.reviewId;
  // Disminuye el id del parámetro para que podamos acceder a los elementos correctos. Esto
  // es necesario, ya que el índice de un array comienza por el 0, mientras que el de los IDs
  // en la API comienzan por el 1.
  id = id - 1;

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">
            Calificación final:{reviews[id]?.rating}/5
          </p>
        </div>
      )}
    </div>
  );
}

export default Review;
