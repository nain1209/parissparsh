import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import About from '@/_components/About/About';

export default async function AboutPage() {
	const dict = await getTranslations('aboutPage');

	const content = {
		heading: dict('heading'),
		subHeading: dict('subHeading'),
		para1: dict.rich('para1', {
			strong: (chunks) => <strong>{chunks}</strong>
		}),
		para2: dict.rich('para2', {
			strong: (chunks) => <strong>{chunks}</strong>
		}),
		para3: dict.rich('para3', {
			strong: (chunks) => <strong>{chunks}</strong>
		}),
		para4: dict.rich('para4', {
			strong: (chunks) => <strong>{chunks}</strong>
		}),
		para5: dict.rich('para5', {
			strong: (chunks) => <strong>{chunks}</strong>
		}),
		para6: dict.rich('para6', {
			strong: (chunks) => <strong>{chunks}</strong>
		}),
		para7: dict.rich('para7', {
			strong: (chunks) => <strong>{chunks}</strong>
		}),
		quote: dict.rich('quote', {
			br: () => <br />
		}),
		author: dict('author'),
		team: {
			heading: dict('team.heading'),
			members: [
				{
					name: dict('team.member1.name'),
					designation: dict('team.member1.designation')
				},
				{
					name: dict('team.member2.name'),
					designation: dict('team.member2.designation')
				}
			]
		}
	};

	return <About textContent={content} />;
}
