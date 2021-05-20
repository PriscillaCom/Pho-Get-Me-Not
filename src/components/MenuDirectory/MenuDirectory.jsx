import React, {Component} from 'react';
import MenuPreview from '../MenuPreview/MenuPreview';
import MENU_ITEMS_DATA from '../Directory/MENU_ITEMS_DATA';

import './MenuDirectory.css';

class MenuDirectory extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu_items: MENU_ITEMS_DATA
        }
    }

    render(){
        const {menu_items} = this.state;
        return(
            <div className='menu_directory'>
                {
                    menu_items.map(({id, ...otherProps}) => (
                        <MenuPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        );
    }
}

export default MenuDirectory;