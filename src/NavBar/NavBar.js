import classes from './NavBar.module.css';

function NavBar() {
  return (
    <nav>
      <div className={classes.logo}>
        <h3>MOUNDAKI</h3>
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>BLOG</li>
        <li>MARKETPLACE</li>
        <li>LOGIN</li>
      </ul>
    </nav>
  );
}

export default NavBar;
