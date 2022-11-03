import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TwitterURL, GitHubRepoUrl } from './Constants';
import { Items } from './utils/NavbarItems';
import Home from './pages/Home';
import Download from './pages/Download';
import NotFound from './pages/NotFound';
<title>Pro Settings</title>


class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	
	render() {
        Items.forEach(item => item.active = item.url === `/${window.location.pathname.split('/')[1]}`);

		return (
			
			<Router basemname={`/${process.env.PUBLIC_URL}`}>
				<Switch>
					{/* real pages */}
					<Route path='/' exact component={Home} />
					<Route path='/download' exact component={Download} />

					<Route path='/github' exact component={() => {
						window.location.replace(GitHubRepoUrl);
						return null;
					}} />

					<Route path='/twitter' exact component={() => {
						window.location.replace(TwitterURL);
						return null;
					}} />

					{/* 404 */}
					<Route exact component={NotFound} />
				</Switch>
			</Router>
		);
	}
	
};

export default App;
