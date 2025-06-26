import React from "react";
import "./app.scss";

export const App: React.FC = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click +1</button>
        </div>
    );
};
