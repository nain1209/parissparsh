import styled from 'styled-components';
import { TABLET_MEDIA, LAPTOP_MEDIA } from '@/lib/utils';

const Line = ({ ...delegated }) => {
	return <Separator {...delegated}></Separator>;
};

const Separator = styled.div`
	display: block;
	opacity: 0.1;
	background: #000;
	height: 1px;
	margin-left: -16px;
	margin-right: -16px;

	${TABLET_MEDIA} {
		margin-right: -32px;
		margin-left: -32px;
	}

	${LAPTOP_MEDIA} {
		display: none;
	}
`;
export default Line;
