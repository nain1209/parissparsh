import styled from 'styled-components';

const Underline = () => {
	return <UnderlineText></UnderlineText>;
};

const UnderlineText = styled.div`
	width: 40px;
	height: 2px;
	background-color: var(--primary);
	margin-top: 7px;
	margin-bottom: 12px;
`;

export default Underline;
