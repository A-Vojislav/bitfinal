import { useState, useEffect } from "react";
import Loading from "../servicePages/Loading";
import ErrorPage from "../servicePages/ErrorPage";
import NoData from "../servicePages/NoData";
import SearchBar from "../searchBar/SearchBar";
import Button from "../servicePages/Button";
import CreateReportCard from "../servicePages/CreateReportCard";

import styles from "./CandidateSelect.module.css";

const CandidateSelect = () => {
  const API_URL = "http://localhost:3333/api/candidates";
  const [candidates, setCandidates] = useState([]);
  const [filterCandidates, setFilterCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selected, setSelected] = useState(null);

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
      setCandidates(data.slice(0, 6));
      setFilterCandidates(data.slice(0, 6));
      setIsLoading(false);
    } catch {
      setHasError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function userSelected(render) {
    setSelected(render);
    console.log(render.name);
  }

  function renderCandidates() {
    if (filterCandidates.length === 0) {
      return <NoData />;
    }
    if (filterCandidates.length > 0) {
      return (
        <div className={styles.holder}>
          <div className={styles.leftSide}>
        dadadabla bal
          </div>

          <div className={styles.rightSide}>
            <h1>Select Candidate</h1>
            {filterCandidates.map((render) => {
              return (
                <>
                  <CreateReportCard
                    key={render.id}
                    name={render.name}
                    email={render.email}
                    avatar={render.avatar}
                  />
                </>
              );
            })}
                        <div className={styles.buttonHolder}>
            <Button className={styles.button}>Next</Button>
            </div>
          </div>
        </div>
      );
    }
  }

  const handleSearch = (query) => {
    const filtered = candidates.filter((user) => {
      const name = `${user.name}`.toLowerCase();
      return name.includes(query.toLowerCase());
    });
    setFilterCandidates(filtered);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (hasError) {
    return <ErrorPage />;
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <h1>Create Report wizard</h1>
      bla
      {renderCandidates()}

    </>
  );
};

export default CandidateSelect;
