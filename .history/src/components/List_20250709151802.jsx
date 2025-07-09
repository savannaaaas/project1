export const List = ({ text }) => {
  return (
    <>
      {text
        ? text.map(({ name, key }) => {
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
