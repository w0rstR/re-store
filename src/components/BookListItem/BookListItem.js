import React from 'react'
import './BookListItem.css'
const BookListItem =({book, onAddedToCart})=>{
    const {title,author,price,coverImage} = book
    return(
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt='cover'/>
            </div>
            <div className="book-details">
                <span  className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <div className="book-author">{author}</div>
                <button
                 onClick={onAddedToCart}
                 className="btn btn-info add-to-cart">Add to Cart</button>
            </div>  
        </div>
    )
}

export default BookListItem