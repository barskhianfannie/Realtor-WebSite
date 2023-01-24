import Image from 'next/image';

const Intake = () => {
  return (
    <a
      href="https://dtco.tiiny.site/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col p-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
    >
      <Image
        className="object-cover w-full ml-10 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={''}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          2022 Fillable Tax Intake Form
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Please make sure to provide a signed Tax Intake Form for your tax
          preparer during your appointment.
        </p>
      </div>
    </a>
  );
};
export default Intake;
