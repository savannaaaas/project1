export const List = ({ text }) => {
  const key = crypto.randomUUID();
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
