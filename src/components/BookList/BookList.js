import React,{Component} from 'react'
import BookListItem from '../BookListItem'
import {connect} from 'react-redux'
import { WithBookstoreService } from '../Hoc'
import {booksLoaded,booksRequested,booksError,fetchBooks,bookAddedToCart} from '../../actions'
import { bindActionCreators } from 'redux'
import Compose from '../../utils'
import Spinner from '../Spinner'
import './BooksList.css'
import ErrorIndicator from '../ErrorIndicator'

const BookList=({books,onAddedToCart})=>{
    return(
        <ul className="book-list">
            {
                books.map((book)=>{
                    return(
                        <li key={book.id}>
                            <BookListItem
                                onAddedToCart={()=>onAddedToCart(book.id)} 
                                book={book}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}


class BookListContainer extends Component{
    

    componentDidMount(){
        // отримати дані
        // const { 
        //     bookstoreService,
        //     booksLoaded,
        //     booksRequested,
        //     booksError  } = this.props
        // booksRequested();
        // // const data = bookstoreService.getBooks()
        // // console.log(data)

        // bookstoreService.getBooks()
        //     .then((data)=>{
        //         booksLoaded(data)
        //     })
        //     .catch((err)=>booksError(err))

        // передати действие в store
        //this.props.booksLoaded(data)

        // ref
        this.props.fetchBooks();
    }
    
    
    render(){
        const { books,loading,error,onAddedToCart } = this.props
        if(loading){
            return(
                <Spinner/>
            )
        }

        if(error){
            return <ErrorIndicator/>
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>

    }

    
}

const mapStateToProps=({bookList:{books,loading,error}})=>{
    return{
        books:books,
        loading:loading,
        error:error
    }
}

const mapDispatchToProps = (dispatch,{bookstoreService})=>{
    return{
        fetchBooks:fetchBooks(bookstoreService,dispatch),
        onAddedToCart: (id)=> dispatch(bookAddedToCart(id))
    }
}


// const mapDispatchToProps = (dispatch,ownProps)=>{
//     const {bookstoreService} = ownProps
//     return{
//         fetchBooks: ()=>{
//             dispatch(booksRequested())
//             bookstoreService.getBooks()
//                 .then((data)=>dispatch(booksLoaded(data)))
//                 .catch((err)=>dispatch(booksError(err)))
//         }
//     }
// }
// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// }
// const mapDispatchToProps = (dispatch)=>{
//     return bindActionCreators({
//         booksLoaded
//     },dispatch)
// }

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         booksLoaded:(newBooks)=>{
//             dispatch(booksLoaded(newBooks))
//         }
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         booksLoaded:(newBooks)=>{
//             dispatch(
//                 {
//                     type:'BOOKS_LOADED',
//                     payload:newBooks
//                 }
//             )
//         }
//     }
// }

export default Compose(
    WithBookstoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(BookListContainer)


//export default WithBookstoreService()(connect(mapStateToProps,mapDispatchToProps)(BookList))