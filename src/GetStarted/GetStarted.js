import classes from './GetStarted.module.css';

const Country = [
  {
    Country: 'Japan',
  },
  {
    Country: 'Czech Republic',
  },
  {
    Country: 'France',
  },
  {
    Country: 'Guinea',
  },
  {
    Country: 'Ukraine',
  },
  {
    Country: 'Finland',
  },
  {
    Country: 'Colombia',
  },
  {
    Country: 'China',
  },
  {
    Country: 'Malaysia',
  },
  {
    Country: 'China',
  },
  {
    Country: 'Indonesia',
  },
  {
    Country: 'China',
  },
  {
    Country: 'Argentina',
  },
  {
    Country: 'Russia',
  },
  {
    Country: 'Tunisia',
  },
  {
    Country: 'Peru',
  },
  {
    Country: 'Russia',
  },
  {
    Country: 'China',
  },
  {
    Country: 'France',
  },
  {
    Country: 'Pakistan',
  },
  {
    Country: 'Indonesia',
  },
  {
    Country: 'Argentina',
  },
  {
    Country: 'Philippines',
  },
  {
    Country: 'France',
  },
  {
    Country: 'China',
  },
  {
    Country: 'Micronesia',
  },
  {
    Country: 'China',
  },
  {
    Country: 'China',
  },
  {
    Country: 'New Zealand',
  },
  {
    Country: 'Indonesia',
  },
];

const continents = [
  'Asia',
  'North America',
  'South America',
  'Africa',
  'Australia/Oceania',
  'Europe',
  'Antarctica',
];

function GetStarted() {
  return (
    <div className={classes.parent}>
      <div className={classes.box}>
        <select name="continents" id="continents">
          {continents.map((v, i) => (
            <option value={v} key={i}>
              {v}
            </option>
          ))}
        </select>
        <select name="Country" id="Country">
          {Country.map((v, i) => (
            <option value={v.Country} key={i}>
              {v.Country}
            </option>
          ))}
        </select>
        <div className={classes.started}>Get Started</div>
      </div>
    </div>
  );
}

export default GetStarted;
