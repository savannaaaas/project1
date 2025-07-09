export const List = ({ text }) => {
  const key = crypto.randomUUID();
  return (
    <>
      {text.map((item) => {
        return (
          <ul key={key}>
            <li></li>
          </ul>
        );
      })}
    </>
  );
};
