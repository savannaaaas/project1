export const List = ({ text }) => {
  const key = crypto.randomUUID();
  return (
    <ul>
      {text.map((item) => {
        return <li></li>;
      })}
    </ul>
  );
};
