const updateCartItems=(cartItems,item,index)=>{
    if(item.count === 0){
        return[
            ...cartItems.slice(0,index),
            ...cartItems.slice(index+1)
        ]
    }

    if(index === -1){
        return[
            ...cartItems,
            item
        ]
    }

    return[
        ...cartItems.slice(0,index),
        item,
        ...cartItems.slice(index+1)
    ]
}

const updateCartItem=(book,item={},quanity)=>{

    

    const {
        id=book.id,
        count=0,
        title=book.title,
        total=0
    }=item;

    return{
        id,
        title,
        count: count+quanity,
        total: total+quanity*book.price
    }
}

const updateOrder=(state,bookId,quanity)=>{
    const {bookList:{books},shoppingCart:{cartItems}} = state
    // const bookId=action.payload
    const book = books.find((book)=>book.id=== bookId)
    const itemIndex =cartItems.findIndex(({id}) => id === bookId)
    const item = cartItems[itemIndex]

    const newItem = updateCartItem(book,item,quanity)
    return{
        orderTotal:0,
        cartItems:updateCartItems(state.shoppingCart.cartItems,newItem,itemIndex)
    }
}
const updateShoppingCart = (state,action)=>{
    if(state===undefined){
        return{
            cartItems:[],
            orderTotal:0
        }
    }
    switch(action.type){
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state,action.payload,1)
            
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state,action.payload,-1)


        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id})=>id===action.payload)

            return updateOrder(state,action.payload,-item.count)

        default:
            return state.shoppingCart

    }
}

export default updateShoppingCart