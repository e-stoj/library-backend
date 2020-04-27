import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

class Book extends Component {
  render() {
    const { book, deleteBook, user, onOrderBook } = this.props;
    return (
      <div className='books-table-row'>
        <div className='books-table-column'>{ book.title }</div>
        <div className='books-table-column'>{ book.publishingHouse }</div>
        <div className='books-table-column'>{ book.available ? 'dostępna' : 'niedostępna'}</div>
        <div className='books-table-column'>{ book.yearOfPublish }</div>
        <div className='books-table-column'>{ book.type }</div>
        <div className='books-table-column'>
          {user === 'ADMIN'&& book.available && 
          <FontAwesomeIcon 
            className='close-icon' 
            icon={faTrash}
            onClick={deleteBook} />}
          {user === 'READER' && book.available &&
          <DefaultButton text='Wypożycz książkę' onClick={onOrderBook} />}
        </div>
      </div>
    )
  }
}

export default Book;