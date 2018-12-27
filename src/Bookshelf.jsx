import React from 'react'
import Book from './Book'

export default class Bookshelf extends React.Component {
    render() {
        const { title, books } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li>
                                <Book
                                    bookCoverUrl={`url("${book.imageLinks.smallThumbnail}")`}
                                    bookTitle={book.title}
                                    bookAuthors={book.authors.join(', ')} />
                            </li>
                        ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}