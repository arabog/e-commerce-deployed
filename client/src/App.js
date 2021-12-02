import Home from './pages/Home';

import Cart from "./pages/Cart";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success";

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom"

import { useSelector } from 'react-redux';


function App() {
	const user = useSelector(state => state.user.currentUser);


	return (
		<Router>

			<Switch>
				<Route exact path="/" >
					{ user ? <Home /> : <Register /> }
				</Route>

				<Route path="/products/:category">
					<ProductList />
				</Route>

				<Route path="/product/:id">
					<Product /> 
				</Route>

				<Route path="/register">
					{user ? <Redirect to="/" /> : <Register />}
				</Route>

				<Route path="/login">
					{user ? <Redirect to="/" /> : <Login />}
				</Route>

				<Route path="/success">
					<Success />
				</Route>

				<Route path="/cart">
					<Cart />
				</Route>


			</Switch>
		</Router>
	);
}


export default App;
