export const List = ({ text, setText }) => {
  const handleChange = (key, name) => {
    return setText(
      text.map((item) =>
        key === item.key
          ? {
              key: key,
              name: name.startsWith("!!!") ? name.slice(3) : "!!!" + name,
            }
          : item
      )
    );
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
