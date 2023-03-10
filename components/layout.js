import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Baka Mori";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.content}>
        <main>{children}</main>
        <div className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <div>
                <p>Привет, я&nbsp;Саша и&nbsp;я&nbsp;веб-программист.</p>
                <p>
                  Делаю как небольшие сайты типа этого блога, так и&nbsp;сложные
                  приложения уровня интернет-банка, торговой площадки или маркетплейса.
                </p>
                <p>
                  Изучаю дизайн и&nbsp;редактуру. Хочу создавать внешний вид
                  приложения самостоятельно, а&nbsp;не&nbsp;только переносить идеи
                  дизайнера в&nbsp;код.
                </p>
                <p>Выкладываю здесь работы, в&nbsp;которых сам придумывал дизайн. В процессе обучения дорабатываю дизайн старых работ.</p>
              </div>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
            </>
          )}
        </div>
      </div>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← На главную</Link>
        </div>
      )}
    </div>
  );
}
