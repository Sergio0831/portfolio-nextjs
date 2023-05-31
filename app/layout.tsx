import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import './styles/globals.scss';
import localFont from 'next/font/local';

const greatVibes = localFont({
	src: '../public/font/GreatVibes-Regular.woff2',
	display: 'swap',
	variable: '--font-family-logo',
});

const roboto = localFont({
	variable: '--font-family-secondary',
	src: [
		{
			path: '../public/font/Roboto-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/font/Roboto-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
	],
});

const montserrat = localFont({
	variable: '--font-family-primary',
	src: [
		{
			path: '../public/font/Montserrat-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${greatVibes.variable} ${roboto.variable} ${montserrat.variable}`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
