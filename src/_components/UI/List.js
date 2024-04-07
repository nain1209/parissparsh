import styled from 'styled-components';
import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const List = ({ list }) => {
	return (
		<ListItems>
			{list &&
				list.map((item, index) => {
					return <ListItem key={index}>{item}</ListItem>;
				})}
		</ListItems>
	);
};

const ListItems = styled.ul`
	list-style: none;
	padding-left: 24px;
	padding-top: 8px;

	li:last-of-type {
		padding-bottom: 0;
	}

	${TABLET_MEDIA} {
		column-fill: balance;
		column-count: 2;
	}

	${LAPTOP_MEDIA} {
		column-count: revert;
	}

	${DESKTOP_MEDIA} {
		font-size: calc(20 / 16 * 1rem);
	}
`;

const ListItem = styled.li`
	list-style-image: url('../../CheckMark.svg');
	padding-bottom: 20px;
	padding-left: 10px;
	break-inside: avoid;

	${TABLET_MEDIA} {
		padding-right: 40px;
	}

	${LAPTOP_MEDIA} {
		padding-right: revert;
	}
`;

export default List;
