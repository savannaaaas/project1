export const List = ({ text }) => {
  const key = crypto.randomUUID();
  return (
    <>
      {text
        ? text.map((item) => {
            return;
          })
        : null}
    </>
  );
};
