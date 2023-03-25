import { useState, useEffect } from "react";
import Card from "../Card";

const CandidateReports = () => {
  const [candidates, setCandidates] = useState([]);
  const API_URL = "http://localhost:3333/api/candidates";

  async function fetchUsers() {
    const response = await fetch(API_URL, {
      method: "GET",
      params: {
        accessToken: "ey...Yc",
        Authorization: "Bearer",
      },
    });
    const data = await response.json();
    setCandidates(data.slice(0, 6));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="Candidate">
      {candidates.map((render) => {
        return (
          <Card
            key={render.id}
            id={render.id}
            name={render.name}
            email={render.email}
            avatar={render.avatar}
          />
        );
      })}
    </div>
  );
};

export default CandidateReports;
