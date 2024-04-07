'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { useLocale } from 'next-intl';

import H3 from '../UI/HeadingH3';

import ProfilePictureImage from '../../_assets/mobile/profile-picture-1.png';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Testimonials = () => {
	const locale = useLocale();

	const testimonialsEng = [
		{
			text: '“The management team is very kind and help residents in health emergencies. If anybody is found sick, they take care of the patient needs, admit to nearby hospitals and make necessary arrangements. They inform concerned people of the patients.”',
			name: 'Robert Fox',
			details: 'Senior living since 2022',
			profilePicture: ProfilePictureImage
		},
		{
			text: '“I want you to know how much I appreciated all the love, care, and attention you gave to my mom and dad during this last year of my mom’s life. Everyone has been wonderful.”',
			name: 'Nathan Lee',
			details: 'Senior living since 2020',
			profilePicture: ProfilePictureImage
		},
		{
			text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”',
			name: 'Robert Fox',
			details: 'Senior living since 2022',
			profilePicture: ProfilePictureImage
		}
	];

	const testimonialsMar = [
		{
			text: '“व्यवस्थापन संघ अतिशय दयाळू आहे आणि आरोग्य आपत्कालीन परिस्थितीत रहिवाशांना मदत करतो. कोणी आजारी आढळल्यास ते रुग्णाच्या गरजांची काळजी घेतात, जवळच्या रुग्णालयात दाखल करतात आणि आवश्यक व्यवस्था करतात. ते संबंधित लोकांना रुग्णांची माहिती देतात.”',
			name: 'रॉबर्ट फॉक्स',
			details: '२०२२ पासून ज्येष्ठ राहतात',
			profilePicture: ProfilePictureImage
		},
		{
			text: '“माझ्या आईच्या आयुष्याच्या या शेवटच्या वर्षात तुम्ही माझ्या आई आणि बाबांना दिलेल्या सर्व प्रेमाची, काळजीची आणि लक्षाची मी किती प्रशंसा केली हे तुम्हाला जाणून घ्यायचे आहे. प्रत्येकजण अद्भुत झाला आहे.”',
			name: 'नॅथन ली',
			details: '२०२० पासून ज्येष्ठ राहतात',
			profilePicture: ProfilePictureImage
		},
		{
			text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”',
			name: 'रॉबर्ट फॉक्स',
			details: '२०२२ पासून ज्येष्ठ राहतात',
			profilePicture: ProfilePictureImage
		}
	];

	const testimonials = locale === 'en' ? testimonialsEng : testimonialsMar;
	const heading = locale === 'en' ? 'Testimonials' : 'प्रशस्तिपत्र';

	return (
		<Wrapper>
			<H3>{heading}</H3>

			<Carousel autoplay={true} autoplayInterval={5000} wrapAround={true}>
				{testimonials.map((testimonial, index) => {
					return (
						<Testimonial key={index} id={index}>
							<blockquote>
								<Text>{testimonial.text}</Text>
							</blockquote>
							<Caption>
								<Image src={ProfilePictureImage} alt='Image of old age home resident' height={48} width={48} />
								<div>
									<Name> {testimonial.name}</Name>
									<Details>{testimonial.details}</Details>
								</div>
							</Caption>
						</Testimonial>
					);
				})}
			</Carousel>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	& > .slider-container .slider-control-centerright,
	& > .slider-container .slider-control-centerleft {
		display: none;
	}

	& > .slider-container .slider-control-bottomcenter > div {
		top: 60px !important;

		& .paging-item {
			fill: var(--gray-dark) !important;
		}

		& .paging-item.active {
			fill: var(--primary-dark) !important;
		}

		& .paging-dot {
			width: 9px;
			height: 9px;
		}
	}

	${LAPTOP_MEDIA} {
		width: 50vw;
	}

	${DESKTOP_MEDIA} {
		width: 30vw;
	}
`;

const Testimonial = styled.figure`
	${TABLET_MEDIA} {
		background: url('./Quotes.svg') center no-repeat;
		height: 100%;
	}
`;

const Text = styled.p`
	font-family: var(--font-heading);
	font-style: italic;
	font-size: calc(20 / 16 * 1rem);
	line-height: 1.3;
	color: var(--gray-dark);
	background: url('./Quotes-mobile.svg') center no-repeat;
	padding-top: 8px;

	${TABLET_MEDIA} {
		background: revert;
	}
	${DESKTOP_MEDIA} {
		font-size: calc(24 / 16 * 1rem);
	}
`;

const Caption = styled.figcaption`
	display: flex;
	padding-top: 28px;
	gap: 0 18px;

	${LAPTOP_MEDIA} {
		padding-top: 40px;
	}
`;

const Name = styled.p`
	font-family: var(--font-satoshi);
	font-weight: 700;
	line-height: 1.41;
	color: var(--primary-dark);
`;

const Details = styled.p`
	font-family: var(--font-satoshi);
	font-weight: 500;
	line-height: 1.41;
	color: var(--gray-dark);
	font-size: calc(14 / 16 * 1rem);
`;

export default Testimonials;
