import Link from 'next/link'
import Image from 'next/image'
import styles from 'pages/index.module.scss'
import Parser from "rss-parser";
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; 

import { Layout } from 'components/Layout/Layout'
import {SectionTitle} from 'components/Layout/SectionTitle'

import { Button } from 'components/Ui/Button'
import { Feed } from 'types/feed';




type Props ={
  zennPosts:Array<Feed>;
}

dayjs.locale('ja');
export default function Home({zennPosts}:Props) {


  
  return (

    <Layout>
      <Button>
        もっと知る！
      </Button>
        <SectionTitle>
          OutPuts
        </SectionTitle>

        <ul className={styles.articleList}>
          {zennPosts.map((post)=>(
          <li key={post.id} className={styles.articleItem}>
              <Link href={post.link}>
              <Image
                src={post.enclosure?.url}
                sizes="100vw"
                width={313}
                height={176}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                alt="記事のアイキャッチ画像"
                className={styles.thumbnail}

              />
              <div className={styles.postDetail}>
                <p className={styles.postTitle}>{post.title}</p>
                <p className={styles.postDate}>{post.pubDate}</p>
              </div>
              </Link>
             </li>


          ))}
        </ul>
    
      </Layout>

  )
}
export const getStaticProps = async () => {


  const parser = new Parser();
  const feedZenn = await parser.parseURL('https://zenn.dev/haruka_o/feed');
  const formattedZennPosts = feedZenn.items.map((post)=>{
    const formatDate = dayjs(post.pubDate).format('YYYY-MM-DD');
    return {...post,pubDate:formatDate}
  })
  
  return {
    props: {
      zennPosts:formattedZennPosts,
    },
  };
};

