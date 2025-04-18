import Header from './Components/Commons/Header/header'
import style from './App.module.css'
import pages from './Pages/pageInfo.json'
import PageCard from './Components/LabPages/PageCards'

function App() {
  return (
    <div>
      <Header />
      <div className={style.subTitle}>
        <h1>실험 페이지</h1>
      </div>
      <div className={style.appContainer}>
        <div className={style.gridContainer}>
          {pages.map((page) => (
            <PageCard id={page.id} name={page.name} description={page.description} keyword={page.keyword} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
