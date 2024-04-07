import styled from 'styled-components';
import { DESKTOP_MEDIA, LAPTOP_MEDIA } from '@/lib/utils';

const Rectangle = ({ $options }) => {
	return <DecorativeRectangle $options={$options}></DecorativeRectangle>;
};

const DecorativeRectangle = styled.div`
	height: 74px;
	width: 100px;
	background-color: var(--primary-light);
	position: absolute;
	z-index: -1;
	right: ${(props) => (props.$options.includes('right') ? '-16px' : 'unset')};
	bottom: ${(props) => (props.$options.includes('bottom') ? '-16px' : 'unset')};
	left: ${(props) => (props.$options.includes('left') ? '-16px' : 'unset')};
	top: ${(props) => (props.$options.includes('top') ? '-16px' : 'unset')};

	${LAPTOP_MEDIA} {
		width: 215px;
		height: 165px;
		right: ${(props) => (props.$options.includes('right') ? '-26px' : 'unset')};
		bottom: ${(props) => (props.$options.includes('bottom') ? '-26px' : 'unset')};
		left: ${(props) => (props.$options.includes('left') ? '-26px' : 'unset')};
		top: ${(props) => (props.$options.includes('top') ? '-26px' : 'unset')};
	}
`;

export default Rectangle;
