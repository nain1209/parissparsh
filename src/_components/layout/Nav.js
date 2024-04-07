'use client';

import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '../../navigation';

import Logo from '../../_assets/logo.svg';
import HamburgerMenuIcon from '../../_assets/mobile/menu.svg';
import CloseMenuIcon from '../../_assets/mobile/close.svg';
import HomeIcon from '../../_assets/mobile/home.svg';
import BookIcon from '../../_assets/mobile/book-open.svg';
import ContactIcon from '../../_assets/mobile/mail.svg';
import FacilitiesIcon from '../../_assets/mobile/feather.svg';

import Line from '../UI/Line';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Nav = ({ menu, logoText }) => {
	const router = useRouter();
	const pathname = usePathname();
	const [_, setIsMenuOpen] = useState(false);
	const [IsLanguageMenuOpen, setIsLanguageMenuOpen] = useState(true);
	const menuRef = useRef(false);
	const languageMenuRef = useRef(false);
	const locale = useLocale();

	const toggleClickHandler = () => {
		setIsMenuOpen((isMenuOpen) => {
			const newIsMenuOpen = !isMenuOpen;
			if (newIsMenuOpen && typeof window != 'undefined' && window.document) {
				document.body.style.overflow = 'hidden';
				menuRef.current.style.transform = 'translateX(0)';
			} else {
				document.body.style.overflow = 'unset';
				menuRef.current.style.transform = 'translateX(-100%)';
			}
			return newIsMenuOpen;
		});
	};

	const onDonateClickHandler = () => {
		router.push('/donate');
	};

	const closeLanguageMenu = () => {
		const newIsLanguageMenuOpen = !IsLanguageMenuOpen;
		setIsLanguageMenuOpen(newIsLanguageMenuOpen);
		if (languageMenuRef && languageMenuRef.current && languageMenuRef.current.style) {
			languageMenuRef.current.style.display = 'none';
		}
	};

	const navLinks = [
		{
			label: menu.home,
			href: `/`,
			src: HomeIcon
		},
		{
			label: menu.facilities,
			href: `/facilities`,
			src: FacilitiesIcon
		},
		{
			label: menu.about,
			href: `/about`,
			src: BookIcon
		},
		{
			label: menu.contact,
			href: `/contact`,
			src: ContactIcon
		}
	];

	useEffect(() => {
		// some browsers (like safari) may require a timeout to delay calling this
		// function after a page has loaded; otherwise, it may not update the position
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<LanguageSwitcher ref={languageMenuRef}>
				{locale === 'en' && (
					<Link locale='mr' href={pathname}>
						वेबसाइट मराठीत पहा
					</Link>
				)}
				{locale === 'mr' && (
					<Link locale='en' href={pathname}>
						View the website in English
					</Link>
				)}
				<CloseLanguageMenu src={CloseMenuIcon} alt='Close Menu' onClick={closeLanguageMenu} />
			</LanguageSwitcher>
			<Navigation>
				<HomeLink href={`/`}>
					<Image src={Logo} alt='Home Page' style={{ display: 'inline-block' }} />
					<Name locale={locale}>
						{logoText.part1}
						<br /> {logoText.part2} <br /> {logoText.part3} <br />
						{logoText.registrationNumber}
					</Name>
				</HomeLink>
				<Line></Line>
				<HamburgerMenu ref={menuRef} IsLanguageMenuOpen={IsLanguageMenuOpen}>
					<CloseMenu src={CloseMenuIcon} alt='Close menu' onClick={toggleClickHandler} />
					<ul>
						{navLinks.map((navLink) => {
							const label = navLink.label;
							return (
								<MobileLinkWrapper key={label} $isActivePath={pathname === navLink.href}>
									<Image src={navLink.src} alt={`Go To - ${label} Page`} />
									<Link href={`${navLink.href}`} onClick={toggleClickHandler}>
										{label}
									</Link>
								</MobileLinkWrapper>
							);
						})}
					</ul>
				</HamburgerMenu>
				<Controls>
					<Image src={HamburgerMenuIcon} alt='Open menu' onClick={toggleClickHandler} />
					<DonateButton onClick={onDonateClickHandler}>{menu.donate}</DonateButton>
				</Controls>
				<DesktopMenu>
					<ul>
						{navLinks.map((navLink) => {
							const label = navLink.label;
							return (
								<DesktopLinkWrapper key={label} $isActivePath={pathname === navLink.href}>
									<Link href={`${navLink.href}`}>{label}</Link>
								</DesktopLinkWrapper>
							);
						})}
						<DonateButton onClick={onDonateClickHandler}>{menu.donate}</DonateButton>
					</ul>
				</DesktopMenu>
			</Navigation>
		</>
	);
};

const LanguageSwitcher = styled.div`
	background-color: var(--primary-lighter);
	padding-top: 2px;
	padding-bottom: 2px;
	margin-left: -16px;
	margin-right: -16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0 4px;
	padding-left: 12px;

	${TABLET_MEDIA} {
		margin-left: -32px;
		margin-right: -32px;
		justify-content: flex-end;
		padding-left: revert;
	}

	${LAPTOP_MEDIA} {
		margin-left: -48px;
		margin-right: -48px;
	}
`;

const CloseLanguageMenu = styled(Image)`
	filter: invert(100%);
	transform: scale(0.5);
	cursor: pointer;
`;

const Navigation = styled.nav`
	display: flex;
	flex-direction: column;

	${LAPTOP_MEDIA} {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

const HomeLink = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 0 14px;
	height: 100px;
	align-self: center;

	${LAPTOP_MEDIA} {
		position: relative;
		z-index: 1;

		&:hover {
			color: var(--primary);
		}
	}
`;

const Name = styled.h1`
	color: var(--black);
	font-family: var(--font-heading);
	font-size: ${(props) => (props.locale === 'en' ? 'calc(15 / 16 * 1rem)' : 'calc(13 / 16 * 1rem)')};
	font-weight: 700;
	line-height: ${(props) => (props.locale === 'en' ? '1.1' : '1.4')};
	letter-spacing: -0.15px;
`;

const HamburgerMenu = styled.nav`
	position: fixed;
	left: 0;
	top: ${(props) => (props.IsLanguageMenuOpen ? '142px' : '100px')};
	height: 100%;
	width: 60%;
	margin-left: -16px;
	z-index: 10;
	background: var(--primary);
	transform: translateX(-100%);
	transition: all 0.5s ease;

	ul {
		height: 100%;
		padding-top: 70px;
		list-style-type: none;

		& li {
			display: flex;
			gap: 0 16px;
			align-items: self-end;
			padding-top: 40px;
			padding-bottom: 40px;
			padding-left: 40px;
			border-bottom: 1px solid hsla(0deg 0% 97% / 0.2);
		}
	}

	a {
		color: var(--pure-white);
		font-family: var(--font-accent);
		font-size: calc(16 / 16 * 1rem);
		font-weight: 400;
		line-height: 1.41;
		letter-spacing: 2px;
		text-decoration: none;
		text-transform: uppercase;
	}

	${LAPTOP_MEDIA} {
		display: none;
	}
`;

const MobileLinkWrapper = styled.li`
	background-color: ${(props) => (props.$isActivePath ? 'var(--primary-lighter)' : 'var(--primary)')};
	& a {
		color: ${(props) => (props.$isActivePath ? 'var(--primary)' : 'var(--pure-white)')};
	}

	& img {
		filter: ${(props) =>
			props.$isActivePath
				? `brightness(0) saturate(100%) invert(13%) sepia(43%) saturate(4310%) hue-rotate(289deg) brightness(102%) contrast(110%)`
				: 'brightness(100%) saturate(0)'};
	}
`;

const DesktopMenu = styled.nav`
	display: none;

	${LAPTOP_MEDIA} {
		display: revert;

		& ul {
			list-style-type: none;
			display: flex;
			align-items: center;
			gap: 0 30px;
		}

		& a {
			color: var(--black);
			font-family: var(--font-accent);
			font-size: calc(14 / 16 * 1rem);
			font-weight: 500;
			line-height: 1.41;
			letter-spacing: 0.91px;
			text-decoration: none;
			cursor: pointer;
			text-transform: uppercase;
			position: relative;
			z-index: 1;

			&:hover {
				color: var(--primary);
				border-bottom: 2px solid;
			}
		}
	}

	${DESKTOP_MEDIA} {
		font-size: calc(15 / 16 * 1rem);
		& ul {
			gap: 0 48px;
		}
	}
`;

const CloseMenu = styled(Image)`
	position: absolute;
	top: 16px;
	right: 16px;
`;

const Controls = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: var(--gray-light);
	padding: 24px;
	margin-right: -16px;
	margin-left: -16px;

	${TABLET_MEDIA} {
		margin-right: -32px;
		margin-left: -32px;
	}

	${LAPTOP_MEDIA} {
		display: none;
	}
`;

const DesktopLinkWrapper = styled.li`
	& a {
		color: ${(props) => (props.$isActivePath ? 'var(--primary)' : 'var(--black)')};
		border-bottom: ${(props) => (props.$isActivePath ? '2px solid' : 'none')};
	}
`;

const DonateButton = styled.button`
	padding: 12px 25px;
	background-color: var(--accent);
	color: var(--pure-white);
	font-family: var(--font-accent);
	font-size: calc(16 / 16 * 1rem);
	font-weight: 500;
	text-transform: uppercase;
	border: none;
	letter-spacing: 1px;
	cursor: pointer;

	${LAPTOP_MEDIA} {
		position: relative;
		z-index: 1;
	}

	&:hover {
		color: var(--accent);
		background-color: var(--pure-white);
		outline: 1px solid var(--accent);
		transition: all 0.2s ease;
	}
`;

export default Nav;
