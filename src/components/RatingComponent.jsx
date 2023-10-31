import React from "react";
import Star from "../assets/images/icon-star.svg";
import "./styles.scss";

export default function RatingComponent({ rating, setRating, setSubmmitted }) {
    const handleSubmit = () => {
        if (rating >= 1) {
            setSubmmitted(true);
        }
    };

    return (
        <>
            <div className="icon-container">
                <img src={Star} alt="" />
            </div>
            <div className="text">
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <form>
                <fieldset>
                    <div className="rating">
                        {[...Array(5)].map((_, index) => {
                            index += 1;
                            return (
                                <label>
                                    <input
                                        type="radio"
                                        name="options"
                                        key={index}
                                        className={
                                            index === rating ? "on" : "off"
                                        }
                                        onClick={() => setRating(index)}
                                    />{" "}
                                    <span>{index}</span>
                                </label>
                            );
                        })}
                    </div>
                </fieldset>
                <button
                    className="submit"
                    onClick={() => handleSubmit()}
                    type="submit"
                >
                    Sumbit
                </button>
            </form>
        </>
    );
}
