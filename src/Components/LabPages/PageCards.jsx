import style from './PageCards.module.css'

export default function PageCard({ id, name, description, keyword }) {
  return (
    <div key={id} className={style.cardContainer}>
      <p className={style.cardName}>{name}</p>
      <p className={style.cardDescription}>{description}</p>
      <p className={style.cardKeyword}>{keyword}</p>
    </div>
  )
}
