import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import AddProducts from '../../PriceLists/AddProducts';
import PriceListDetails from '../../PriceLists/PriceListDetails';
import PriceLists from '../../PriceLists/PriceLists';
import RulesList from '../../Rules/RulesList';

export const Routes = () => (
	<Switch>
		<Route exact path={ROUTES.priceLists} >
			<PriceLists />
		</Route>
		<Route path={ROUTES.rules}>
			<RulesList />
		</Route>
		<Route path={`${ROUTES.priceListDetails}/:priceListId/:countryId`}>
			<PriceListDetails />
		</Route>
		<Route path={`${ROUTES.addProductsToPL}/:priceListId/:countryId`}>
			<AddProducts />
		</Route>
	</Switch>
);
