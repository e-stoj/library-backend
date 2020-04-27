import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from './order';
import MenuAdmin from '../../containers/menu-admin';
import MenuReader from '../../containers/menu-reader';
import OrdersAdmin from '../../containers/orders-admin';
import OrdersReader from '../../containers/orders-reader';
import './styles.css';

class Orders extends Component {

  render() {
    const { activeUser } = this.props;
    return (
      <div className='order-page'>
          {(activeUser.role === 'ADMIN' || activeUser.role === 'WORKER') && <MenuAdmin />}
          {activeUser.role === 'READER' && <MenuReader />}
        <div className='orders'>
          {(activeUser.role === 'ADMIN' || activeUser.role === 'WORKER') && <OrdersAdmin />}
          {activeUser.role === 'READER' && <OrdersReader />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  activeUser: state.sessionUser.activeUser
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);