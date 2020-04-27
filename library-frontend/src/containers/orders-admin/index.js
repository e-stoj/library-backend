import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../pages/orders/order';
import MenuAdmin from '../../containers/menu-admin';
import { addNewOrder, getAllOrders, returnOrder } from '../../state/orders';
import { getAvailableBooks } from '../../state/books';


class OrdersAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
    }
  }

  componentDidMount() {
    this.props.getAllOrders();
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps.ordersList)
    return nextProps.ordersList !== this.props.ordersList
  }

  onReturnBook = (orderId) => {
    this.props.returnOrder(orderId)
  } 


  render() {
    const { ordersList } = this.props;
    console.log(ordersList);
    return (
      <div className='order-page'>
        <div className='orders'>
          <div className='orders-list'>
            <div className='orders-table-header'>
              <div className='orders-table-column'>Użytkownik</div>
              <div className='orders-table-column'>Tytuł książki</div>
              <div className='orders-table-column'>Autor książki</div>
              <div className='orders-table-column'>Lokalizacja</div>
              <div className='orders-table-column'>Data wypożyczenia</div>
              <div className='orders-table-column'>Ostateczna data oddania</div>
              <div className='orders-table-column'></div>
            </div>
            {ordersList.map(order => <Order order={order} role='ADMIN' returnBook={() => this.onReturnBook(order.orderId)} />)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ordersList: state.orders.orders,
});

const mapDispatchToProps = {
  getAllOrders,
  returnOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersAdmin);