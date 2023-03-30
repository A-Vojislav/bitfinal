
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from './StartWizard.module.css';

function StartWizard () {

    return (
        <div className={styles.plusContainer}>
            <FontAwesomeIcon 
            className={styles.plusSign}
             icon={faPlus}
              role='button'
            onClick={''}   />
        </div>
    );
}

export default StartWizard;