import classes from './MondakiHelpPic.module.css';

function MondakiHelpPic({ pic, picName }) {
  return (
    <div className={classes.picCard}>
      <img src={pic} alt={picName} />
    </div>
  );
}
export default MondakiHelpPic;
