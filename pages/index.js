import Head from 'next/head';
import Sidebar from '../componnets/Sidebar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Whatsapp Clone by Vanshaj</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Sidebar />
		</div>
	);
}
