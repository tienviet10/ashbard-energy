import React from "react";

export default function MapAndSendUsRow() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "75b3b646-cbae-4c5a-ab3a-c3da14fecca5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="mx-8 flex items-center justify-center">
        <img
          src="/img/map.png"
          alt="Contact Us"
          className="h-auto w-full max-w-[400px] rounded-lg"
        />
      </div>
      <div className="mx-8 rounded-lg bg-white p-8">
        <Typography variant="h4" className="mb-6 text-center text-gray-800">
          Send Us Message
        </Typography>
        <form onSubmit={onSubmit}>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
          </div>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
            />
          </div>
          <div className="text-center">
            <Button
              className="w-full max-w-[200px] rounded-full bg-orange-700 hover:bg-orange-800"
              ripple="light"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-gray-700">
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}
