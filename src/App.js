import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="app">
      {!startQuiz ? <Welcome onStart={() => setStartQuiz(true)} /> : <Quiz />}
    </div>
  );
}

export default App;
