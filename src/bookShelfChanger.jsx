import React from 'react'

export default class BookShelfChanger extends React.Component {
    handleChange(event) {
        const { bookId, displayClick } = this.props;
        displayClick({ bookId: bookId, value: event.target.value });
    }

    render() {
        const { currentShelf } = this.props;
        return (
            <div className="book-shelf-changer">
                <select value={currentShelf ? currentShelf : "none"} onChange={event => this.handleChange(event)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}