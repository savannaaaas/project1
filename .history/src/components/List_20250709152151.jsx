export const List = ({ text }) => {
  const handleChange = () => {};
  return (
    <>
      {text
        ? text.map(({ key, name }) => {
            return (
              <ul key={key}>
                <li>{name}</li>
                <button onClick={handleChange}>Click</button>
              </ul>
            );
          })
        : null}
    </>
  );
};
