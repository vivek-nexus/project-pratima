import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href={`${process.env.LINK_PREFIX}/favicon.png`} />
          <meta name="description" content="An icon library for all financial institutions in India — brought to you by PCI" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://paymentscouncil.in/project-pratima/" />
          <meta property="og:title" content="Project Pratima" />
          <meta property="og:description" content="An icon library for all financial institutions in India — brought to you by PCI" />
          <meta property="og:image" content="https://vivek-nexus.github.io/project-pratima/og-image.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
