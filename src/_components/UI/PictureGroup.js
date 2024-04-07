import styled from 'styled-components';
import Image from 'next/image';
import Rectangle from './Rectangle';
import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const PictureGroup = ({ images, isRectangleVisible = true, rectanglePosition = 'left' }) => {
	return (
		<GridWrapper>
			<BigImageWrapper style={{ gridArea: 'image1' }}>
				<Image src={images[0].image} alt={images[0].alt} fill={true} style={{ objectFit: 'cover' }} />
			</BigImageWrapper>
			<BigImageWrapper style={{ gridArea: 'image4' }}>
				<Image src={images[3].image} alt={images[3].alt} fill={true} style={{ objectFit: 'cover' }} />
				{isRectangleVisible && rectanglePosition === 'right' && (
					<Rectangle $options={[`${rectanglePosition}`, 'bottom']}></Rectangle>
				)}
			</BigImageWrapper>
			<SmallerImageWrapper style={{ gridArea: 'image2' }}>
				<Image src={images[1].image} alt={images[1].alt} fill={true} style={{ objectFit: 'cover' }} />
			</SmallerImageWrapper>
			<SmallerImageWrapper style={{ gridArea: 'image3' }}>
				<Image src={images[2].image} alt={images[2].alt} fill={true} style={{ objectFit: 'cover' }} />
				{isRectangleVisible && rectanglePosition === 'left' && (
					<Rectangle $options={[`${rectanglePosition}`, 'bottom']}></Rectangle>
				)}
			</SmallerImageWrapper>
		</GridWrapper>
	);
};

export default PictureGroup;

const GridWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 112px 112px;
	gap: 8px 8px;
	grid-template-areas:
		'image1 image1 image2'
		'image3 image4 image4';
	max-width: 90%;
	margin-left: auto;
	margin-right: auto;

	${TABLET_MEDIA} {
		grid-template-rows: 165px 165px;
		gap: 10px 10px;
		max-width: 60%;
	}

	${LAPTOP_MEDIA} {
		width: 533px;
		max-width: 80%;
		gap: 20px 15px;
		grid-template-rows: 205px 205px;
		margin-left: revert;
		margin-right: revert;
	}
`;

const SmallerImageWrapper = styled.div`
	position: relative;
	height: 111px;

	${TABLET_MEDIA} {
		height: 165px;
	}

	${LAPTOP_MEDIA} {
		height: 205px;
	}
`;

const BigImageWrapper = styled.div`
	position: relative;
	height: 111px;

	${TABLET_MEDIA} {
		height: 170px;
	}

	${LAPTOP_MEDIA} {
		height: 205px;
	}
`;
