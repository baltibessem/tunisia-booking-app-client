import React, {useState} from 'react'
import ReactStars from 'react-rating-stars-component'




const Reviews = () => {
    const [rating, setrating] = useState(5);
    const [comment, setcomment] = useState("");

  return (
    <div>
            <h5>
                Donner un avis
            </h5>
            <ReactStars
        count={5}
        size={28}
        color={"black"}
        char={"☆"}
        isHalf={true}
        activeColor="#ffd700"
        onChange={(e) => {
          setrating(e);
        }}
      />
        <input
        type="text"
        className="form-control mt-2"
        value={comment}
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      />
      <button className="btn mt-3 ml-1">
        {" "}
        Submit Review{" "}
      </button>

    </div>
  )
}

export default Reviews