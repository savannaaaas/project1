import { useRef, useState } from "react";
import { List } from "./components/List";
import "./App.css";

function App() {
  const [text, setText] = useState([{ key: 12, name: "Anna" }]);
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleText = (event) => {
    const key = crypto.randomUUID();
    if (event.key === "Enter") {
      setText([...text, { key: key, name: inputRef.current.value }]);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <input ref={inputRef} onKeyDown={handleText} />
      <List text={text} setText={setText} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}

export default App;
