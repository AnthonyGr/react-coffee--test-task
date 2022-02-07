import {Link} from 'react-router-dom';

const GoodsItem = (props) => {
    const {name, thumbnail, country, price} = props;
    return (
        <div className="catalog__column">
            <Link  to="/coffee" class="catalog__item catalog__item_shadow">
                <div class="catalog__image"><img src={thumbnail} alt="product" /></div>
                <div class="catalog__label">{name}</div>
                <div class="catalog__country">{country}</div>
                <div class="catalog__price">{price}</div>
            </Link>
        </div>

    )
}

export default GoodsItem;