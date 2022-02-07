import GoodsItem from "./GoodsItem";

const GoodsList = ({goods, filterText, filterCountry}) => {

    

    const elements = goods.map(item => {
        const {id, ...itemProps} = item;
        if (item.name.indexOf(filterText) === -1) {
            return null;
        }
        if (item.country === filterCountry || filterCountry === "") {
            return (
                <GoodsItem key={id} {...itemProps}/>
            )
        }

    });

    return (
        <div class="goods">
            <div class="container">
                <div class="goods__catalog catalog">
                    <div className="catalog__row">
                        {elements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoodsList;