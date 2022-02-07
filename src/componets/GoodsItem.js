import {Link} from 'react-router-dom';

const GoodsItem = (props) => {
    const {name, thumbnail, country, price} = props;
    return (
        <div className="catalog__column">
            <Link  to="/coffee" className="catalog__item catalog__item_shadow">
                <div className="catalog__image"><img src={thumbnail} alt="product" /></div>
                <div className="catalog__label">{name}</div>
                <div className="catalog__country">{country}</div>
                <div className="catalog__price">{price}</div>
            </Link>
        </div>

    )
}

export default GoodsItem;