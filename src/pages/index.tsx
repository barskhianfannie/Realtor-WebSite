
import Landing from "../components/Landing";


function HomePage (){

  return (
    <div className="bg-white">
      <div className="relative mx-auto  w-5/6 lg:max-w-7xl">
      <Landing  frontPage={true}/>
      </div>
    </div>
  );
}

export default HomePage;
