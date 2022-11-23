import "./App.css";
import { CoursePage } from "./course/CoursePage";
import { GlobalErrorHandler } from "./Error/Error";

document.addEventListener("error", (e) => {
  console.log(error);
});

function App() {
  return (
    <div className="App">
      <GlobalErrorHandler>
        <CoursePage />
      </GlobalErrorHandler>
    </div>
  );
}

export default App;
