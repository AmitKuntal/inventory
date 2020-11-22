import { connect } from 'react-redux';
import Inventory from './inventory';
import {addProduct, filterBYPrice, logout, login_user, filterBYQty} from './actions/index'

const container = connect(
  state=>
      {
        return  {...state}
      }
  , {
        login_user,
        addProduct,
        filterBYPrice,
        filterBYQty,
        logout
    }
)(Inventory);

export default container;