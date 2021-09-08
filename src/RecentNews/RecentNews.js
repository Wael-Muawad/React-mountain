import BigNews from './BigNews';
import classes from './RecentNews.module.css';
import SmallNews from './SmallNews';

const RecentNewsData = [
  {
    img: 'https://i2.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2015/04/ThinkstockPhotos-472502990.jpg?resize=696%2C463&ssl=1',
    headTxt: 'INFORMATION',
    txt: 'Hiking information during Covid - 19',
  },
  {
    img: 'https://avienaturals.com/wp-content/uploads/2015/04/avie-nutraceuiticals-curcumin-woman-hiker-on-a-top-of-a-mountain.jpg',
    headTxt: 'TIPS & TRICK',
    txt: 'How to manage hiking equipments',
  },
  {
    img: 'https://yourwritetolive.files.wordpress.com/2014/07/hiking-hiker-standing-mountain-top-1024x682.jpg?w=366&h=243',
    headTxt: 'TIPS & TRICK',
    txt: '5 mountains that were opened during the pan...',
  },
];

function RecentNews() {
  return (
    <div className={classes.parent}>
      <div className={classes.RecentNewsCard}>
        <h2>Recent News</h2>
        <h3 className={classes.btn}>Read More</h3>
      </div>
      <div className={classes.news}>
        <div className={classes.bigNewHide}>
          <BigNews
            img={RecentNewsData[0].img}
            headTxt={RecentNewsData[0].headTxt}
            txt={RecentNewsData[0].txt}
          />
        </div>
        <div className={classes.smallNewsContainer}>
          <div className={classes.smallNewHide}>
            <SmallNews
              img={RecentNewsData[0].img}
              headTxt={RecentNewsData[0].headTxt}
              txt={RecentNewsData[0].txt}
            />
          </div>
          <SmallNews
            img={RecentNewsData[1].img}
            headTxt={RecentNewsData[1].headTxt}
            txt={RecentNewsData[1].txt}
          />
          <SmallNews
            img={RecentNewsData[2].img}
            headTxt={RecentNewsData[2].headTxt}
            txt={RecentNewsData[2].txt}
          />
        </div>
      </div>
    </div>
  );
}
export default RecentNews;
