
const initial_data = {
    cart_items: []
}

export const cartReducer = ( state=initial_data, action)=>{
   switch(action.type){
    case "ADD_TO_CART":
        return {
            cart_items: [...state.cart_items,action.payload]
        }
        case "REMOVE_FROM_CART":
            return {
                cart_items : state.cart_items.filter(item=>item.cart_id !== action.payload)
            }
            case "EMPTY_CART":
                return{
                    cart_items:[]
            }
       default: return state
   }
}