import { Link } from 'react-router-dom';


const AppNav = (props) => {
    
    const classes =  props.color === "black" ? "menu__list menu__list_b" : "menu__list menu__list_w";
    const logo =  props.color === "black" ? "/img/logo-black.png" : "/img/logo.png";

    return (
        <nav class="menu">
            <ul class={classes}>
                <li><Link to="/" class="menu__link"><img src={logo} alt="logo"/>Coffee house</Link></li>
                <li><Link to="/catalog" class="menu__link">Our coffee</Link></li>
                <li><Link to="/" class="menu__link">For your pleasure</Link></li>
            </ul>
        </nav>
    )
}

export default AppNav;