import { Link } from "react-router-dom";


const Home = () => {

return(
  <div>
    
  <Link to="/login" className="flex p-5 hover:text-blue-700 font-semibold">Login</Link>
  <div className="font-semibold flex justify-center mt-5 bg-orange-200 p-10 text-3xl">
   
  <h1>Welcome Home</h1>

  </div>
  </div>
)
};

export default Home;
