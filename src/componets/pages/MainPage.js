import { Link } from 'react-router-dom';

import AppNav from '../AppNav';
import Devider from '../Devider';
import Footer from '../Footer';

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
                        <div class="about__devider devider">
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
                                <Link to="/coffee" class="catalog__item">
                                    <div class="catalog__image"><img src='/img/best-1.png'/></div>
                                    <div class="catalog__label">Solimo Coffee Beans 2 kg</div>
                                    <div class="catalog__price">10.73$</div>
                                </Link>
                                <Link to="/coffee" class="catalog__item">
                                    <div class="catalog__image"><img src='/img/best-1.png'/></div>
                                    <div class="catalog__label">Presto Coffee Beans 1 kg</div>
                                    <div class="catalog__price">15.99$</div>
                                </Link>
                                <Link to="/coffee" class="catalog__item">
                                    <div class="catalog__image"><img src='/img/best-1.png'/></div>
                                    <div class="catalog__label">AROMISTICO Coffee 1 kg</div>
                                    <div class="catalog__price">6.99$</div>
                                </Link>
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