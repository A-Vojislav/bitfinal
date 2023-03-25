import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleCandidate() {
    const {id}= useParams();
    const API_URL = `http://localhost:3333/api/candidates/${id}`;
    const [candidate, setCandidate] = useState({});

    async function fetchCandidate() {
		const response = await fetch(API_URL, {
			method: "GET",
			params: {
				accessToken: "ey...Yc",
				Authorization: "Bearer",
			},
		});
		const data = await response.json();
		setCandidate(data);
	}

    useEffect(() => {
		fetchCandidate();
	}, [id]);

    return ( 
        <div>
            <h2>{candidate.name}</h2>
            <h2>{candidate.email}</h2>
            <h2>{candidate.education}</h2>
            <h2>{candidate.birthday}</h2>
            
        </div>
     );
}

export default SingleCandidate;
