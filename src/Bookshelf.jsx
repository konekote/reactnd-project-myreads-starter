import React from 'react'
import Book from './Book'

export default class Bookshelf extends React.Component {
    render() {
        const { title, books, displayClick } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.title}>
                                <Book
                                    bookCoverUrl={`url("${book.imageLinks.smallThumbnail}")`}
                                    bookTitle={book.title}
                                    bookAuthors={book.authors ? book.authors.join(', ') : ''}
                                    bookId={book.id}
                                    displayClick={displayClick}
                                    currentShelf={book.shelf} />
                            </li>
                        ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}