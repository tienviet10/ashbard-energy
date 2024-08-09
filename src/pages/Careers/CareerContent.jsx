import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";

const CareerContent = () => {
  const [experience, setExperience] = useState("");
  const [experience2, setExperience2] = useState("");
  const [question, setQuestion] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImageChange = (e, setImage) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="w-full rounded-lg">
      <form
        className="space-y-6"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="PLEASE_PASTE_YOUR_ACCESS_KEY_HERE"
        />
        <div className="space-y-2">
          <input
            type="text"
            name="fullName"
            className="h-[50px] w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Full Name"
            style={{ backgroundColor: "#D9D9D9" }}
          />
        </div>
        <div className="space-y-2">
          <input
            type="email"
            name="email"
            className="h-[50px] w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Email"
            style={{ backgroundColor: "#D9D9D9" }}
          />
        </div>
        <div className="space-y-2">
          <input
            type="tel"
            name="phone"
            className="h-[50px] w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Phone"
            style={{ backgroundColor: "#D9D9D9" }}
          />
        </div>
        <div className="space-y-2">
          <input
            type="text"
            name="qualification"
            className="h-[50px] w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Qualification"
            style={{ backgroundColor: "#D9D9D9" }}
          />
        </div>
        <div className="space-y-2">
          <textarea
            name="experience"
            className="h-[150px] w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            style={{ backgroundColor: "#D9D9D9" }}
            placeholder="Experience"
            maxLength="200"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          ></textarea>
          <div className="text-right text-gray-500">
            {experience.length}/200
          </div>
        </div>
        <div className="space-y-2">
          <input
            name="position"
            type="text"
            className="h-[50px] w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Position Apply For"
            style={{ backgroundColor: "#D9D9D9" }}
          />
        </div>
        <div className="space-y-2">
          <textarea
            name="experience2"
            className="h-[150px] w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            style={{ backgroundColor: "#D9D9D9" }}
            placeholder="Experience"
            maxLength="200"
            value={experience2}
            onChange={(e) => setExperience2(e.target.value)}
          ></textarea>
          <div className="text-right text-gray-500">
            {experience2.length}/200
          </div>
        </div>
        <div className="space-y-2">
          <textarea
            name="question"
            className="h-[150px] w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            style={{ backgroundColor: "#D9D9D9" }}
            placeholder="Questions"
            maxLength="200"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <div className="text-right text-gray-500">{question.length}/200</div>
        </div>
        <div className="space-y-2">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="upload1"
                className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-gray-300 p-4"
              >
                <span className="text-gray-500">Resume</span>
                <img src="/img/upload.svg" className="h-[80px]" />
                <input
                  type="file"
                  id="upload1"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, setImage1)}
                />
              </label>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="upload2"
                className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-gray-300 p-4"
              >
                <span className="text-gray-500">Cover Letter</span>
                <img src="/img/upload.svg" className="h-[80px]" />
                <input
                  type="file"
                  id="upload2"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, setImage2)}
                />
              </label>
            </div>
          </div>
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
    </div>
  );
};

export default CareerContent;
