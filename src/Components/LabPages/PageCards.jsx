import { useNavigate } from 'react-router'
import style from './PageCards.module.css'

export default function PageCard({ id, name, description, keyword }) {
  const navigate = useNavigate();
  return (
    <div key={id} className={style.cardContainer} onClick={() => { navigate(`/${id}`) }}>
      <p className={style.cardName}>{name}</p>
      <p className={style.cardDescription}>{description}</p>
      <p className={style.cardKeyword}>{keyword}</p>
    </div>
  )
}
