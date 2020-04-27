import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

class TopBook extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className='top-book'>
        <FontAwesomeIcon icon={faBook} />
        <Label>{book.title}</Label>
        <Label>{book.author}</Label>
        <Label>Wypożyczono {book.ordersAmount} razy</Label>
      </div>
    )
  }
}

export default TopBook;