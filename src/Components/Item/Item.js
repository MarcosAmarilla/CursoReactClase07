import './Item.css'

const Item = ({ product }) => {
    return (
        <div className="CardItem">
        <div className="ContainerItem">
            <h2 className="ItemHeader">
                {product.name}
            </h2>
        </div>
        <img src={product.img} alt={product.name} className="ItemImg"/>
        <p className="Info">
            Precio: {product.price}
        </p>
        </div>
    )
}
export default Item