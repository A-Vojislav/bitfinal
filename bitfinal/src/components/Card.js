import styles from './Card.module.css';

function Card({id, name, birthday, email, education, avatar}) {
    return (  
        <div key={id} className={styles.card}>
            Name : {name}
            birthday : {birthday}
            email : {email}
            education: {education}
            <img className={styles.avatar} src={avatar}></img>
        </div>
    );
}

export default Card;