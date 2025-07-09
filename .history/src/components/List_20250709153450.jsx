import { useState } from "react";

export const List = ({ text, setText }) => {
  const [newText, setNewtext] = useState("");
  const handleChange = (key, name) => {
    return text.key == key
      ? setText([...text, { key: key, name: "!!!" + name }])
      : null;
  };
  return (
    <>
      {text
        ? text.map(({ key, name }) => {
            return (
              <ul key={key}>
                <li>{name}</li>
                <button onClick={() => handleChange(key, name)}>Click</button>
              </ul>
            );
          })
        : null}
    </>
  );
};
