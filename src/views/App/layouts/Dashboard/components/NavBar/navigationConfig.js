import {
	ViewAgendaOutlined,
	ViewWeekOutlined,
} from '@material-ui/icons';

import { ROUTES } from 'constants/routes';

export default [
	{
		pages: [
			{
				title: 'Price lists',
				href: ROUTES.priceLists,
				icon: ViewWeekOutlined,
			},
			{
				title: 'Rules',
				href: ROUTES.rules,
				icon: ViewAgendaOutlined,
			},
		],
	},
];
