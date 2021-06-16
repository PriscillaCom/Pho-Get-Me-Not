import React, {Component} from 'react';
import MenuCategory from '../MenuCategory/MenuCategory';
import ShopContext from '../../context/ShopContext';

import './Directory.css';

class Directory extends Component {
    render(){
        return(
            <ShopContext.Consumer>
                {context => (
                     <div className='directoryMenu'>
                     {
                         context.products.map(({id, imageUrl, ...otherProps}) => (
                             <MenuCategory key={id} imageUrl={imageUrl} {...otherProps}/>
                         ))
                     }
                    </div>
                )}
            </ShopContext.Consumer>
           
        );
    }
}

export default Directory;