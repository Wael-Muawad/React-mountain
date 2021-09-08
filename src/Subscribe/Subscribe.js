import SubCard from './SubCard';
import classes from './Subscribe.module.css';
function Subscribe() {
  return (
    <div className={classes.parent}>
      <div className={classes.backgroundParent}>
        <div className={classes.background}></div>

        <div className={classes.subtxtParent}>
          <div className={classes.subtxt}>
            <h1>
              SUBSCRIBE TO OUR <br></br> NEWSLETTER
            </h1>
            <p>
              Get daily updates in your email, keep updated with all the latest
              news from Moundoki
            </p>
          </div>
        </div>
      </div>
      <SubCard />
    </div>
  );
}
export default Subscribe;
