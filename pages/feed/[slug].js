import Head from "next/head";
import {useRouter} from "next/router";
import styles from "../../styles/Feed.module.css"

const Feed = ({pageNumber, articles})=>{
  const router = useRouter()
    console.log(articles, pageNumber);
    return (
       <div className="page-container">
         <Head>
        <title>Ebuka News App</title>
        <meta name="description" content="Your number one site for the up to date news in Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <div className={styles.main}>
           {articles.map((article, index)=>(
               <div key={index} className={styles.post}>
                   <h1 onClick={()=>(window.location.href = article.url)}>{article.title}</h1>
                   {!!article.urlToImage && <img src={article.urlToImage} />}
                   <p>{article.description}</p>
                   <span className={styles.date}>{new Date().toDateString(article.publishedAt) }</span>
               </div>
           ))}
       </div>

       {/* ADDING PAGINATION TO OUR NEWS PAGE */}
       {/* PREVIOUS PAGE */}

       <div className={styles.paginator}>
         <div onClick={()=>{
           if (pageNumber > 1) {
             router.push(`/feed/${pageNumber - 1}`)
           }
         }} 
         className={pageNumber === 1 ? styles.disabled : styles.active}>
           Previous
         </div>
         {/* CURRENT PAGE */}
         <div>{pageNumber}</div>
         <div onClick={()=>{
           if (pageNumber < 5) {
             router.push(`/feed/${pageNumber + 1}`)
           }
         }} 
         className={pageNumber === 5 ? styles.disabled : styles.active}>
           Next
         </div>
       </div>
       </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;
  
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
      return {
        props: {
          articles: [],
          pageNumber: 1,
        },
      };
    }
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=ng&pageSize=5&page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
      )
    const apiJson = await apiResponse.json()
     const {articles} = apiJson
     return {
         props:{
             articles,
             pageNumber: Number.parseInt(pageNumber)
         }
     }
}

export default Feed