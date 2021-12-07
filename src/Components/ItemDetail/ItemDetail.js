import './ItemDetail.css'

const ItemDetail = ({product}) => {
    let [...item] = [product]
    return (
        <div className="CardItem">
        <div className="ContainerItem">
            <h2 className="ItemHeader">
                {item.name}
            </h2>
        </div>
        <img src={item.img} alt={item.name} className="ItemImg"/>
        <p className="Info">
            Precio: {item.price}
        </p>
        <p className="Info">
            Detalle: {item.detalle}
        </p>
        </div>
    )
}
export default ItemDetail