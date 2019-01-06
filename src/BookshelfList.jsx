import React from 'react'
import Bookshelf from './Bookshelf'

export default class BookshelfList extends React.Component {
  render() {
    const { books, displayClick } = this.props;
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");
    return (
      <div>
        <Bookshelf displayClick={displayClick} books={currentlyReading} title="Currently Reading"/>
        <Bookshelf displayClick={displayClick} books={wantToRead} title="Want to Read"/>
        <Bookshelf displayClick={displayClick} books={read} title="Read"/>
      </div>
    )
  }
}