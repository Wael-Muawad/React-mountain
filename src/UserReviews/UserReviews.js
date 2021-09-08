import classes from './UserReviews.module.css';
import { useState } from 'react';
import UserBtns from './UserBtns';
import UserCard from './UserCard';

function UserReviews() {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(1);

  const UserReviewsData = [
    {
      name: 'Cathryn Stearn',
      job: 'Quality Control Specialist',
      quotes:
        'There is absolutely no greater high than challenging the power structure as a nobody, giving it your all, and winning!',
      pic: 'https://img2.pngio.com/download-climber-png-rock-climbing-png-image-with-no-background-climber-png-530_582.png',
    },
    {
      name: 'Wilfred Buff',
      job: 'Environmental Tech',
      quotes:
        'Success is not only a goal. It is a journey. When you commit yourself to the journey, the goal is surely there to be attained.',
      pic: 'https://pngimage.net/wp-content/uploads/2018/06/turistas-png-1.png',
    },
    {
      name: 'Marcelo Saipy',
      job: 'Computer Systems Analyst I',
      quotes:
        "don't read the success storiesyou will get messagebut read the failure storiesyou will get the ideas become successful",
      pic: 'https://www.pngkit.com/png/detail/126-1263633_a-couple-tourist-tourist-png.png',
    },
    {
      name: 'Frankie Cresser',
      job: 'Marketing Manager',
      quotes:
        'Those runners who hit their second wind know find something most of the world never discovers.',
      pic: 'https://www.seekpng.com/png/full/126-1263921_traveller-safari-person-png.png',
    },
    {
      name: 'Fulvia Wurz',
      job: 'Research Nurse',
      quotes:
        'Regret is one the scariest words in any language and success is one of the most beautiful ones. What are you waiting for?',
      pic: 'https://www.pngix.com/pngfile/big/479-4793689_traveler-png-traveller-people-png-transparent-png.png',
    },
    {
      name: 'Jolee Bramah',
      job: 'Editor',
      quotes:
        "If you cannot tie your marketing efforts to actual dollars that the electric company will accept, it'Â€Â™s time to adjust your plan.",
      pic: 'https://www.seekpng.com/png/full/362-3629900_travelling-people-png.png',
    },
    {
      name: 'Gusella Casazza',
      job: 'Statistician IV',
      quotes:
        "Often times success doesn't come from strength, but from flexibility and adaptability",
      pic: 'https://www.pngall.com/wp-content/uploads/8/Tourist-People-PNG-Free-Image.png',
    },
    {
      name: 'Murdoch Danielot',
      job: 'VP Marketing',
      quotes:
        'Words are directed to your personalities namely; - God, your hearers, devil and yourself.',
      pic: 'https://i.dlpng.com/static/png/789275_preview_preview.png',
    },
    {
      name: 'Isis Raine',
      job: 'Assistant Professor',
      quotes:
        'To challenge yourself takes courage, not for the strength it takes to accomplish your goals but for the commitment to stay true to your dreams.',
      pic: 'https://wholidays.co/wp-content/uploads/2020/10/welcome-pic.png',
    },
    {
      name: 'Court Ragsdale',
      job: 'Account Coordinator',
      quotes:
        'Stop drowning your dreams by jumping into waters that you are unable to swim in.',
      pic: 'https://www.pngall.com/wp-content/uploads/2018/05/Hiking-Download-PNG.png',
    },
    {
      name: 'Kerwin Matthieson',
      job: 'Data Coordiator',
      quotes:
        "Don't waste your time hating a failure. Failure is a greater teacher than success. Listen, learn, go on.",
      pic: 'https://nuratravel.com/wp-content/uploads/2017/11/walking-group_trans.png',
    },
    {
      name: 'Stillman Du Pre',
      job: 'VP Accounting',
      quotes:
        'Dear HealerI do not want to hear "beautiful stories"about "wonderful" energies.I want to see the resultSlobodan Boban Manic',
      pic: 'https://www.pinclipart.com/picdir/big/293-2931822_hiking-png-hd-clipart.png',
    },
    {
      name: 'Danette Diver',
      job: 'Analog Circuit Design manager',
      quotes:
        "If you're going to be fighting anyway, why not fight to win and not just to survive.",
      pic: 'https://www.pngall.com/wp-content/uploads/1/Trekking-PNG-Photo.png',
    },
  ];

  const nextHandler = () => {
    if (startValue === UserReviewsData.length - 1) {
      setStartValue(0);
      setEndValue(endValue + 1);
      return;
    }
    if (endValue === UserReviewsData.length - 1) {
      setEndValue(0);
      setStartValue(startValue + 1);
      return;
    }
    setStartValue(startValue + 1);
    setEndValue(endValue + 1);
  };

  const prevHandler = () => {
    if (startValue === 0) {
      setStartValue(UserReviewsData.length - 1);
      setEndValue(endValue - 1);
      return;
    }
    if (endValue === 0) {
      setEndValue(UserReviewsData.length - 1);
      setStartValue(startValue - 1);
      return;
    }
    setStartValue(startValue - 1);
    setEndValue(endValue - 1);
  };

  return (
    <div className={classes.parent}>
      <UserBtns nextHandler={nextHandler} prevHandler={prevHandler} />
      <div className={classes.cardParent}>
        <div className={classes.cardHide}>
          <UserCard UserReviewsData={UserReviewsData} Value={startValue} />
        </div>
        <UserCard UserReviewsData={UserReviewsData} Value={endValue} />
      </div>
    </div>
  );
}
export default UserReviews;
