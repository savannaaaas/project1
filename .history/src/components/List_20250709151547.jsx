export const List = ({ text, key }) => {
  return (
    <>
      {text
        ? text.map((item) => {
            return (
              <ul>
                <li key={key}>{item.name}</li>
              </ul>
            );
          })
        : null}
    </>
  );
};
