
import { Layout } from 'components/Layout/Layout'
import styles from 'pages/about.module.scss'
import Link from 'next/link'
// import styles from 'components/Layout/header.module.scss'

export default function about() {
  return (
    <>


    <Layout>

<div className={styles.content}>
<div className={styles.contentParts}>
<h2 className={styles.aboutH2}>about me!</h2>
<p className={styles.text}>東京の会社でフロントエンドエンジニア(駆け出し)として働いています。<br></br>マークアップエンジニアからフロントエンドエンジニアになりました。<br></br>最近は<Link href='https://roadmap.sh/frontend' className={styles.aboutLink}>Step by step guide to becoming a modern frontend developer in 2023</Link>を元にインプットを進めています。</p>
 
</div>
<div className={styles.contentParts}>
    <h3 className={styles.contentTitle}>このサイトの目的</h3>
    <p className={styles.text}>運用を通して「Search Console」「Analytics」について学んだり、学習のアウトプットのために運用をしております。このサイトを通してお金稼ぎとかは一切考えておりません...</p>
  </div>
  <div className={styles.contentParts}>
    <h3 className={styles.contentTitle}>趣味</h3>
    <p className={styles.text}>ゲーム / 読書</p>
  </div>
  <div className={styles.contentParts}>
    <h3 className={styles.contentTitle}>ちょっとできる</h3>
    <p className={styles.text}>Html,Scss,Photoshop,Illustrator</p>
  </div>
  <div className={styles.contentParts}>
    <h3 className={styles.contentTitle}>ほんのちょっとできる</h3>
    <p className={styles.text}>Javascrip</p>
  </div>
  <div className={styles.contentParts}>
    <h3 className={styles.contentTitle}>触ったことある</h3>
    <p className={styles.text}>Next.js, React ,Typescript</p>
  </div>


</div>
</Layout>


    </>
  )
}