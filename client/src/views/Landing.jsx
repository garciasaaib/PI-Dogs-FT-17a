import { Link } from 'react-router-dom'
const Landing = () => {
  return <div>
    <img src="https://i.imgur.com/eSr9MvE.jpeg" alt="Landing dog app" />
    <div>
      <h1>hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo ex ipsa enim sed iure, explicabo perferendis cupiditate numquam laudantium sapiente delectus animi quas accusamus qui facere ipsam, voluptate sit!</p>
      <Link to="/home">Go To App</Link>
    </div>
  </div>;
};

export default Landing;
