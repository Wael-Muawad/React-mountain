import MountainCard from './MountainCard';
import classes from './PopularMountain.module.css';

function PopularMountain() {
  const PopularMountainData = [
    {
      img: 'https://wallpapercave.com/wp/wp3386769.jpg',
      mountainName: 'Mount Everest',
      mountainDescription:
        "Mount Everest is Earth's highest mountain above sea level",
    },
    {
      img: 'https://wallpapercave.com/wp/wp2578203.jpg',
      mountainName: 'Mount Denali',
      mountainDescription:
        'Denali is the highest mountain peak in north America',
    },
    {
      img: 'https://wallpapercave.com/wp/wp3386780.jpg',
      mountainName: 'Mount Kilimanjaro',
      mountainDescription: 'Mount Kilimanjaro is a dormant volcano in Tanzania',
    },
  ];

  return (
    <div>
      <div className={classes.parent}>
        <h2>Popular Mountain</h2>

        <div className={classes.cardContainer}>
          {PopularMountainData.map((v, i) => (
            <MountainCard
              img={v.img}
              mountainName={v.mountainName}
              mountainDescription={v.mountainDescription}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default PopularMountain;
