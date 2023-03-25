import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './SingleCandidate.module.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function SingleCandidate() {
    const {id}= useParams();
    console.log(id)
    const [candidate, setCandidate] = useState({});
    const [reports, setReports] = useState([]);
    const API_URL = `http://localhost:3333/api/candidates/${id}`;

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

    async function fetchReports() {
        const response = await fetch(`http://localhost:3333/api/reports?candidateId=${id}`, {
            method: "GET",
            params: {
                accessToken: "ey...Yc",
                Authorization: "Bearer",
            },
        });
        const data = await response.json();
        setReports(data);
    }

    useEffect(() => {
        fetchCandidate();
        fetchReports();
    }, [id]);

    return (
        <>
    <Header />
        <div className={styles.container}>
            <h2>{candidate.name}</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Interview Date</th>
                        <th>Phase</th>
                        <th>Status</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.companyName}</td>
                            <td>{report.interviewDate}</td>
                            <td>{report.phase}</td>
                            <td>{report.status}</td>
                            <td>{report.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Footer />
        </>
    );
}

export default SingleCandidate;
