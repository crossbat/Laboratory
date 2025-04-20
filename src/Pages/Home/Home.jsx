import style from './Home.module.css'
import pages from '../PageIndex/pageInfo.json'
import PageCard from '../../Components/LabPages/PageCards'

export default function Home() {
  return (
    <>
      <div className={style.subTitle}>
        <h1>실험 페이지</h1>
      </div>
      <div className={style.appContainer}>
        <div className={style.gridContainer}>
          {pages.map((page) => (
            <PageCard key={page.id} id={page.id} name={page.name} description={page.description} keyword={page.keyword} />
          ))}
        </div>
      </div>
    </>
  )
}
