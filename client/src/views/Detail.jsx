import { useParams } from 'react-router-dom'
import list from '../muck'


const Detail = () => {
  let { id } = useParams();
  if (!id) {
    return <div>Ningún dato</div>;
  } else 
}

export default Detail;