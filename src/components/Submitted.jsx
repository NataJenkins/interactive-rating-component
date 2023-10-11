import React from "react";
import illustration from "../assets/images/illustration-thank-you.svg";

export default function Submitted({ rating }) {
    return (
        <div className="submitted">
            <div className="illustriation">
                <img src={illustration} alt="illustration" />
            </div>
            <div className="label">{`You selected ${rating} out of 5`}</div>
            <h1>Thank You!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
}
