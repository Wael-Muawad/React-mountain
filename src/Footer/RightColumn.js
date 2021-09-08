import classes from './RightColumn.module.css';

function RightColumn({ heading, p }) {
  return (
    <div className={classes.leftColumn}>
      <div className={classes.linkHeading}>{heading}</div>
      {p.map((v, i) => (
        <p>{v}</p>
      ))}
    </div>
  );
}

export default RightColumn;
