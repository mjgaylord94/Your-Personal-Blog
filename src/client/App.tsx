
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Blog from './pages/Blog';
import Edit from './pages/Edit';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	return (
		<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/new">
						<New></New>
					</Route>
					<Route exact path="/details/:id">
						<Blog></Blog>
					</Route>
					<Route exact path="/edit/:id">
						<Edit></Edit>
					</Route>
				</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
