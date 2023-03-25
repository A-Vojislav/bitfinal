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
		setCandidates(data.slice(0,6));
		//setFilteredUsers(data.results);
	}

	useEffect(() => {
		fetchUsers();
	}, []);

	console.log(candidates);



	return (
		<div className="Candidate">
			{candidates.map((render) => {
				return (
                    <Card id={render.id} name={render.name} birthday={render.birthday}
                     email={render.email} education={render.education} avatar={render.avatar}>

                    </Card>

				);
			})}
		</div>
	);
};

export default CandidateReports;
