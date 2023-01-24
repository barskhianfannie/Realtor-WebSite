import Image from 'next/image';

export const CardSection = () => {
  return (
  <>
  <div className="my-1 px-1 w-full mt-10 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <h2 className='text-2xl text-red-500 w-full flex mx-0 text-center mb-10'>Notice:<br></br> Remote Tax Return Steps & Guidelines coming soon!</h2>
          <article className="overflow-hidden rounded-lg shadow-lg">
            <button onClick={()=>{}}>
              <Image alt="Placeholder" className="block h-auto w-full" src={''} />
            </button>

            <header className="flex items-center justify-center leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline flex justify-center hover:underline text-black" href="#">Tax Intake Form
                <a
                  className="flex items-center justify-end text-red-600 hover:underline"
                  href="https://downeytaxcompanyform.tiiny.site"
                >
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a></a>
               
              </h1>
              <p className="text-grey-darker text-sm"></p>
            </header>
          </article>
          </div>
  

    
      

        {/* <div className="my-1 px-1  mt-10 h-1/2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article className="overflow-hidden rounded-lg shadow-lg w-3/4">
            <button onClick={()=>{}}>
              <Image alt="Placeholder" className="block " src={irs} />
            </button>

            <header className="flex items-center justify-center leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline flex justify-center hover:underline text-black" href="#">IRS Help Page
                <a
                  className="flex items-center justify-end text-blue-600 hover:underline"
                  href="https://irs.gov"
                >
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a></a>
               
              </h1>
              <p className="text-grey-darker text-sm"></p>
            </header>
          </article>
        </div> */}
    </>
  );
};
