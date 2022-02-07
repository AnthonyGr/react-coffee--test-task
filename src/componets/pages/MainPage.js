import { Link } from 'react-router-dom';

import AppNav from '../AppNav';
import Devider from '../Devider';
import GoodsList from '../GoodsList';
import Footer from '../Footer';

const BEST = [
    {id: 7, name: 'Solimo Coffee Beans 2 kg', thumbnail: '/img/best-1.png', price: '10.73$'},
    {id: 8, name: 'Presto Coffee Beans 1 kg', thumbnail: '/img/best-2.png', price: '15.99$'},
    {id: 9, name: 'AROMISTICO Coffee 1 kg', thumbnail: '/img/best-3.png', price: '6.99$'},
  ];

const MainPage = () => {

    return (
        <>
            <div className="wrapper">
                <div className="mainblock">
                    <div className="mainblock__content">
                        <div className="container">
                            <div className="mainblock__text">
                                <div className="mainblock__title">Everything You Love About Coffee</div>
                                <div className="mainblock__devider">
                                    <Devider/>
                                </div>
                                <div className="mainblock__subtitle">We makes every day full of energy and taste<br/>
                                Want to try our beans?</div>
                                <a href="#about" className="mainblock__btn btn btn_w">More</a>
                            </div>
                    </div>
                </div>
                </div>
                <div className="top-menu">
                    <div className="container">
                        <AppNav/>
                    </div>
                </div>
                <div class="about" id="about">
                <div class="container">
                    <div class="about__body">
                        <div class="about__title">About Us</div>
                        <div class="about__devider">
                            <Devider color={"black"}/>
                        </div>
                        <div class="about__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br/><br/>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
            <div class="best">
                <div class="container">
                    <div class="best__body">
                        <div class="best__title">Our best</div>
                        <div class="best__catalog catalog">
                            <div class="catalog__row">
                                <GoodsList goods={BEST}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
    </>
    )
}

export default MainPage;