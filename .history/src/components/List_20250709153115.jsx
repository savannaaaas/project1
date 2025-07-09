export const List = ({ text, setText }) => {
  const handleChange = (key) => {
    return key == text.key
      ? setText([...text, { key: key, name: "!!!" + text.name }])
      : null;
  };
  return (
    <>
      {text
        ? text.map(({ key, name }) => {
            return (
              <ul key={key}>
                <li>{name}</li>
                <button onClick={() => handleChange(key)}>Click</button>
              </ul>
            );
          })
        : null}
    </>
  );
};
