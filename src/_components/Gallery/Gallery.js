'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Link } from '../../navigation';
import styled from 'styled-components';
import Modal from '../../_components/Gallery/Modal';
import { useLastViewedPhoto } from '../../lib/useLastViewedPhoto';

/* =========================
   Styled Components
   ========================= */

const Main = styled.main`
	max-width: 1960px;
	margin: 0 auto;
	padding: 1rem;
`;

const Columns = styled.div`
	column-gap: 1rem;
	columns: 1;

	@media (min-width: 640px) {
		columns: 2;
	}
	@media (min-width: 1280px) {
		columns: 3;
	}
	@media (min-width: 1536px) {
		columns: 4;
	}
`;

const PhotoLink = styled.a``;

const StyledImage = styled(Image)`
	transform: translate3d(0, 0, 0);
	border-radius: 0.5rem;
	filter: brightness(0.9);
	transition: filter 200ms ease, transform 200ms ease;
	display: block;

	${PhotoLink}:hover & {
		filter: brightness(1.1);
	}
`;

/* =========================
   Page Component
   ========================= */

export default function Gallery({ images }) {
	const searchParams = useSearchParams();
	const photoId = searchParams.get('photoId');

	const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
	const lastViewedPhotoRef = useRef(null);

	// 🔥 Fix hydration mismatch
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	/* Scroll back to the last viewed photo */
	useEffect(() => {
		if (lastViewedPhoto && !photoId && lastViewedPhotoRef.current) {
			try {
				lastViewedPhotoRef.current.scrollIntoView({ block: 'center' });
			} catch {}
			setLastViewedPhoto(null);
		}
	}, [photoId, lastViewedPhoto, setLastViewedPhoto]);

	return (
		<>
			<Main>
				{/* Modal opens ONLY if ?photoId= exists */}
				{mounted && photoId && <Modal images={images} onClose={() => setLastViewedPhoto(photoId)} />}

				<Columns>
					{images.map(({ id, public_id, format, blurDataUrl }) => (
						<Link
							key={id}
							href={{
								pathname: `/gallery`,
								query: { photoId: id }
							}}
							scroll={false}
							replace={false}
							legacyBehavior={true}
						>
							<a
								style={{
									display: 'block',
									position: 'relative',
									marginBottom: '1.25rem',
									width: '100%',
									cursor: 'zoom-in',
									borderRadius: '0.5rem',
									textDecoration: 'none',
									color: 'inherit'
								}}
								ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
							>
								<StyledImage
									alt='Photo'
									placeholder='blur'
									blurDataURL={blurDataUrl}
									src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
									width={720}
									height={480}
									sizes='(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw'
								/>
							</a>
						</Link>
					))}
				</Columns>
			</Main>
		</>
	);
}
