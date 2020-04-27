import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toNumber, split, max, isEmpty } from 'lodash';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import Book from '../../pages/books/book';
import AddBook from '../add-book';
import MenuAdmin from '../menu-admin';
import { addNewBook, getAllBooks, handleAddBookWindow, deleteBook } from '../../state/books';
import { getFreeBooksLocations, addNewBookLocation, getAllBooksLocations } from '../../state/books-locations';

class BooksAdmin extends Component {

  componentDidMount() {
    this.props.getAllBooks();
    this.props.getAllBooksLocations();
  }

  onAddBook = () => {
    this.props.handleAddBookWindow();
  }

  onAddBookCase = () => {
    console.log(this.props.booksLocations);
    const bookCaseNumbers = this.props.booksLocations.map(bookLocation => bookLocation.bookcaseNumber);
    let bookcase;
    console.log(bookCaseNumbers);
    if(isEmpty(bookCaseNumbers)) {
      bookcase = 1
    } else {
      bookcase = max(bookCaseNumbers)+1;
    }
    
    for(let i=1; i<=3; i++) {
      for(let j=1; j<=5; j++) {
          let bookLocation = {
              bookcaseNumber: bookcase,
              shelfNumber: i,
              locationOnShelf: j
            }
          this.props.addNewBookLocation(bookLocation);
      }
    }
    this.props.getAllBooksLocations();
  }

  onDeleteBook = (bookId) => {
    this.props.deleteBook(bookId);
  }

  render() {
    const { booksList, freeBooksLocationsList, showAddBookWindow, activeUser } = this.props;
    console.log(booksList);
    return (
      <div className='books-page'>
      <MenuAdmin />
        <div className='books'>
          {showAddBookWindow && <AddBook />}
          <div className='books-list'>
            <div className='books-table-header'>
              <div className='books-table-column'>Tytuł</div>
              <div className='books-table-column'>Wydawnictwo</div>
              <div className='books-table-column'>Dostępność</div>
              <div className='books-table-column'>Rok publikacji</div>
              <div className='books-table-column'>Typ</div>
              <div className='books-table-column'></div>
            </div>
            {booksList.map(book => <Book book={book} deleteBook={() => this.onDeleteBook(book.bookId)} user='ADMIN' />)}
          </div>
          <div className='books-buttons'>
            <DefaultButton text='Dodaj książkę' onClick={() => this.onAddBook()} />
            {activeUser.role === 'ADMIN' && <DefaultButton text='Dodaj regał' onClick={() => this.onAddBookCase()} /> }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  booksList: state.books.books,
  booksLocations: state.booksLocations.booksLocations,
  freeBooksLocationsList: state.booksLocations.freeBooksLocations,
  showAddBookWindow: state.books.showAddBookWindow,
  activeUser: state.sessionUser.activeUser
});

const mapDispatchToProps = {
  addNewBook,
  getAllBooks,
  getAllBooksLocations,
  getFreeBooksLocations,
  handleAddBookWindow,
  addNewBookLocation,
  deleteBook
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksAdmin);