export const List = ({ text, setText }) => {
  const handleChange = (key, name) => {
    return ? setText([
          ...text,
          {
            key: key,
            name: name.startsWith("!!!") ? name.slice(3) : "!!!" + name,
          },
        ])
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
