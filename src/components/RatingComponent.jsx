import React from "react";
import Star from "../assets/images/icon-star.svg";
import "./styles.scss";

export default function RatingComponent({ rating, setRating }) {
    return (
        <>
            <div className="icon-container">
                <img src={Star} alt="icon" />
            </div>
            <div className="text">
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index === rating ? "on" : "off"}
                            onClick={() => setRating(index)}
                        >
                            {index}
                        </button>
                    );
                })}
            </div>
            <button className="submit">Sumbit</button>
        </>
    );
}
