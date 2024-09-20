import "./Spinner.css";

const Spinner = ({ isLoading }) => {
  return <div className={isLoading ? "loader" : ""}></div>;
};
export default Spinner;
