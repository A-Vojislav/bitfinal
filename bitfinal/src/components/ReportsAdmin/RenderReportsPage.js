import ReportModal from "../pages/ReportModal";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from './css/RenderReportsPage.module.css';

function RenderReportsPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalReport, setModalReport] = useState({});

	const API_URL = "http://localhost:3333/api/reports";

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



    function handleOpenModal(report) {
        setModalReport(report);
        setIsModalOpen(true);
    }
    
    function handleCloseModal() {
        setIsModalOpen(false);
        console.log('triger');
    }

    const formatDate = (someDate) => {
		let date = new Date(someDate);
		let month = date.toLocaleString("en-US", { month: "2-digit" });
		let day = date.toLocaleString("en-US", { day: "2-digit" });
		let year = date.getFullYear();
	  
		return `${day}.${month}.${year}`;
	  };


	return (
		<>
        {isModalOpen && <ReportModal onClose={handleCloseModal} modalReport={modalReport} />}

			{fetchReports.map((render) => {
				return (
					<ul key={render.id} className={styles.ulHolder}>
                        <li className={styles.firstLi}>{render.companyName}</li>
						<li>{render.candidateName}</li>
						<li>{formatDate(render.interviewDate)}</li>
						<li>{render.status}</li>
						<li>
							<FontAwesomeIcon 
                            className={styles.eye}
                            role="button"
                             icon={faEye}
                             onClick={()=>{handleOpenModal(render)}} />
						</li>
						<li>
							<FontAwesomeIcon role="button" icon={faTrash} />
						</li>
					</ul>
				);
			})}
		</>
	);
}

export default RenderReportsPage;
