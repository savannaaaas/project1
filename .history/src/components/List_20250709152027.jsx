export const List = ({ text }) => {
  return (
    <>
      {text
        ? text.map(({ key, name }) => {
            return (
              <ul key={key}>
                <li>{name}</li>
              </ul>
            );
          })
        : null}
    </>
  );
};
