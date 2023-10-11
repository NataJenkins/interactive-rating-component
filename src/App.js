import { useState } from "react";
import RatingComponent from "./components/RatingComponent";

function App() {
    const [rating, setrating] = useState(0);
    return (
        <div className="App">
            <header className="App-header"></header>
            <main className="card">
                <RatingComponent rating={rating} setRating={setrating} />
            </main>
        </div>
    );
}

export default App;
