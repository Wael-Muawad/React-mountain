import classes from './SubCard.module.css';
function SubCard() {
  return (
    <div className={classes.subCard}>
      <input type="text" id="name" placeholder="Enter Your Name" />
      <input type="email" id="email" placeholder="Enter Your Email" />
      <h3 className={classes.btn}>Subscribe</h3>
    </div>
  );
}
export default SubCard;
