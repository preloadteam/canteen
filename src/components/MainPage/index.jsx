import * as React from 'react';
import { block } from 'bem-cn';

import './index.scss';

import MenuExampleTabularOnLeft from '../MenuExampleTabularOnLeft/index.jsx';

const b = block('canteen-main-page');

export default class MainPage extends React.Component {
    render() {
        return (
            <div className={b()}>
                <p>Main Page</p>
                <MenuExampleTabularOnLeft/>
            </div>
        );
    }
}
