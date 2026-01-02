import "./Reviews.css";

function Reviews({ reviews }) {
  return (
    <div>
      <ul className="reviews__list">
        {reviews &&
          reviews.map((review) => {
            return (
              <li key={review.id} className="reviews__item">
                {review.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Reviews;
