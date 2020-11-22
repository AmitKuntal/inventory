import { connect } from 'react-redux';
import Inventory from './inventory';
import {addProduct, searchProduct, logout, login_user} from './actions/index'

const container = connect(
  state=>
      {
        return  {...state}
      }
  , {
        login_user,
        addProduct,
        searchProduct,
        logout
    }
)(Inventory);

export default container;