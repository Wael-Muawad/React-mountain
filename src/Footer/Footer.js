import classes from './Footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { indigo, pink, blue } from '@material-ui/core/colors';
import InstagramIcon from '@material-ui/icons/Instagram';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[600],
    },
    secondary: {
      main: blue[300],
    },
    error: {
      main: pink[400],
    },
  },
});

const LeftColumnData = [
  {
    heading: 'Moundaka',
    p: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse illo eveniet ab id quam quis deserunt impedit.',
    ],
  },
];

const RightColumnData = [
  {
    heading: 'Popular Mountain',
    p: ['Mount Everest', 'Mount Denali', 'Mount Kilimanjaro', 'Mount Fuji'],
  },
  {
    heading: 'Navigation',
    p: ['Home', 'About', 'Blog', 'Marketplace'],
  },
  {
    heading: 'Contact',
    p: ['(0921) 24121244', 'Small Heath,', 'Birmingham', ''],
  },
];

function Footer() {
  return (
    <div className={classes.parent}>
      <div className={classes.footerMainContent}>
        <LeftColumn
          heading={LeftColumnData[0].heading}
          p={LeftColumnData[0].p}
          ThemeDiv={
            <ThemeProvider theme={theme}>
              <FacebookIcon color="primary" fontSize="large" />
              <TwitterIcon color="secondary" fontSize="large" />
              <InstagramIcon color="error" fontSize="large" />
            </ThemeProvider>
          }
        />

        {RightColumnData.map((v, i) => (
          <div className={classes.rightColumn}>
            <RightColumn heading={v.heading} p={v.p} />
            {i !== 2 ? <hr className={classes.hr}></hr> : null}
          </div>
        ))}
      </div>
      <hr />
      <footer className={classes.footerLowerContent}>
        © 2021 Copyright 2021 Moundaki.
      </footer>
    </div>
  );
}
export default Footer;
