import React from 'react'
import BookShelfChanger from './bookShelfChanger'

export default class Book extends React.Component {
    render() {

        const { bookCoverUrl, bookTitle, bookAuthors } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={ {width: 128, height: 193, backgroundImage: bookCoverUrl} }></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthors}</div>
            </div>
        )
    }
}