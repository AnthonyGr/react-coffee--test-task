import AppNav from './AppNav';
import Devider from './Devider';

const Footer = () => {
    return (
        <div class="footer">
            <div class="container">
                <AppNav color={"black"} />
                <div class="footer__devider">
                    <Devider color={"black"}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;