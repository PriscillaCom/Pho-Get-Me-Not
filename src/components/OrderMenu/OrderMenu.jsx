import React, {Component} from 'react';
import OrderPreview from '../OrderPreview/OrderPreview.jsx';
import MENU_ITEMS_DATA from '../Directory/MENU_ITEMS_DATA';

import './OrderMenu.css';

class OrderMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu_items: MENU_ITEMS_DATA,
        }
    }

    render(){
        const {menu_items} = this.state;
        return(
            <div className='orderMenu'>
                {
                    menu_items.map(({id, ...otherProps}) => (
                        <OrderPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        );
    }
}

export default OrderMenu;