import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/authActions'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'reactstrap'

import AppNav from './components/AppNav';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal'
import { from } from 'rxjs';

export default class App extends Component {

	componentDidMount(){
		store.dispatch(loadUser())
	}

	render() {
		return (
			<Provider store={store}>
				<div>
					<AppNav />
					<Container>
						<ItemModal />
						<ShoppingList />
					</Container>
				</div>
			</Provider>
		)
	}
}
