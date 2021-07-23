import "./css/Line.css";

const Line = (props) => {
  const { title, symbol } = props;
  return (
    <div>
      {title} {symbol}
    </div>
  );
};
export default Line;
