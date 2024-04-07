'use client';

import styled from 'styled-components';
import { useLocale } from 'next-intl';

import PictureGroup from '@/_components/UI/PictureGroup';
import H2 from '@/_components/UI/HeadingH2';
import H3 from '@/_components/UI/HeadingH3';
import List from '@/_components/UI/List';

import Food1 from '../../_assets/facilities/food/food-1.png';
import Food2 from '../../_assets/facilities/food/food-2.png';
import Food3 from '../../_assets/facilities/food/food-3.png';
import Food4 from '../../_assets/facilities/food/food-4.png';

import Health1 from '../../_assets/facilities/health/health-1.png';
import Health2 from '../../_assets/facilities/health/health-2.png';
import Health3 from '../../_assets/facilities/health/health-3.png';
import Health4 from '../../_assets/facilities/health/health-4.png';

import Recreation1 from '../../_assets/facilities/recreation/recreation-1.png';
import Recreation2 from '../../_assets/facilities/recreation/recreation-2.png';
import Recreation3 from '../../_assets/facilities/recreation/recreation-3.png';
import Recreation4 from '../../_assets/facilities/recreation/recreation-4.png';

import Others1 from '../../_assets/facilities/others/others-1.png';
import Others2 from '../../_assets/facilities/others/others-2.png';
import Others3 from '../../_assets/facilities/others/others-3.png';
import Others4 from '../../_assets/facilities/others/others-4.png';

import { TABLET_MEDIA, LAPTOP_MEDIA, DESKTOP_MEDIA } from '@/lib/utils';

const Facilities = () => {
	const locale = useLocale();
	const facilitiesListEng = [
		{
			images: [
				{ image: Food1, alt: '' },
				{ image: Food2, alt: '' },
				{ image: Food3, alt: '' },
				{ image: Food4, alt: '' }
			],
			title: 'Food',
			list: [
				'Hygienic food made with good quality ingredients.',
				'Separate kitchens for vegetarian and non-vegetarian food.',
				'Food adjustment as per tithi and vaar.',
				'Pure vegetarian food Maharashtrian style.',
				'RO purified water provided for drinking.'
			]
		},
		{
			images: [
				{ image: Health1, alt: '' },
				{ image: Health2, alt: '' },
				{ image: Health3, alt: '' },
				{ image: Health4, alt: '' }
			],
			title: 'Health',
			list: [
				'Doctor visit and examination once a week.',
				'BP, oxygen and sugar check once in 15 days.',
				'Pick up ambulance facility available.',
				'Tie-up with multispecialty hospital for emergency admission.',
				'Special facility of water bed, air bed for bed ridden elderly and patients.',
				'Individual and group counselling.',
				'Cold and hot water system available.'
			]
		},
		{
			images: [
				{ image: Recreation1, alt: '' },
				{ image: Recreation2, alt: '' },
				{ image: Recreation3, alt: '' },
				{ image: Recreation4, alt: '' }
			],
			title: 'Recreation',
			list: [
				'Morning walk',
				'Yoga',
				'Meditation',
				'Origami',
				'Warli painting',
				'Group activities',
				'Visiting temples and places of interest.',
				'Library for reading books.',
				'AV room for entertainment.',
				'Theater, gym and intercom available.',
				'Room for satsang and puja.'
			]
		},
		{
			images: [
				{ image: Others1, alt: '' },
				{ image: Others2, alt: '' },
				{ image: Others3, alt: '' },
				{ image: Others4, alt: '' }
			],
			title: 'Other Facilities',
			list: [
				'The centre looks and feels homely and is close to the main road.',
				'Capacity for 100+ seniors.',
				'Full time Mawashi and other staff services available.',
				'Special facilities for elderly, sick and disabled persons.',
				'CCTV cameras and ATM at the centre.',
				'30 blocks reserved at the centre for all facilities.'
			]
		}
	];

	const facilitiesListMarathi = [
		{
			images: [
				{ image: Food1, alt: '' },
				{ image: Food2, alt: '' },
				{ image: Food3, alt: '' },
				{ image: Food4, alt: '' }
			],
			title: 'अन्न',
			list: [
				'चांगल्या दर्जाच्या घटकांनी बनवलेले आरोग्यदायी अन्न.',
				'शाकाहारी आणि मांसाहारी जेवणासाठी स्वतंत्र स्वयंपाकघर.',
				'तिथी आणि वारानुसार अन्न समायोजन.',
				'शुद्ध शाकाहारी जेवण महाराष्ट्रीयन पद्धतीचे.',
				'पिण्यासाठी आरओ प्युरिफाईड पाणी दिले.'
			]
		},
		{
			images: [
				{ image: Health1, alt: '' },
				{ image: Health2, alt: '' },
				{ image: Health3, alt: '' },
				{ image: Health4, alt: '' }
			],
			title: 'आरोग्य',
			list: [
				'आठवड्यातून एकदा डॉक्टरांना भेट द्या आणि तपासणी करा.',
				'१५ दिवसातून एकदा बीपी, ऑक्सिजन आणि साखर तपासा.',
				'पिकअप रुग्णवाहिका सुविधा उपलब्ध.',
				'आपत्कालीन प्रवेशासाठी मल्टीस्पेशालिटी हॉस्पिटलशी टाय अप करा.',
				'अंथरुणावर झोपलेल्या वृद्ध आणि रुग्णांसाठी वॉटर बेड, एअर बेडची विशेष सोय.',
				'वैयक्तिक आणि गट समुपदेशन.',
				'थंड आणि गरम पाण्याची व्यवस्था उपलब्ध.'
			]
		},
		{
			images: [
				{ image: Recreation1, alt: '' },
				{ image: Recreation2, alt: '' },
				{ image: Recreation3, alt: '' },
				{ image: Recreation4, alt: '' }
			],
			title: 'मनोरंजन',
			list: [
				'मॉर्निंग वॉक',
				'योग',
				'ध्यान',
				'ओरिगामी',
				'वारली चित्रकला',
				'गट क्रियाकलाप',
				'मंदिरे आणि प्रेक्षणीय स्थळांना भेटी देणे.',
				'पुस्तके वाचण्यासाठी लायब्ररी.',
				'मनोरंजनासाठी एव्ही रूम.',
				'थिएटर, जिम आणि इंटरकॉम उपलब्ध.',
				'सत्संग आणि पूजेसाठी खोली.'
			]
		},
		{
			images: [
				{ image: Others1, alt: '' },
				{ image: Others2, alt: '' },
				{ image: Others3, alt: '' },
				{ image: Others4, alt: '' }
			],
			title: 'इतर सुविधा',
			list: [
				'केंद्र घरासारखे दिसते आणि मुख्य रस्त्याच्या जवळ आहे.',
				'१००+ ज्येष्ठांसाठी क्षमता.',
				'पूर्णवेळ मावशी आणि इतर कर्मचारी सेवा उपलब्ध.',
				'वृद्ध, आजारी आणि अपंग व्यक्तींसाठी विशेष सुविधा.',
				'केंद्रावर सीसीटीव्ही कॅमेरे आणि एटीएम.',
				'केंद्रात सर्व सुविधांसाठी ३० ब्लॉक आरक्षित आहेत.'
			]
		}
	];

	const facilitiesList = locale === 'en' ? facilitiesListEng : facilitiesListMarathi;
	const heading = locale === 'en' ? 'Facilities' : 'सुविधा';
	return (
		<Wrapper>
			<H2>{heading}</H2>
			<section>
				{facilitiesList.map((facility, index) => {
					return (
						<InfoWrapper key={facility.title}>
							<PictureGroup images={facility.images} rectanglePosition={index % 2 == 0 ? 'left' : 'right'} />
							<div>
								<H3>{facility.title}</H3>
								<List list={facility.list} />
								<Number>{(index + 1).toString().padStart(2, '0')}</Number>
							</div>
						</InfoWrapper>
					);
				})}
			</section>
		</Wrapper>
	);
};

export default Facilities;

const Wrapper = styled.main`
	& h2 {
		margin-top: 30px;
	}

	& ul {
		margin-top: 20px;
	}

	& section {
		position: relative;
	}

	& section:not(:first-of-type) {
		margin-top: 100px;
	}

	& section section:nth-of-type(3) {
		& ul {
			${TABLET_MEDIA} {
				column-count: 2;
			}
		}
	}

	${DESKTOP_MEDIA} {
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
`;

const InfoWrapper = styled.section`
	section:first-of-type {
		margin-top: 30px;
	}

	& h3 {
		margin-top: 48px;
	}

	${LAPTOP_MEDIA} {
		display: flex;
		gap: 0 64px;
		justify-content: space-around;

		&:nth-child(even) {
			flex-direction: row-reverse;

			& span {
				left: 0;
			}
		}
	}
`;

const Number = styled.span`
	position: absolute;
	right: 0;
	bottom: 0;
	font-family: var(--font-satoshi);
	font-weight: 900;
	line-height: 0.75;
	font-size: calc(120 / 16 * 1rem);
	opacity: 0.05;

	${LAPTOP_MEDIA} {
		font-size: 200px;
	}
`;
