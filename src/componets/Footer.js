import AppNav from './AppNav';
import Devider from './Devider';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <AppNav color={"black"} />
                <div className="footer__devider">
                    <Devider color={"black"}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;