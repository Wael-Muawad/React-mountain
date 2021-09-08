import classes from './BigNews.module.css';

function BigNews({ img, headTxt, txt }) {
  return (
    <div className={classes.bigNews}>
      <div className={classes.bigNewsInfo}>
        <div className={classes.info}>
          <p>{headTxt}</p>
          <h2>{txt}</h2>
        </div>
      </div>
      <img src={img} alt={headTxt} />
    </div>
  );
}
export default BigNews;
