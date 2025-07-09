export const List = ({ text }) => {
  return (
    <>
      {text
        ? text.map(({ name, key }) => {
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
