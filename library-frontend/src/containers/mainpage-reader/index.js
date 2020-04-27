import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import TopBook from './topBook';
import { getTopBooks } from '../../state/books';

class MainPageReader extends Component {

  componentDidMount() {
    this.props.getTopBooks();
  }

  render() {
    const { topBooks } = this.props;
    console.log(topBooks);
    return (
      <div className='mainpage-reader'>
        <Label className='top-books-label'>Nasze najlepsze książki:</Label>
        {topBooks.map(book => <TopBook book={book} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  activeUser: state.sessionUser.activeUser,
  topBooks: state.books.topBooks
});

const mapDispatchToProps = {
  getTopBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageReader);