// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'
import Messenger from '@/components/FacebookMessenger'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG} className="test">
        <Head>
          <link rel="icon" href={'/favicon.' + BLOG.LANG + '.ico'} />
          {/* 谷歌字体镜像 */}
          <link
            href="https://fonts.loli.net/css2?family=Noto+Serif+SC&display=swap"
            rel="stylesheet"
          />
          <CommonScript />
        </Head>

        <body className={`${BLOG.FONT} bg-day dark:bg-night`}>
          <Main />
          <Messenger />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
