
import Landing from "../components/Landing";
import Services from "../components/Services";
import { ScheduleCard } from "../components/Schedule";
import type { NextPage } from 'next';


function HomePage (){

  return (
    <div>
      <div className="relative mx-auto  w-5/6 lg:max-w-7xl">
      <Landing  frontPage={true}/>
      <Services/>
      <ScheduleCard/>
      </div>
    </div>
  );
}

export default HomePage;
