import React, { Component } from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

class Order extends Component {
  render() {
    const { order, onClick, role, returnBook } = this.props;
    return (
      <div className='orders-table-row'>
        {role === 'ADMIN' && <div className='orders-table-column'>{ order.user.name } { order.user.surname }</div>}
        <div className='orders-table-column'>{ order.borrowedBook.title }</div>
        <div className='orders-table-column'>{ order.borrowedBook.author }</div>
        {role === 'ADMIN' && 
        <div className='orders-table-column'>
          { order.borrowedBook.location.bookcaseNumber }, { order.borrowedBook.location.shelfNumber }, { order.borrowedBook.location.locationOnShelf }
        </div>}
        <div className='orders-table-column'>{ order.dateOfBorrow }</div>
        <div className='orders-table-column'>{ order.dateToReturn }</div>
        {role === 'ADMIN' && 
        <div className='orders-table-column'>
          <DefaultButton text='Zwróć książkę' onClick={returnBook} />
        </div>}
      </div>
    )
  }
}

export default Order;