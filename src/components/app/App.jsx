import './App.scss';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Profile from '../profile/Profile';
import Pls from '../pls/Pls';
import Res from '../res/Res';
import Stat from '../stat/Stat';
import Footer from '../footer/Footer';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Hero/>
            <Profile/>
            <Pls/>
            <Res/>
            <Stat/>
            <Footer/>
        </div>
    )
}

export default App;