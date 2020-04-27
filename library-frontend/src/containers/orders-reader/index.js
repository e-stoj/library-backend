import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../pages/orders/order';
import { getUserCurrentOrders } from '../../state/users';

class OrdersReader extends Component {

  componentDidMount() {
    const userId = this.props.activeUser.id;
    this.props.getUserCurrentOrders(userId);
  }

  render() {
    const { currentOrders } = this.props;
    console.log(currentOrders);
    return (
      <div className='order-page'>
        <div className='orders'>
          <div className='orders-list'>
            <div className='orders-table-header'>
              <div className='orders-table-column'>Tytuł książki</div>
              <div className='orders-table-column'>Autor</div>
              <div className='orders-table-column'>Data wypożyczenia</div>
              <div className='orders-table-column'>Ostateczna data oddania</div>
            </div>
            {currentOrders.map(order => <Order order={order}/>)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentOrders: state.users.currentOrders,
  activeUser: state.sessionUser.activeUser
});

const mapDispatchToProps = {
  getUserCurrentOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersReader);