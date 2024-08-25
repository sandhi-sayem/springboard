import "./MissionFilter.css";

const MissionFilter = ({ setFilter }) => {
  const filterStatuses = ["All", "Planned", "Active", "Completed"];
  return (
    <>
      {filterStatuses.map((status, index) => (
        <button
          key={index}
          className="filterButtons"
          onClick={() => setFilter(status)}
        >
          {status}
        </button>
      ))}
    </>
  );
};

export default MissionFilter;
