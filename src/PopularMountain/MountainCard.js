import classes from './MountainCard.module.css';

function MountainCard({ img, mountainName, mountainDescription }) {
  return (
    <div className={classes.parent}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={img} alt={mountainName} />
        </div>
        <div className={classes.cardContent}>
          <h3>{mountainName}</h3>
          <p>{mountainDescription}</p>
        </div>
      </div>
    </div>
  );
}
export default MountainCard;
