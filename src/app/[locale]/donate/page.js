import PaymentsSection from '@/_components/Donate/PaymentsSection';
import InfoSection from '@/_components/Donate/InfoSection';

import DonateWrapper from '@/_components/Donate/DonateWrapper';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export default async function Donate({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const dict = await getTranslations('donatePage');

	const payments = {
		offline: {
			heading: dict('offline.heading'),
			details: {
				bank: {
					label: dict('offline.details.bank.label'),
					value: dict('offline.details.bank.value')
				},
				beneficiary: {
					label: dict('offline.details.beneficiary.label'),
					value: dict('offline.details.beneficiary.value')
				},
				account: {
					label: dict('offline.details.account.label'),
					value: dict('offline.details.account.value')
				},
				ifsc: {
					label: dict('offline.details.ifsc.label'),
					value: dict('offline.details.ifsc.value')
				},
				branch: {
					label: dict('offline.details.branch.label'),
					value: dict('offline.details.branch.value')
				}
			}
		},
		upi: {
			qrcode: {
				heading: dict('upi.qrcode.heading'),
				subHeading: dict('upi.qrcode.subHeading')
			},
			separator: dict('upi.separator'),
			upiDetails: {
				heading: dict('upi.upiDetails.heading'),
				upiId: {
					label: dict('upi.upiDetails.upiId.label'),
					value: dict('upi.upiDetails.upiId.value')
				},
				name: {
					label: dict('upi.upiDetails.name.label'),
					value: dict('upi.upiDetails.name.value')
				}
			}
		}
	};

	const info = {
		infoBox: {
			text: dict('infoBox.text'),
			phone: {
				num1: dict('infoBox.phone.num1'),
				num2: dict('infoBox.phone.num2')
			}
		},
		faqs: {
			heading: dict('faqs.heading'),
			questions: {
				taxBenefits: {
					label: dict('faqs.questions.taxBenefits.label'),
					value: dict('faqs.questions.taxBenefits.value')
				},
				whyDonate: {
					label: dict('faqs.questions.whyDonate.label'),
					value: dict('faqs.questions.whyDonate.value')
				},
				whoBenefits: {
					label: dict('faqs.questions.whoBenefits.label'),
					value: dict('faqs.questions.whoBenefits.value')
				}
			}
		}
	};

	return (
		<DonateWrapper textContent={dict('heading')}>
			<PaymentsSection textContent={payments} />
			<InfoSection textContent={info} />
		</DonateWrapper>
	);
}
