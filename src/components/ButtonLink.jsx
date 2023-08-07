import { Link } from 'react-router-dom';

export default function ButtonLink({ to, text }) {
  return <Link to={to}><button>{text}</button></Link>;
}


