import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookshelfList from './BookshelfList'
import Search from './Search'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    query: '',
    results: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateQueryResults = (query) => {
    this.setState({ query: query.trim() });
    if (query.length) {
    BooksAPI.search(query).then((results) => {
      if (results && results.length) {
        this.setState({ results: results.filter(book => book.imageLinks) });      
      } 
    });
  } else {
      this.setState({ results: [] })
  }}

    render() {
    const { books } = this.state;
    const { query } = this.state;
    const { results } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookshelfList books={books} />
            </div>
            <div className="open-search">
              <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <Search 
            query={query}
            results={results}
            onUpdateQueryResults={(query) => {
              this.updateQueryResults(query)
            }}
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp
