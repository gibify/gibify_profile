import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class document extends Document {
    render() {
        return (
            <Html>
                <Head>
                <meta name="author" content="Evandro Gibicoski"/>
                <meta name="generator" content="Next.js"/>
                <meta 
                name="keywords" 
                content="gibify, Evandro Gibicoski, Font End Developer, Frontend, Typescript, React, JavaScript, Next, CSS3, HTML5, remote, programador, gibifyofficial"
                />
                <meta name="description" content="Evandro Gibicoski, Evandro, gibifyofficial"/>
            
                <meta name="viewport" content="width=device-width, initial-scale"/>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}