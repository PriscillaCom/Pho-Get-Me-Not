import React, {Component} from 'react';
import MenuCategory from '../MenuCategory/MenuCategory';
import MENU_ITEMS_DATA from './MENU_ITEMS_DATA';

import './Directory.css';

class Directory extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu_items: MENU_ITEMS_DATA
        }
    }

    render(){
        const {menu_items} = this.state;
        return(
            <div className='directoryMenu'>
                {
                    menu_items.map(({id, imageUrl, ...otherProps}) => (
                        <MenuCategory key={id} imageUrl={imageUrl} {...otherProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;