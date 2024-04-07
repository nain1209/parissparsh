'use client';

import styled from 'styled-components';
import Image from 'next/image';

import H3 from '@/_components/UI/HeadingH3';
import ChevronDown from '../../_assets/chevron-down.svg';

import { DESKTOP_MEDIA, LAPTOP_MEDIA } from '@/lib/utils';

const InfoSection = ({ textContent }) => {
	return (
		<>
			<Info>
				<p>
					{textContent.infoBox.text} <ContactNumber> {textContent.infoBox.phone.num1}</ContactNumber>{' '}
					<ContactNumber> {textContent.infoBox.phone.num2}</ContactNumber>
				</p>
			</Info>
			<section>
				<H3>{textContent.faqs.heading}</H3>
				<Details>
					<Summary>
						<Question>
							{textContent.faqs.questions.taxBenefits.label}
							<Image src={ChevronDown} alt='Chevron' />
						</Question>
					</Summary>
					<Answer>{textContent.faqs.questions.taxBenefits.value}</Answer>
				</Details>
				<Details>
					<Summary>
						<Question>
							{textContent.faqs.questions.whyDonate.label}
							<Image src={ChevronDown} alt='Chevron' />
						</Question>
					</Summary>
					<Answer>{textContent.faqs.questions.whyDonate.value}</Answer>
				</Details>
				<Details>
					<Summary>
						<Question>
							{textContent.faqs.questions.whoBenefits.label}
							<Image src={ChevronDown} alt='Chevron' />
						</Question>
					</Summary>
					<Answer>{textContent.faqs.questions.whoBenefits.value}</Answer>
				</Details>
			</section>
		</>
	);
};

export default InfoSection;

const Info = styled.section`
	background: var(--primary-lighter);
	padding-top: 30px;
	padding-bottom: 30px;
	padding-left: 13px;
	border: 1px solid hsl(309deg 7% 21% / 0.38);

	& p {
		margin-bottom: 12px;
	}

	${LAPTOP_MEDIA} {
		padding-top: 30px;
		padding-bottom: 13px;
		padding-left: 26px;
		padding-right: 26px;
	}

	${DESKTOP_MEDIA} {
		& p {
			text-align: center;
		}
	}
`;

const ContactNumber = styled.em`
	color: var(--black);
	font-family: var(--font-satoshi);
	font-size: calc(20 / 16 * 1rem);
	font-weight: 500;
	line-height: 1.41;
	font-style: normal;
	display: block;
	margin-top: 8px;
	margin-bottom: 8px;

	${LAPTOP_MEDIA} {
		display: inline-block;
		margin-right: 8px;
	}

	${DESKTOP_MEDIA} {
		margin-left: 8px;
	}
`;

const Details = styled.details`
	padding-top: 30px;
	padding-bottom: 30px;
	border-bottom: 1px solid hsl(0deg 0% 0% / 0.1);

	&[open] {
		transition: all 0.5s ease;
		& img {
			transform: rotate(180deg);
		}
	}
`;

const Summary = styled.summary`
	color: var(--primary-darker);
	font-family: var(--font-heading);
	font-size: calc(24 / 16 * 1rem);
	font-weight: 600;
	line-height: 1.23;
	display: block;
	cursor: pointer;

	${DESKTOP_MEDIA} {
		font-size: calc(27 / 16 * 1rem);
	}
`;

const Question = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Answer = styled.p`
	padding-top: 20px;
	transition: height 0.4s ease;
`;
