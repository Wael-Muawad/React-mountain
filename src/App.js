import GetStarted from './GetStarted/GetStarted';
import Header from './Header/Header';
import MondakiHelp from './Help/MondakiHelp';
import MondakiHelpInfo from './Help/MondakiHelpInfo';
import MondakiHelpPic from './Help/MondakiHelpPic';
import PopularMountain from './PopularMountain/PopularMountain';
import UserReviews from './UserReviews/UserReviews';
import RecentNews from './RecentNews/RecentNews';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

const MondakiHelpData = [
  {
    pic: 'https://img.rasset.ie/0011c1e4-800.jpg',
    picName: 'Hiking Destination',
    help: 'Find Hiking Destination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci totam animi necessitatibus laudantium provident veniam, dolor ad quisquam, asperiores nam quibusdam autem quod accusantium modi.',
  },
  {
    pic: 'https://wildlandtrekking.com/content/uploads/2020/09/10-reasons-to-stwrt-hiking-1200x750.jpg',
    picName: 'Hiking Equipment',
    help: 'Find Hiking Equipment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus consectetur aliquam dignissimos error autem tempore et doloribus necessitatibus, atque aut, voluptatum iure voluptas ipsam!',
  },
];

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <GetStarted />
        <PopularMountain />

        <MondakiHelp
          firstElement={
            <MondakiHelpPic
              pic={MondakiHelpData[0].pic}
              picName={MondakiHelpData[0].picName}
            />
          }
          secondElement={
            <MondakiHelpInfo
              help={MondakiHelpData[0].help}
              description={MondakiHelpData[0].description}
            />
          }
        />

        <MondakiHelp
          firstElement={
            <MondakiHelpInfo
              help={MondakiHelpData[1].help}
              description={MondakiHelpData[1].description}
            />
          }
          secondElement={
            <MondakiHelpPic
              pic={MondakiHelpData[1].pic}
              picName={MondakiHelpData[1].picName}
            />
          }
        />

        <UserReviews />
        <RecentNews />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}

export default App;
