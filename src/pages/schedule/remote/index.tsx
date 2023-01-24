import Landing from '../../../components/Landing';
import type { NextPage } from 'next';
import Contract from '../../../components/Contact/index';

function RemoteSchedulePage() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    console.log('submitting form');
    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    <>
      <div>
        <div className="relative mx-auto  w-5/6 lg:max-w-7xl">
          <Landing frontPage={true} />
        </div>
        <div>
          <Contract />
        </div>
      </div>
    </>
  );
}

export default RemoteSchedulePage;
