import {DISHES} from './shared/dishes';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import React, {Component} from "react";
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();

class App extends Component {
    // vì n là constructor của class
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    // hàm render dùng để hiển thị nội dung
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <div className="App">
                            <Main />
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
