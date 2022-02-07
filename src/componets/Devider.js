
const Devider = (props) => {
    
    const classes =  props.color === "black" ? "devider__hr devider__hr_b" : "devider__hr devider__hr_w";
    const logo =  props.color === "black" ? '/img/devider-logo-b.png' : '/img/devider-logo-w.png';

    return (
        <div className="devider">
            <div className="devider__item"><hr className={classes}/></div>
            <div className="devider__logo"><img src={logo} alt=""/></div>
            <div className="devider__item"><hr className={classes}/></div>
        </div>
    )
}

export default Devider;