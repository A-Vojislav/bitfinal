import styles from "./css/CreateReportCard.module.css";

function CreateReportCard({ id, name, email, avatar }) {
  return (

      <div className={styles.reportCardContainer} >
        <div className={styles.reportCard} key={id}>
          <img className={styles.reportAvatar} src={avatar} alt={id} />
          <h2>{name}</h2>
          <p> {email}</p>
        </div>
      </div>

  );
}

export default CreateReportCard;
