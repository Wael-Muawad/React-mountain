import classes from './LeftColumn.module.css';

function LeftColumn({ heading, p, ThemeDiv }) {
  return (
    <div className={classes.column1}>
      <div className={classes.heading}>{heading}</div>
      <div className={classes.leftTxt}>{p}</div>
      <div className={classes.socialMedia}>{ThemeDiv}</div>
    </div>
  );
}

export default LeftColumn;
