import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage/MainPage';

export const App: React.FC = () => {
	return (
		<Switch>
			<Route path={'/'} component={MainPage} />
		</Switch>
	);
};
