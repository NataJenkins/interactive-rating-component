import { useState } from "react";
import RatingComponent from "./components/RatingComponent";
import Submitted from "./components/Submitted";
function App() {
    const [rating, setrating] = useState(0);
    const [submmitted, setSubmmitted] = useState(false);

    return (
        <div className="App">
            <main className="card">
                {!submmitted ? (
                    <RatingComponent
                        rating={rating}
                        setRating={setrating}
                        setSubmmitted={setSubmmitted}
                    />
                ) : (
                    <Submitted rating={rating} />
                )}
            </main>
        </div>
    );
}

export default App;
