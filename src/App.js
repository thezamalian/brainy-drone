import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/Admin/AddProduct/AddProduct';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Admin/ManageProducts/ManageProducts';
import ExploreAll from './Pages/ExploreAll/ExploreAll';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Purchase from './Pages/Shared/Purchase/Purchase';
import SignUp from './Pages/Shared/SignUp/SignUp';
import AddReview from './Pages/User/AddReview/AddReview';
import MyOrders from './Pages/User/MyOrders/MyOrders';
import Pay from './Pages/User/Pay/Pay';

/* 
"@mui/icons-material": "^5.0.5",
"@mui/lab": "^5.0.0-alpha.24",
"@material-ui/core": "^5.0.0-alpha.24",
"@mui/material": "^5.0.6",
"date-fns": "^2.25.0", 
*/

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>

					<Route exact path="/products">
						<ExploreAll />
					</Route>
					<Route path="/products/:id">
						<Purchase />
					</Route>

					<Route path="/myOrders">
						<MyOrders />
					</Route>
					<Route path="/payment">
						<Pay />
					</Route>
					<Route path="/addReview">
						<AddReview />
					</Route>

					<Route path="/manageAllOrders">
						<ManageAllOrders />
					</Route>
					<Route path="/addProduct">
						<AddProduct />
					</Route>
					<Route path="/manageProducts">
						<ManageProducts />
					</Route>
					<Route path="/makeAdmin">
						<MakeAdmin />
					</Route>

					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
