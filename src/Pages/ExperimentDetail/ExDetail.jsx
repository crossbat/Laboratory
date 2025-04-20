import { useParams } from "react-router"
import components from "../PageIndex/PageIndex";

export default function ExDetail() {
  const { id } = useParams();
  console.log(id)
  const SelectedComponent = components[id?.toLowerCase()]
  return SelectedComponent ? (<SelectedComponent />) : (<div> 해당 컴포넌트가 없습니다. </div>)
}
