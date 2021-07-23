import "./css/Line.css";

const Line = (props) => {
  const { title, symbol } = props;
  return (
    <div className="line">
      {title} {symbol}
    </div>
  );
};
export default Line;
