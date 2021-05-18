import React, {Component} from 'react';
import MenuItems from '../MenuItems/MenuItems';
import images from './images';

import './Directory.css';

class Directory extends Component {
    render(){
        return(
            <div className='directoryMenu'>
                {
                    images.map(({id, imageUrl, ...otherProps}) => (
                        <MenuItems key={id} imageUrl={imageUrl} {...otherProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;