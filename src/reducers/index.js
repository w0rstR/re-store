import updateBookList from "./updateBookList"
import updateShoppingCart from "./updateShoppingCart"
// const initialState={
//     bookList:{
//         books:[],
//         loading:true,
//         error:null
//     },
//     shoppingCart:{
//         cartItems:[],
//         orderTotal: 0
//     }
// }

// const updateCartItems=(cartItems,item,index)=>{
//     if(item.count === 0){
//         return[
//             ...cartItems.slice(0,index),
//             ...cartItems.slice(index+1)
//         ]
//     }

//     if(index === -1){
//         return[
//             ...cartItems,
//             item
//         ]
//     }

//     return[
//         ...cartItems.slice(0,index),
//         item,
//         ...cartItems.slice(index+1)
//     ]
// }

// const updateCartItem=(book,item={},quanity)=>{

    

//     const {
//         id=book.id,
//         count=0,
//         title=book.title,
//         total=0
//     }=item;

//     return{
//         id,
//         title,
//         count: count+quanity,
//         total: total+quanity*book.price
//     }
// }

// const updateOrder=(state,bookId,quanity)=>{
//     const {bookList:{books},shoppingCart:{cartItems}} = state
//     // const bookId=action.payload
//     const book = books.find((book)=>book.id=== bookId)
//     const itemIndex =cartItems.findIndex(({id}) => id === bookId)
//     const item = cartItems[itemIndex]

//     const newItem = updateCartItem(book,item,quanity)
//     return{
//         orderTotal:0,
//         cartItems:updateCartItems(state.shoppingCart.cartItems,newItem,itemIndex)
//     }
// }

// const updateBookList = (state,action)=>{
//     if(state ===undefined){
//         return{
//             books:[],
//             loading:true,
//             error:null
//         }
//     }
//     switch(action.type){
//         case 'FETCH_BOOKS_REQUESTED':
//             return{
//                 books:[],
//                 loading:true,
//                 error:null
//             }
//         case 'FETCH_BOOKS_SUCCESS':
//             return {
//                 books:action.payload,
//                 loading:false,
//                 error:null
//             }
//         case 'FETCH_BOOKS_FAILURE':
//             return{ 
//                 books:[],
//                 loading:false,
//                 error:action.payload
//             }
//         default:
//             return state.bookList
//     }
// }
// const updateShoppingCart = (state,action)=>{
//     if(state===undefined){
//         return{
//             cartItems:[],
//             orderTotal:0
//         }
//     }
//     switch(action.type){
//         case 'BOOK_ADDED_TO_CART':
//             return updateOrder(state,action.payload,1)
            
//         case 'BOOK_REMOVED_FROM_CART':
//             return updateOrder(state,action.payload,-1)


//         case 'ALL_BOOKS_REMOVED_FROM_CART':
//             const item = state.shoppingCart.cartItems.find(({id})=>id===action.payload)

//             return updateOrder(state,action.payload,-item.count)

//         default:
//             return state.shoppingCart

//     }
// }

const reducer = (state,action)=>{
    console.log(action.type)
    return{
        bookList:updateBookList(state,action),
        shoppingCart:updateShoppingCart(state,action)
    }
}















// const reducer = (state = initialState,action)=>{
//     console.log(action.type)
//     switch (action.type) {
//         case 'FETCH_BOOKS_REQUESTED':
//         case 'FETCH_BOOKS_SUCCESS':
//         case 'FETCH_BOOKS_FAILURE':
//             return{
//                 ...state,
//                 bookList:updateBookList(state,action)
//             }
//         case 'BOOK_ADDED_TO_CART':     
//         case 'BOOK_REMOVED_FROM_CART':
//         case 'ALL_BOOKS_REMOVED_FROM_CART':
//             return{
//                 ...state,
//                 shoppingCart:updateShoppingCart(state,action)
//             }
//         default:
//             return state
            
    
//     }
// }































// const reducer = (state = initialState,action)=>{
//     console.log(action.type)
//     switch (action.type) {
//         case 'FETCH_BOOKS_REQUESTED':
//             return{
//                 ...state,
//                 books:[],
//                 loading:true,
//                 error:null
//             }
//         case 'FETCH_BOOKS_SUCCESS':
//             return {
//                 ...state,
//                 books:action.payload,
//                 loading:false,
//                 error:null
//             }
//         case 'FETCH_BOOKS_FAILURE':
//             return{
//                 ...state,
//                 books:[],
//                 loading:false,
//                 error:action.payload
//             }

//         case 'BOOK_ADDED_TO_CART':

//             return updateOrder(state,action.payload,1)
//             // const bookId=action.payload
//             // const book = state.books.find((book)=>book.id=== bookId)
//             // const itemIndex = state.cartItems.findIndex(({id}) => id === bookId)
//             // const item = state.cartItems[itemIndex]



//             // Перенесли в updateCartItem
//             // let newItem
//             // if(item){
//             //     newItem={
//             //         ...item,
//             //         count:item.count +1,
//             //         total:item.total + book.price
//             //     }
//             // }else{
//             //     newItem={
//             //         id:book.id,
//             //         title:book.title,
//             //         count:1,
//             //         total:book.price
//             //     }
//             // }

//             //
//             // const newItem = updateCartItem(book,item)
//             // return{
//             //     ...state,
//             //     cartItems:updateCartItems(state.cartItems,newItem,itemIndex)
//             // }
//             ///////

//             // ПЕРЕНЕСЛИ В UPDATEITEMS
//             // if(itemIndex<0){
//             //     return{
//             //         ...state,
//             //         cartItems:[
//             //             ...state.cartItems,
//             //             newItem
//             //         ]
//             //     }
//             // }else{
//             //     return{
//             //         ...state,
//             //         cartItems:[
//             //             ...state.cartItems.slice(0,itemIndex),
//             //             newItem,
//             //             ...state.cartItems.slice(itemIndex+1)
//             //         ]
//             //     }
//             // }

//             // const newItem={
//             //     id:book.id,
//             //     title:book.title,
//             //     count:1,
//             //     total:book.price
//             // }

//             // return{
//             //     ...state,
//             //     cartItems:[
//             //         ...state.cartItems,
//             //         newItem
//             //     ]
//             // }
        
//             case 'BOOK_REMOVED_FROM_CART':
//                 return updateOrder(state,action.payload,-1)


//             case 'ALL_BOOKS_REMOVED_FROM_CART':
//                 const item = state.cartItems.find(({id})=>id===action.payload)

//                 return updateOrder(state,action.payload,-item.count)


//             default:
//             return state
//     }
// }

export default reducer