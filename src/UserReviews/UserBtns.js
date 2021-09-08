import classes from './UserBtns.module.css';
function UserBtns({ nextHandler, prevHandler }) {
  return (
    <div className={classes.userBtn}>
      <h2>User Reviews</h2>
      <div className={classes.btns}>
        <button onClick={prevHandler}>
          <span>&#8592;</span>
        </button>
        <button onClick={nextHandler}>
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
}
export default UserBtns;
