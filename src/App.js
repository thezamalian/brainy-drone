import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import useFirebase from './hooks/useFirebase';
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
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
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
	const { user } = useFirebase();
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		const uri = `https://serene-wildwood-59933.herokuapp.com/admins`;
		fetch(uri)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				data.forEach(admin => {
					if (user.email === admin.email) {
						setIsAdmin(true);
					}
				}
				)

			})

	}, [user.email])
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/"> <Home /> </Route>
						<Route path="/home"> <Home /> </Route>

						<Route path="/login"> <Login /> </Route>
						<Route path="/signup"> <SignUp /> </Route>

						<Route exact path="/products"> <ExploreAll /> </Route>
						<PrivateRoute path="/purchase/:id">
							<Purchase />
						</PrivateRoute>

						{!isAdmin && <PrivateRoute path="/myOrders"> <MyOrders /> </PrivateRoute>}
						{!isAdmin && <PrivateRoute path="/payment"> <Pay /></PrivateRoute>}
						{!isAdmin && <PrivateRoute path="/addReview"> <AddReview /></PrivateRoute>}


						{isAdmin && <PrivateRoute path="/manageAllOrders"> <ManageAllOrders /></PrivateRoute>}
						{isAdmin && <PrivateRoute path="/addProduct"> <AddProduct /></PrivateRoute>}
						{isAdmin && <PrivateRoute path="/manageProducts"> <ManageProducts /></PrivateRoute>}
						{isAdmin && <PrivateRoute path="/makeAdmin"> <MakeAdmin /></PrivateRoute>}

						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
