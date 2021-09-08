import classes from './MondakiHelpInfo.module.css';

function MondakiHelpInfo({ help, description }) {
  return (
    <div className={classes.infoCard}>
      <h2>
        Moundaki Help You <br /> {help}
      </h2>
      <p>{description}</p>

      <div className={classes.btnContainer}>
        <h3 className={classes.btn}>Read More</h3>
      </div>
    </div>
  );
}
export default MondakiHelpInfo;
