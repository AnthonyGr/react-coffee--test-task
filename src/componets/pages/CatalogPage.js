import AppNav from "../AppNav";
import FilterableGoodsCatalog from "../FilterableGoodsCatalog";
import Devider from "../Devider";
import Footer from '../Footer';

const CatalogPage = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <h1>Our Coffee</h1>
                    </div>
                </div>
            </header>
            <div className="top-menu">
                <div className="container">
                    <AppNav/>
                </div>
            </div>
            <div className="catalog-about">
                <div className="container">
                    <div className="catalog-about__row">
                        <div className="catalog-about__column">
                            <div className="catalog-about__image">
                                <img src="/img/catalog/girl.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="catalog-about__column">
                            <div className="catalog-about__textblock">
                                <div className="catalog-about__title">About our beans</div>
                                <div className="catalog-about__devider">
                                    <Devider color={"black"}/>
                                </div>
                                <div className="catalog-about__text">
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
                    <div className="catalog-about__bottom-devider"><hr/></div>
                </div>
            </div>
            <FilterableGoodsCatalog/>
            <Footer/>
        </div>
    )
}

export default CatalogPage;