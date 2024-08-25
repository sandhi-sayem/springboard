import "./MissionAction.css";

const MissionAction = ({ missionId, onUpdateMissionStatus }) => {
  return (
    <>
      <button
        className="missionButtons"
        onClick={() => onUpdateMissionStatus(missionId, "Active")}
      >
        Launch
      </button>
      <button
        className="missionButtons"
        onClick={() => onUpdateMissionStatus(missionId, "Completed")}
      >
        Complete
      </button>
    </>
  );
};

export default MissionAction;
