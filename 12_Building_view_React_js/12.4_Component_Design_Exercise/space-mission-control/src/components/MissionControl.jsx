import { useState } from "react";

import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";

import "./MissionControl.css";

const MissionControl = ({ initialMissions }) => {
  const DEFAULT_STATUS = "All";

  const [filter, setFilter] = useState(DEFAULT_STATUS);
  const [missions, setMissions] = useState(initialMissions);

  const filteredMissions = missions.filter(
    (mission) => filter === "All" || mission.status === filter
  );

  const updateMissionStatus = (id, newStatus) =>
    setMissions((prevMissions) =>
      prevMissions.map((mission) =>
        mission.id === id ? { ...mission, status: newStatus } : mission
      )
    );

  return (
    <>
      <h1>Space Mission Control</h1>

      <div className="filterContainer">
        <MissionFilter setFilter={setFilter} />
      </div>

      {filteredMissions.map((mission, index) => {
        const { id, name, status, crew } = mission;
        return (
          <div key={id} className="missionContainer">
            <div>
              <MissionCard
                key={index}
                name={name}
                status={status}
                crew={crew}
              />
            </div>

            <div>
              <MissionAction
                missionId={id}
                onUpdateMissionStatus={updateMissionStatus}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MissionControl;
