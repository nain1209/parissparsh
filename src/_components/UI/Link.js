import styled from 'styled-components';
/* import Link from 'next/link'; */
import { Link } from '@/navigation';
import Image from 'next/image';
import arrowIcon from '../../_assets/arrow-right.svg';
import { DESKTOP_MEDIA } from '@/lib/utils';

const StyledLink = ({ href, children }) => {
	return (
		<LinkWithIcon href={href}>
			{children}
			<Image src={arrowIcon} alt='Icon of an arrow' height={16} width={16} />
		</LinkWithIcon>
	);
};

const LinkWithIcon = styled(Link)`
	display: flex;
	align-items: center;
	gap: 0 4px;
	color: var(--black);
	font-weight: 700;
	font-size: calc(14 / 16 * 1rem);
	line-height: 1.41;
	text-transform: capitalize;
	position: relative;
	z-index: 1;
	cursor: pointer;

	${DESKTOP_MEDIA} {
		font-size: calc(16 / 16 * 1rem);
		gap: 0 6px;
	}

	&:hover {
		color: var(--primary);

		& img {
			filter: brightness(0) saturate(100%) invert(13%) sepia(43%) saturate(4310%) hue-rotate(289deg) brightness(102%)
				contrast(110%);
		}
	}
`;

export default StyledLink;
