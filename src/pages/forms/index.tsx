import Landing from '../../components/Landing';
import Intake from '../../components/Cards/intake';
import WarningRemote from '../../components/Cards/warning';
import type { NextPage } from 'next';

function ContactPage (){
  return (
    <>
      <div className="relative mx-auto mb-10  w-5/6 lg:max-w-7xl">
        <div className="mb-10">
          <Landing frontPage={false} />
        </div>
        <div className="mx-auto mb-10 justify-center flex p-10">
          <WarningRemote />
        </div>
        <div className="mx-auto mb-10 justify-center flex p-10">
          <Intake />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
