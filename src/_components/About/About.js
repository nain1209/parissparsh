'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useLocale } from 'next-intl';

import H2 from '@/_components/UI/HeadingH2';
import Rectangle from '@/_components/UI/Rectangle';
import Quote from '@/_components/UI/Quote';
import H3 from '@/_components/UI/HeadingH3';
import { Link } from '@/navigation';

import SantGadgeMaharajPhoto from '../../_assets/SantGadgeMaharaj.png';
/* import SantGadgeMaharajPhoto from '../../_assets/sant-gadge-maharaj.png'; */
import TeamMember1 from '../../_assets/TeamMember1.png';
import TeamMember2 from '../../_assets/TeamMember2.png';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const About = ({ textContent }) => {
	const locale = useLocale();
	const teamMembers = [
		{
			image: TeamMember1,
			name: textContent.team.members[0].name,
			designation: textContent.team.members[0].designation
		},
		{
			image: TeamMember2,
			name: textContent.team.members[1].name,
			designation: textContent.team.members[1].designation
		}
	];

	return (
		<Wrapper>
			<H2>{textContent.heading}</H2>
			<H3>{textContent.subHeading}</H3>
			<ImageWrapper>
				<Image
					src={SantGadgeMaharajPhoto}
					alt='Photo of Sant Gadge Maharaj'
					fill={true}
					style={{ objectFit: 'cover', objectPosition: 'left top' }}
				/>
				<Rectangle $options={['left', 'bottom']}></Rectangle>
			</ImageWrapper>
			<ContentWrapper>
				<Text locale={locale}>{textContent.para1}</Text>
				<Quote quote={textContent.quote} author={textContent.author} />
				<Text locale={locale}>{textContent.para2}</Text>
				<br />
				<Text locale={locale}>{textContent.para3}</Text>
				<br />
				<Text locale={locale}>{textContent.para4}</Text>
				<br />
				<Text locale={locale}>{textContent.para5}</Text>
				<br />
				<Text locale={locale}>{textContent.para6}</Text>
				<br />
				<Text locale={locale}>{textContent.para7}</Text>
				<br />
				{locale === 'en' ? (
					<Text>
						To donate <Link href={'/donate'}>click here</Link>.
					</Text>
				) : (
					<Text>
						दान करण्यासाठी <Link href={'/donate'}>इथे क्लिक करा</Link>.
					</Text>
				)}
			</ContentWrapper>
			<Team>
				<H3>{textContent.team.heading}</H3>
				<TeamMembersList>
					{teamMembers.map((teamMember) => {
						return (
							<TeamMember key={teamMember.name}>
								<TeamMemberImageWrapper>
									<Image
										src={teamMember.image}
										alt='Photo of team member'
										fill={true}
										style={{ objectFit: 'cover', objectPosition: 'left top' }}
									/>
								</TeamMemberImageWrapper>
								<Name>{teamMember.name}</Name>
								<Designation>{teamMember.designation}</Designation>
							</TeamMember>
						);
					})}
				</TeamMembersList>
			</Team>
		</Wrapper>
	);
};

export default About;

const Wrapper = styled.main`
	padding-top: 40px;
	padding-left: 16px;
	padding-right: 16px;

	${DESKTOP_MEDIA} {
		padding-top: 70px;
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 362px;
	margin-top: 38px;

	${TABLET_MEDIA} {
		height: 440px;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
	${LAPTOP_MEDIA} {
		height: 500px;
		width: 40%;
		float: left;
		margin-right: 64px;
		margin-bottom: 70px;
	}

	${DESKTOP_MEDIA} {
		width: 35%;
	}
`;

const ContentWrapper = styled.section`
	padding-top: 50px;
`;

const Text = styled.p`
	font-size: ${(props) => (props.locale === 'en' ? 'calc(17 / 16 * 1rem)' : 'calc(21 / 16 * 1rem)')};
	line-height: ${(props) => (props.locale === 'en' ? '1.41' : '1.65')};

	${LAPTOP_MEDIA} {
		font-size: ${(props) => (props.locale === 'en' ? 'calc(17 / 16 * 1rem)' : 'calc(19 / 16 * 1rem)')};
		line-height: ${(props) => (props.locale === 'en' ? '1.41' : '1.5')};
	}
`;
const Team = styled.section`
	padding-top: 88px;
`;

const TeamMembersList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px 0;
	list-style-type: none;
	margin-top: 48px;

	${TABLET_MEDIA} {
		flex-direction: row;
		gap: 0 30px;
	}

	${DESKTOP_MEDIA} {
		gap: 0 64px;
	}
`;

const TeamMember = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Name = styled.p`
	color: var(--primary-darker);
	font-family: var(--font-satoshi);
	font-weight: 700;
	line-height: 1.41;
	margin-top: 16px;
`;

const TeamMemberImageWrapper = styled.div`
	width: 209px;
	height: 192px;
	position: relative;
`;

const Designation = styled.p`
	color: var(--gray-dark);
	font-family: var(--font-heading);
	font-size: calc(16 / 16 * 1rem);
	font-style: italic;
	font-weight: 500;
	line-height: 1.41;
`;
