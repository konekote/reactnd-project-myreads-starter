import React from 'react'
import Bookshelf from './Bookshelf'

export default class BookshelfList extends React.Component {
  render() {
    const {books} = this.props;
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");
    return (
      <div>
        <Bookshelf books={currentlyReading} title="Currently Reading"/>
        <Bookshelf books={wantToRead} title="Want to Read"/>
        <Bookshelf books={read} title="Read"/>
      </div>
    )
  }
}