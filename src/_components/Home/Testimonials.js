'use client';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { useLocale } from 'next-intl';

import H3 from '../UI/HeadingH3';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Testimonials = () => {
	const locale = useLocale();

	const testimonialsEng = [
		{
			text: "“My name is Vishal Karadkar, 39, resident of Andheri West Mumbai. I am the only son of my parents. After my mother's death, I got married in a year. As both my wife and I are out of the house for a long time due to work, father was alone in the house. Due to his somewhat irritable nature and due to the seriousness of the situation, I admitted him to Premkunj Vriddhasram. Home like environment, good food served on time from morning till evening, age appropriate activities and health camps, personal supervision and conscious attention never made me or my father feel that I have alienated him in any way. The best example of affection and commitment is Premkunj not an old age home but your second home...Thank you Kundan Dada and family... i.e. Premkunj family”",
			name: 'Vishal Karadkar, 39',
			details: 'Senior living since 2023' /* ,
			profilePicture: ProfilePictureImage */
		},
		{
			text: '“I want you to know how much I appreciated all the love, care, and attention you gave to my mom and dad during this last year of my mom’s life. Everyone has been wonderful.”',
			name: 'Nathan Lee',
			details: 'Senior living since 2020' /* ,
			profilePicture: ProfilePictureImage */
		},
		{
			text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”',
			name: 'Robert Fox',
			details: 'Senior living since 2022' /* ,
			profilePicture: ProfilePictureImage */
		}
	];

	const testimonialsMar = [
		{
			text: '“माझे नाव विशाल कराडकर,३९ राहणारा अंधेरी पश्चिम मुंबई.माझ्या आईवडिलांचा मी एकुलता एक मुलगा,आई वारल्या नंतर मी आणि वडील एवढंच परिवार आणि एक वार्षत माझे लग्न झाले. मी आणि माझी पत्नी दोघं जॉब मुळे जास्त वेळ घरा बाहेर असल्यामुळे वडील एकटे घरात आणि त्यांचं थोडा चीड चीड स्वभाव असल्या कारणामुळे आणि परिस्थितीच्या गांभीर्यानं वडिलांना मी प्रेमकुंज वृध्दाश्रम येथे दाखल केले येथील वास्तव्य आणि आपुलकीच्या वागणुकीचा समाधानकारक प्रत्या आला.घराप्रमाने मिळणारे वातावरण वेळेवर सकाळी चहा नाश्ता दुपारी पण उत्तम जेवण आणि रात्री सुधा तसेच जेवण, योग्य उपक्रम आणि आरोग्य शिबिर, व्यायेक्ती देखरेख,जाणीवपूर्वक लक्ष देणे. कधी ही मला किंवा माझ्या वडलांना कोणत्या ही प्रकारे त्यांना मी दूर केल्याचा आभास होवू दिला नाही.आत्यंत उत्तम आपुलकी आणि बांधिलकीचे उदाहरण म्हणजे प्रेमकुंज वृध्दाश्रम नाही आपले दुसरे घरचं म्हणा...धन्यवाद कुंदन दादा आणि परिवार... अर्थात प्रेमकुंज परिवार”',
			name: 'विशाल कराडकर,३९',
			details: '२०२३ पासून ज्येष्ठ राहतात'
			/* 		profilePicture: ProfilePictureImage */
		},
		{
			text: '“माझ्या आईच्या आयुष्याच्या या शेवटच्या वर्षात तुम्ही माझ्या आई आणि बाबांना दिलेल्या सर्व प्रेमाची, काळजीची आणि लक्षाची मी किती प्रशंसा केली हे तुम्हाला जाणून घ्यायचे आहे. प्रत्येकजण अद्भुत झाला आहे.”',
			name: 'नॅथन ली',
			details: '२०२० पासून ज्येष्ठ राहतात'
			/* profilePicture: ProfilePictureImage */
		},
		{
			text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”',
			name: 'रॉबर्ट फॉक्स',
			details: '२०२२ पासून ज्येष्ठ राहतात'
			/* profilePicture: ProfilePictureImage */
		}
	];

	const testimonials = locale === 'en' ? testimonialsEng : testimonialsMar;
	const heading = locale === 'en' ? 'Testimonials' : 'प्रशस्तिपत्र';

	return (
		<Wrapper>
			<H3>{heading}</H3>

			<Carousel autoplay={true} autoplayInterval={100000} wrapAround={true}>
				{testimonials.map((testimonial, index) => {
					return (
						<Testimonial key={index} id={index}>
							<blockquote>
								<Text>{testimonial.text}</Text>
							</blockquote>
							<Caption>
								{/* 	<Image src={ProfilePictureImage} alt='Image of old age home resident' height={48} width={48} /> */}
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
