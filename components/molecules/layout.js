import Head from "next/head"
import Image from 'next/image'
export const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/Footer-image.png" />
            </Head>
        </div>
    )
}
