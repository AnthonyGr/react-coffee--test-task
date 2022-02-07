import { Link } from 'react-router-dom';

import AppNav from '../AppNav';

const MainPage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="mainblock">
                    <div className="mainblock__content">
                        <div className="container">
                            <div className="mainblock__text">
                                <div className="mainblock__title">Everything You Love About Coffee</div>
                                <div className="mainblock__devider devider">
                                    <div className="devider__item"><hr className="devider__hr devider__hr_w"/></div>
                                    <div className="devider__logo"><img src='/img/devider-logo-w.png' alt=""/></div>
                                    <div className="devider__item"><hr className="devider__hr devider__hr_w"/></div>
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
                            <div class="devider__item"><hr class="devider__hr devider__hr_b"/></div>
                            <div class="devider__logo"><img src='/img/devider-logo-b.png' alt=""/></div>
                            <div class="devider__item"><hr class="devider__hr devider__hr_b"/></div>
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
            <div class="footer">
                <div class="container">
                    <nav class="menu">
                        <ul class="menu__list menu__list_b">
                            <li><a href="#" class="menu__link"><img src='/img/devider-logo-b.png' />Coffee house</a></li>
                            <li><a href="/catalog.html" class="menu__link">Our coffee</a></li>
                            <li><a href="#" class="menu__link">For your pleasure</a></li>
                        </ul>
                    </nav>
                    <div class="footer__devider devider">
                        <div class="devider__item"><hr class="devider__hr devider__hr_b"/></div>
                        <div class="devider__logo"><img src='/img/devider-logo-b.png' alt=""/></div>
                        <div class="devider__item"><hr class="devider__hr devider__hr_b"/></div>
                    </div>
                </div>
            </div>
            </div>

    </>
    )
}

export default MainPage;