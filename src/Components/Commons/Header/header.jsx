import style from './header.module.css'

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.navContainer}>
        <h1 className={style.title}>Front 기술 실험실</h1>
      </div>
    </div>
  )
}
