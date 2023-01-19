import { useReducer, createContext } from "react"
import { shopProducts } from "../components/products"

const initialState = {
    products: shopProducts,
    cart: [],
    amount: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            let eachCart;
            eachCart = state.products.map((product) => {
                if (product.id === action.payload) {
                    return {...product, amount: product.amount + 1}

                }
                return product

                
            })

            return { ...state, products: eachCart, amount: state.amount + 1}

            
        default:
            return state
    }
}

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addOne = (id) => {
        dispatch({
            type: "INCREMENT",
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            products: state.products,
            amount: state.amount,
            addOne
        }}>

            {children}

        </GlobalContext.Provider>
    )
}

export default GlobalContext;