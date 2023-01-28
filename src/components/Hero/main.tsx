import * as lahero from '../../public/losangeles.gif';
import Image from 'next/image';
const MainHero=()=>{
  return (
    <section className="bg-white dark:bg-gray-900">
              <div className="">
            <Image src={lahero} alt="losangeles" height={500} width={1500}/>
        </div>   
</section>
  )
};
export default MainHero;