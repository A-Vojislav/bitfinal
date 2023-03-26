import classes from './Loading.module.css';

function Loading (){
    return (
        <div className={classes.spinnerContainer}>
          <div className={classes.loadingSpinner}>
          </div>
        </div>
    )
}

export default Loading;