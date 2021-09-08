import classes from './UserCard.module.css';
function UserCard({ UserReviewsData, Value }) {
  return (
    <div className={classes.cardParent}>
      <div className={classes.userCard}>
        <div className={classes.userImg}>
          <img
            src={UserReviewsData[Value].pic}
            alt={UserReviewsData[Value].name}
          />
        </div>
        <div className={classes.userInfo}>
          <h2>{UserReviewsData[Value].name}</h2>
          <h4>{UserReviewsData[Value].job}</h4>
          <p>{UserReviewsData[Value].quotes}</p>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
