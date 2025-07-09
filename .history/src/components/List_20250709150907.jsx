export const List = ({ text }) => {
  const key = crypto.randomUUID();
  return (
    <>
      {text
        ? text.map((item) => {
            return (
              <ul key={key}>
                <li>{item.name}</li>
                <li>{item.age}</li>
              </ul>
            );
          })
        : null}
    </>
  );
};
