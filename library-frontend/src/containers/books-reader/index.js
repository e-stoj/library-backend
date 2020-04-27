import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import Book from '../../pages/books/book';
import MenuReader from '../menu-reader';
import { getAllBooks } from '../../state/books';
import { addNewOrder } from '../../state/orders';

class BooksReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTitle: ''
    }
  }

  componentDidMount() {
    this.props.getAllBooks();
  }
  
  filterBooks = (booksList) => {
    console.log(booksList);
    return booksList.filter(book => book.title.indexOf(this.state.bookTitle) !== -1)
  }

  onHandleBookTitle = (event) => {
    this.setState({ bookTitle: event.target.value });
  }
  
  onOrderBook = (bookId) => {
    const userId = this.props.activeUser.id;
    console.log(bookId);
    this.props.addNewOrder(bookId, userId);
  }

  render() {
    const { booksList } = this.props;
    console.log(this.filterBooks(booksList));
    return (
      <div className='books-page'>
      <MenuReader />
        <div className='books'>
          <div className='books-list'>
            <div className='books-table-header'>
              <div className='books-table-column'>Tytuł</div>
              <div className='books-table-column'>Wydawnictwo</div>
              <div className='books-table-column'>Dostępność</div>
              <div className='books-table-column'>Rok publikacji</div>
              <div className='books-table-column'>Typ</div>
              <div className='books-table-column'></div>
            </div>
            {this.filterBooks(booksList).map(book => <Book book={book} user='READER' onOrderBook={() => this.onOrderBook(book.bookId)} />)}
          </div>
          <div className='books-buttons'>
            <Label htmlFor='anInput'>Wpisz tytuł książki aby wyszukać</Label>
            <TextField id='anInput' onChange={(event) => this.onHandleBookTitle(event)} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  booksList: state.books.books,
  activeUser: state.sessionUser.activeUser
});

const mapDispatchToProps = {
  getAllBooks,
  addNewOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksReader);