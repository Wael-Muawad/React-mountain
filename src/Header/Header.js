import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.parent}>
        <div className={classes.textHeader}>
          <h1>
            FOUND AMAZING <br></br> MOUNTAIN TO EXPLORE
          </h1>
          <p>
            Start to getting bored with your activities? it's time to start your
            adventures
          </p>
        </div>
      </div>
    </header>
  );
}
export default Header;
