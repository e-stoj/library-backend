import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toNumber, split } from 'lodash';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { addNewBook, getAllBooks, handleAddBookWindow } from '../../state/books';
import { getFreeBooksLocations } from '../../state/books-locations';
import './styles.css';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookLocation: {},
      author: '',
      title: '',
      publishingHouse: '',
      yearOfPublish: '',
      type: '',
      descryption: ''
    }
  }

  componentDidMount() {
    this.props.getFreeBooksLocations();
  }

  onAddBook = () => {
    const book = {
      title: this.state.title,
      author: this.state.author,
      publishingHouse: this.state.publishingHouse,
      yearOfPublish: toNumber(this.state.yearOfPublish),
      type: this.state.type,
      descryption: this.state.descryption
    }
    
    this.props.addNewBook(book, this.state.bookLocation.key);
    this.props.handleAddBookWindow();

    this.setState({
      bookLocation: {},
      author: '',
      title: '',
      publishingHouse: '',
      yearOfPublish: '',
      type: '',
      descryption: ''
    })
  }

  onHandleTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  onHandleAuthor = (event) => {
    this.setState({ author: event.target.value });
  }

  onHandlePublishingHouse = (event) => {
    this.setState({ publishingHouse: event.target.value });
  }

  onHandleYear = (event) => {
    this.setState({ yearOfPublish: event.target.value });
  }

  onHandleType = (event) => {
    this.setState({ type: event.target.value });
  }

  onHandleDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  mapBooksLocationsList = (booksLocationsList) => {
    return booksLocationsList.map(bookLocation => ({ 
      key: bookLocation.locationId, 
      text: `${bookLocation.bookcaseNumber}, ${bookLocation.shelfNumber}, ${bookLocation.locationOnShelf}` 
    }))
  }

  handleAddBookWindow = () => {
    this.props.handleAddBookWindow();
  }

  onChangeBookLocation = (event, item) => {
    this.setState({ bookLocation: item })
  }

  render() {
    const { freeBooksLocationsList } = this.props;
    return (
      <div className='add-book'>
        <div className='add-book-close'>
          <FontAwesomeIcon 
            className='close-icon' 
            icon={faTimes}
            onClick={this.handleAddBookWindow} />
        </div>
        <div className='add-book-values'>
          <Dropdown
            placeholder='Wybierz miejsce na półce'
            label='Lokalizacja książki'
            options={this.mapBooksLocationsList(freeBooksLocationsList)}
            onChange={(event, item) => this.onChangeBookLocation(event, item)} />
          <TextField 
            label='Autor' 
            value={this.state.author}
            onChange={(event) => this.onHandleAuthor(event)} />
          <TextField 
            label='Tytuł' 
            value={this.state.title}
            onChange={(event) => this.onHandleTitle(event)} />
          <TextField 
            label='Wydawnictwo'
            value={this.state.publishingHouse}
            onChange={(event) => this.onHandlePublishingHouse(event)} />
          <TextField 
            label='Rok publikacji'
            value={this.state.yearOfPublish}
            onChange={(event) => this.onHandleYear(event)} />
          <TextField 
            label='Typ'
            value={this.state.type}
            onChange={(event) => this.onHandleType(event)} />
          <TextField 
            label='Opis'
            value={this.state.value}
            onChange={(event) => this.onHandleDescription(event)} />
          <DefaultButton text='Dodaj książkę' onClick={() => this.onAddBook()} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  freeBooksLocationsList: state.booksLocations.freeBooksLocations,
  showAddBookWindow: state.books.showAddBookWindow
});

const mapDispatchToProps = {
  addNewBook,
  getAllBooks,
  getFreeBooksLocations,
  handleAddBookWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);