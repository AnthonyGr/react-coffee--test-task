import AppNav from "../AppNav";
import Devider from "../Devider";
import Footer from "../Footer";

const CoffeePage = () => {
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
            <div className="goods-about">
                <div className="container">
                    <div className="goods-about__row">
                        <div className="goods-about__column">
                            <div className="goods-about__image">
                                <img src="/img/goods/good-image.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="goods-about__column">
                            <div className="goods-about__textblock">
                                <div className="goods-about__title">About it</div>
                                <Devider color={"black"}/>
                                <div className="goods-about__text">
                                    <p><strong>Country:</strong> Brazil</p><br/>
                                    <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
                                    <p><strong>Price: </strong><span className="goods-about__price">16.99$</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CoffeePage;