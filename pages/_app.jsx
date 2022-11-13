import Head from 'next/head'
import {Fragment} from 'react'
import '/public/css/globals.css'

export default function App({Component, pageProps}){
	return (
		<Fragment>
			<Head>
				<title>Whale Restaurant by Protea Kuramo Waters</title>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	)
}
