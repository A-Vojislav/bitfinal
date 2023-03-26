import img from '../pictures/suchEmpty.jpg';
import classes from './NoData.module.css';

function NoData(){
    return(
        <div className={classes.imgContainer}>
            <img src={img} alt="No data from database" className={classes.img}></img>
        </div>

    )

}

export default NoData;