import { useRef, useState } from "react";
import { List } from "./components/List";
import "./App.css";
/**2. Создать компонент **`List`**, который отображает список элементов.
    - Компонент должен принимать массив данных в качестве props.
    - Для каждого элемента массива, компонент должен отрисовывать элемент списка **`<li>`** с уникальным ключом (key) и соответствующим содержимым.
    - Каждый элемент списка должен иметь внутри себя кнопку, при клике на которую нужно будет изменить содержимое элемента списка, например, добавить в начало 3 восклицательных знака (!!!).
3. В главном компоненте приложения (App) создать ссылку (ref) с помощью хука **`useRef`**.
    - Ссылка должна быть привязана к элементу текстового поля в компоненте.
    - Добавить еще одну кнопку, при клике на которую, задать фокус текстовому полю.
    - По вводу в текстовое поле и нажатию Enter, введенное значение попадает в список и сразу же отображается. */

function App() {
  const [text, setText] = useState([{ name: "Anna", age: 15 }]);
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleText = () => {
    if (e.key == "Enter") {
      setText(inputRef.current.value);
    }
  };
  return (
    <>
      <input ref={inputRef} onChange={handleText} />
      <List text={text} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}

export default App;
