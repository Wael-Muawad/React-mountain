import classes from './SmallNews.module.css';

function SmallNews({ img, headTxt, txt }) {
  return (
    <div className={classes.smallNews}>
      <img src={img} alt={txt} />
      <div className={classes.info}>
        <p>{headTxt}</p>
        <h2>{txt}</h2>
      </div>
    </div>
  );
}
export default SmallNews;
