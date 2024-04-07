import styled from 'styled-components';
import { LAPTOP_MEDIA } from '@/lib/utils';

const Quote = ({ quote = '', author = '' }) => {
	return (
		<Wrapper>
			<Divider $margin='32px 0 0 0'></Divider>
			<QuoteText>
				{quote}
				<br />
				<Cite> —{author}</Cite>
			</QuoteText>
			<Divider $margin='0 0 32px 0'></Divider>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px 0;

	${LAPTOP_MEDIA} {
		gap: 36px 0;
	}
`;

const Divider = styled.div`
	width: 80%;
	height: 1px;
	background-color: var(--pure-black);
	opacity: 0.2;
	margin: ${(props) => props.$margin};

	${LAPTOP_MEDIA} {
	}
`;

const QuoteText = styled.blockquote`
	font-family: var(--font-heading);
	font-style: italic;
	color: var(--gray-dark);
	font-size: calc(28 / 16 * 1rem);
	line-height: 1.5;

	&::before {
		position: absolute;
		top: 64px;
		content: url('./Quotes-open.svg');
	}

	&::after {
		position: absolute;
		right: 0;
		content: url('./Quotes-close.svg');
	}

	${LAPTOP_MEDIA} {
		font-size: calc(28 / 16 * 1rem);

		&::after {
			right: revert;
		}
	}
`;

const Cite = styled.cite`
	display: block;
	text-align: right;
	padding-top: 12px;
`;

export default Quote;
