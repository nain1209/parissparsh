'use client';

import styled from 'styled-components';

const MainWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	gap: 120px 0;
	min-height: 100%;
`;

export default MainWrapper;
