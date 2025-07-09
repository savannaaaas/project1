export const List = ({ text, setText }) => {
  const handleChange = (key, name) => {
    return setText([
      {
        key: key,
        name: name.startsWith("!!!") ? name.slice(3) : "!!!" + name,
      },
    ]);
  };
  return (
    <>
      {text
        ? text.map(({ key, name }) => {
            return (
              <ul>
                <li key={key}>{name}</li>
                <button onClick={() => handleChange(key, name)}>Click</button>
              </ul>
            );
          })
        : null}
    </>
  );
};
