import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'


const Shop = () => {
    const {products, amount, addOne} = useContext(GlobalContext)
    
    const navigate = useNavigate()

    const goToCart = () => {
        navigate("/cart")
    }


    return (
        <div>
            <div className='navbar'>
                <button onClick={goToCart}>() cart items</button>
            </div>
            <div className='shop'>
                {products.map(product => (
                    <div key={product.id} className='product-card'>
                        <div className='image-card'>
                            <img src={product.productImage} />
                        </div>
                        <h4>{product.productName}</h4>
                        <h4>{product.price}</h4>
                        <button onClick={() => addOne(product.id)}>Add to cart ({amount})</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop