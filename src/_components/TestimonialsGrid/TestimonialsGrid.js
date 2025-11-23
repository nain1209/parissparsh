'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import styled from 'styled-components';
import H3 from '@/_components/UI/HeadingH3';
import { LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

// Utility to build Cloudinary URLs from folder 'videos'
const videoUrl = (file) =>
	`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/v1763896226/${file}.mp4`;

const posterUrl = (file) =>
	`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/so_1,f_jpg/${file}.jpg`;

const enVideos = [
	{
		id: 1,
		name: 'Manoj Amarnani',
		quote: '“The foundation cares for our elders like their own”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.23_AM_1_shkfor'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.23_AM_1_shkfor')
	},
	{
		id: 2,
		name: '',
		quote: '“My father is quite happy with the facilities and home like environment”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.25_AM_bjx7jl'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.25_AM_bjx7jl')
	},
	{
		id: 3,
		name: 'Komal Valecha',
		quote: "“My husband's paralysis has been improving with their care”",
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.22_AM_bgvhll'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.22_AM_bgvhll')
	},
	{
		id: 4,
		name: 'Komal Ahuja',
		quote: '“My aunt felt good when she came in here”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.23_AM_2_qvisoh'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.23_AM_2_qvisoh')
	},

	{
		id: 5,
		name: '62 year old Kamal Arani living at the center since 2 1/4 years',
		quote: '“This center has everything that a senior citizen needs”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_1_sy0dyd'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_1_sy0dyd')
	},
	{
		id: 6,
		name: '67 year old Shankar & 63 year old Anju',
		quote: '“Health issues gone, feel better and alive everyday”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_dbsgs5'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_dbsgs5')
	},
	{
		id: 7,
		name: 'Shantabai Vaman Kapurte living at the center since 2 1/4 years',
		quote: '“We feel supported every single day with every little thing”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_3_sezqbq'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_3_sezqbq')
	},
	{
		id: 8,
		name: '64 year old Pancham Nagvanshi living since 1.5 years',
		quote: '“Feel grateful to be here and being treated like a part of the family”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.27_AM_m1bzzp'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.27_AM_m1bzzp')
	}
];

const mrVideos = [
	{
		id: 1,
		name: 'मनोज अंबरनानी',
		quote: '“संस्थेत आमच्या ज्येष्ठांची काळजी ते स्वतःच्या घरच्यांसारखी घेतात”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.23_AM_1_shkfor'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.23_AM_1_shkfor')
	},
	{
		id: 2,
		name: '',
		quote: '“माझे वडील सोयीसुविधा आणि घरच्यासारख्या वातावरणामुळे खूप आनंदी आहेत”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.25_AM_bjx7jl'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.25_AM_bjx7jl')
	},
	{
		id: 3,
		name: 'कोमल वलेचा',
		quote: '“माझ्या नवऱ्याची पक्षाघाताची अवस्था त्यांच्या सेवेमुळे सुधारत आहे”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.22_AM_bgvhll'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.22_AM_bgvhll')
	},
	{
		id: 4,
		name: 'कोमल आहुजा',
		quote: '“माझ्या मावशीला येथे आल्यावर खूप छान वाटले”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.23_AM_2_qvisoh'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.23_AM_2_qvisoh')
	},

	{
		id: 5,
		name: '६२ वर्षांचे कमल अरणी — २ १/४ वर्षांपासून केंद्रात राहतात',
		quote: '“या केंद्रात वरिष्ठ नागरिकांना लागणाऱ्या सर्व गोष्टी उपलब्ध आहेत”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_1_sy0dyd'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_1_sy0dyd')
	},
	{
		id: 6,
		name: '६७ वर्षांचे शंकर आणि ६३ वर्षांची अंजू',
		quote: '“आरोग्याच्या तक्रारी कमी झाल्या, रोज उत्साही आणि ताजेतवाने वाटते”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_dbsgs5'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_dbsgs5')
	},
	{
		id: 7,
		name: 'शांताबाई वामन कपुर्टे — २ १/४ वर्षांपासून केंद्रात राहतात',
		quote: '“प्रत्येक छोट्या गोष्टीसाठी दररोज आधार मिळतो”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_3_sezqbq'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.26_AM_3_sezqbq')
	},
	{
		id: 8,
		name: '६४ वर्षांचे पंढम नागवंशी — १.५ वर्षांपासून येथे राहतात',
		quote: '“इथे राहून मला कुटुंबाचा भाग असल्यासारखे वाटते आणि त्याबद्दल मी अत्यंत कृतज्ञ आहे”',
		poster: posterUrl('WhatsApp_Video_2025-11-16_at_8.28.27_AM_m1bzzp'),
		video: videoUrl('WhatsApp_Video_2025-11-16_at_8.28.27_AM_m1bzzp')
	}
];

export default function TestimonialsGrid({ textContent }) {
	const [activeVideo, setActiveVideo] = useState(null);
	const locale = useLocale();
	const videos = locale === 'en' ? enVideos : mrVideos;

	return (
		<Section>
			<H3>{textContent.heading}</H3>
			<Sub>{textContent.subHeading}</Sub>

			<Grid>
				{videos.map((v) => (
					<Card key={v.id}>
						<VideoThumbWrapper>
							<Thumbnail src={v.poster} alt={v.name} />

							<PlayButton onClick={() => setActiveVideo(v.video)}>
								<PlayIcon />
							</PlayButton>
						</VideoThumbWrapper>

						<CardContent>
							<Quote>{v.quote}</Quote>
							<Person>{v.name}</Person>
						</CardContent>
					</Card>
				))}
			</Grid>

			{/* Modal */}
			{activeVideo && (
				<ModalBackdrop onClick={() => setActiveVideo(null)}>
					<Modal onClick={(e) => e.stopPropagation()}>
						<CloseBtn onClick={() => setActiveVideo(null)}>×</CloseBtn>
						<ModalVideo>
							<video src={activeVideo} controls autoPlay playsInline />
						</ModalVideo>
					</Modal>
				</ModalBackdrop>
			)}
		</Section>
	);
}

// -----------------------------
// Styled Components
// -----------------------------

const Section = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`;

const Sub = styled.p`
	color: var(--gray-dark);
	margin-bottom: 32px;
`;

const Grid = styled.div`
	display: grid;
	gap: 26px;
	grid-template-columns: 1fr;

	${TABLET_MEDIA} {
		grid-template-columns: repeat(2, 1fr);
	}

	${LAPTOP_MEDIA} {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Card = styled.div`
	overflow: hidden;
	background: #fff;
	box-shadow: 0 6px 14px rgba(16, 59, 102, 0.08);
	transition: 0.2s ease;

	&:hover {
		transform: translateY(-4px);
	}
`;

const VideoThumbWrapper = styled.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%;
	background: #000;
`;

const Thumbnail = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const PlayButton = styled.button`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 64px;
	height: 64px;
	border-radius: 50%;
	border: none;
	cursor: pointer;

	background: rgba(255, 255, 255, 0.94);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);

	&:hover {
		transform: translate(-50%, -50%) scale(1.07);
	}
`;

const PlayIcon = styled.span`
	width: 0;
	height: 0;
	border-left: 20px solid var(--primary-dark);
	border-top: 12px solid transparent;
	border-bottom: 12px solid transparent;
	margin-left: 4px;
`;

const CardContent = styled.div`
	padding: 16px 20px;
`;

const Quote = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: var(--primary-dark);
`;

const Person = styled.p`
	margin-top: 8px;
	font-size: 14px;
	color: var(--gray-dark);
`;

// -----------------------------
// Modal
// -----------------------------

const ModalBackdrop = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.75);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
	z-index: 9990;
`;

const Modal = styled.div`
	width: 100%;
	max-width: 1000px;
	background: #000;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	z-index: 9991; /* above backdrop */
`;

const CloseBtn = styled.button`
	position: absolute;
	top: 12px;
	right: 16px;
	font-size: 38px;
	color: #fff;
	background: none;
	border: none;
	cursor: pointer;
	z-index: 9999; /* highest */
`;

const ModalVideo = styled.div`
	width: 100%;
	padding-top: 56.25%;
	position: relative;

	video {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
	}
`;
