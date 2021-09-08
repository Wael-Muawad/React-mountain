import classes from './MondakiHelp.module.css';

function MondakiHelp({ firstElement, secondElement }) {
  return (
    <div className={classes.parent}>
      <div className={classes.rectangle}>
        {firstElement}
        {secondElement}
      </div>
    </div>
  );
}
export default MondakiHelp;
