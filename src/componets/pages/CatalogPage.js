import AppNav from "../AppNav";
import FilterableGoodsCatalog from "../FilterableGoodsCatalog";

const CatalogPage = () => {
    return (
        <div class="wrapper">
            <header class="header">
                <div class="container">
                    <div class="header__body">
                        <h1>Our Coffee</h1>
                    </div>
                </div>
            </header>
            <div class="top-menu">
                <div class="container">
                    <AppNav/>
                </div>
            </div>
            <div class="catalog-about">
                <div class="container">
                    <div class="catalog-about__row">
                        <div class="catalog-about__column">
                            <div class="catalog-about__image">
                                <img src="/img/catalog/girl.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="catalog-about__column">
                            <div class="catalog-about__textblock">
                                <div class="catalog-about__title">About our beans</div>
                                <div class="catalog-about__devider devider">
                                    <div class="devider__item"><hr class="devider__hr devider__hr_b"/></div>
                                    <div class="devider__logo"><img src="img/devider-logo-b.png" alt=""/></div>
                                    <div class="devider__item"><hr class="devider__hr devider__hr_b"/></div>
                                </div>
                                <div class="catalog-about__text">
                                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p><br/>
                                    <p>Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                    so questions.</p>
                                    <p>As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="catalog-about__bottom-devider"><hr/></div>
                </div>
            </div>
            <FilterableGoodsCatalog/>
            <div class="footer">
                <div class="container">
                    <AppNav color={"black"} />
                    <div class="footer__devider devider">
                        <div class="devider__item"><hr class="devider__hr devider__hr_b"/></div>
                        <div class="devider__logo"><img src="img/devider-logo-b.png" alt=""/></div>
                        <div class="devider__item"><hr class="devider__hr devider__hr_b"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage;