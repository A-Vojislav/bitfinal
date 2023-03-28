import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { useEffect, useState } from "react";

function ReportsHome() {
    const API_URL='http://localhost:3333/api/reports'


    const [fetchReports, setFetchReports] = useState([]);
	const [hasError, setHasError] = useState(false);

    async function fetchUsers() {
		try {
			const response = await fetch(API_URL, {
				method: "GET",
				params: {
					accessToken: "ey...Yc",
					Authorization: "Bearer",
				},
			});
			const data = await response.json();
			setFetchReports(data);
		} catch {
			setHasError(true);
		}
	}

	useEffect(() => {
		fetchUsers();
	}, []);


    return ( 
        <>
            <Header />
            {fetchReports.map((render) => {
						return (
                            <ul key={render.id}>
                                <li>
                                    {render.companyName}
                                </li>
                                <li>
                                    {render.candidateName}
                                </li>
                                <li>
                                    {render.interviewDate}
                                </li>
                                <li>
                                    {render.status}
                                </li>
                                <li>
                                    view, delete
                                </li>
                            </ul>
						);
					})}
            <Footer />
        </>
     );
}

export default ReportsHome;