"use client";

import { useState, useEffect } from "react";
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import { HomeNavBar } from "@/components/general/home/navBar";
import { AnimatedLineWithText } from "@/components/animations/svgCircleAnimation";
import { TypeWriterParagraph } from "@/components/acernityComponents/typeWrite";
import Link from "next/link";
import { motion } from "framer-motion";
import { a } from "framer-motion/client";

type FormData = {
  name: string;
  email: string;
  longAnswer: string;
  business: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  longAnswer?: string;
  business?: string;
};

function LoadingComponent() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <span className="loading loading-spinner loading-lg bg-white"></span>
    </div>
  );
}

export default function Form() {
  // check from the localstorage that if the user has already submitted the form, display for him check your email and a resubmit button
  // if not display the form

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    business: "",

    longAnswer: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    business: "",
    longAnswer: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("submitted");
    if (submitted) setSubmitted(true);
  }, []);

  function handleResubmit() {
    setSubmitted(false);
    localStorage.removeItem("submitted");
  }

  if (submitted) {
    return (
      <div className="flex flex-col justify-center items-center m-0 p-0 min-h-screen  box-border bg-[#111]">
        <BackgroundBlur />
        <HomeNavBar index={-1} />
        <div className="min-h-[10vh]"></div>

        <div className=" w-[100%] min-h-[70vh]">
          <div className="h-4"></div>
          <div className="flex flex-col items-center justify-center w-[100%] h-[80vh]">
            <div className=" flex items-center justify-center">
              <svg
                width="200px"
                height="200px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z"
                  stroke="#13ffaa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, pathOffset: 1 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 3, delay: -0.2 }}
                  // loop the animation
                />
              </svg>
            </div>
            <AnimatedLineWithText strokeColor="#13ffaa" width="150" delay={0.5}>
              <h1 className="text-[#13ffaa] text-4xl font-bold">
                Check your email
              </h1>
            </AnimatedLineWithText>
            <div className="flex items-center justify-center gap-7">
              <button
                onClick={() => handleResubmit()}
                className="text-error p-5"
              >
                Resubmit
              </button>
              <Link
                href="https://calendly.com/tailoredtechapp/30min"
                className="p-3 m-2 w-[50%] text-center h-[50px] bg-[#13ffaa] text-[#111827] border-[#13ffaa] border-2 rounded-md transition-colors duration-200 hover:bg-[#0fe1a5] flex items-center justify-center "
              >
                Book a free technical consultation now !
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Reset errors on change
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    console.log("Form DATA", formData);
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.longAnswer)
      newErrors.longAnswer = "Please answer the question.";
    if (!formData.business || formData.business === "Select your business type") newErrors.business = "Please select a business.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // send an http request to submit the form
      const url = "https://2kb3leke6vl6gxrfkfhnna5uh40djflo.lambda-url.eu-north-1.on.aws/"

      const data = {
        name: formData.name,
        email: formData.email,
        business: formData.business,
        answer: formData.longAnswer,
      }

      setLoading(true);

      // send post request and console log success or error
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            console.log("Form submitted successfully:", formData);
            setLoading(false);
            localStorage.setItem("submitted", "true");
            setSubmitted(true);
          } else {
            console.log("Form has errors:", errors);
            setLoading(false);
            return;
          }
        })
        .catch((err) => {
          console.error(err);
        });
      
    } else {
      console.log("Form has errors:", errors);
      return;
    }

    // send http request to submit the form
    // set the localstorage to submitted
    // localStorage.setItem("submitted", "true");
    // setSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 min-h-screen bg-[#111] box-border">
      <BackgroundBlur />
      <HomeNavBar index={3} />

      {loading && <LoadingComponent />}
      {/* small thin container with width 100% and height 10px and color is from [#13ffaa] to transparent. gradient from bottom to up */}

      <div className="w-[100%] min-h-[70vh]">
        <div className="h-[20vh]"/>
        <div className="flex flex-col items-center justify-center w-[100%] h-fit">
          <AnimatedLineWithText strokeColor="#13ffaa" width="150" delay={0.5}>
            <h1 className="text-[#13ffaa] text-4xl font-bold">Free Gift</h1>
          </AnimatedLineWithText>
          {/* <form className="flex flex-col items-center justify-center w-[100%] h-[80vh]"> */}
          <form className="flex flex-col items-center justify-center w-[100%] h-fit">
            <div className="flex flex-col items-start justify-center w-[90%] sm:w-[50%] m-4">
              <TypeWriterParagraph words={["Name"]} />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2  w-[90%] sm:w-[50%] bg-transparent text-[#13ffaa] border-[#13ffaa] border-b-2 focus:outline-none"
              />
            </div>
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <div className="flex flex-col items-start justify-center w-[90%] sm:w-[50%] m-4">
              <TypeWriterParagraph words={["Email"]} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2  w-[90%] sm:w-[50%] bg-transparent  text-[#13ffaa] border-[#13ffaa] border-b-2 focus:outline-none"
              />
            </div>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <div className="flex flex-col items-start justify-center w-[90%] sm:w-[50%] m-4">
              <TypeWriterParagraph words={["your business"]} />
              <select
                className="p-2 w-[90%] sm:w-[50%] bg-transparent text-[#13ffaa] border-[#13ffaa] border-b-2 focus:outline-none appearance-none"
                name="business"
                value={formData.business}
                onChange={handleChange}
              >
                <option
                  value="Select your business type"
                  className="bg-[#111] text-white"
                >
                  Select your business type
                </option>
                <option value="Retail" className="bg-[#111] text-white">
                  Retail
                </option>
                <option value="E-commerce" className="bg-[#111] text-white">
                  E-commerce
                </option>
                <option value="Manufacturing" className="bg-[#111] text-white">
                  Manufacturing
                </option>
                <option value="Consulting" className="bg-[#111] text-white">
                  Consulting
                </option>
                <option value="Healthcare" className="bg-[#111] text-white">
                  Healthcare
                </option>
                <option value="Finance" className="bg-[#111] text-white">
                  Finance
                </option>
                <option value="Real Estate" className="bg-[#111] text-white">
                  Real Estate
                </option>
                <option value="Education" className="bg-[#111] text-white">
                  Education
                </option>
                <option value="Transportation" className="bg-[#111] text-white">
                  Transportation
                </option>
                <option value="Hospitality" className="bg-[#111] text-white">
                  Hospitality
                </option>
                <option value="Other" className="bg-[#111] text-white">
                  Other
                </option>
              </select>
            </div>
            {errors.business && <p className="text-red-500">{errors.business}</p>}
            <div className="flex flex-col items-center justify-center w-[90%] sm:w-[50%] m-4">
              {/* <p className='text-black self-start font-semibold bg-[#13ffaa] p-1'>Describe the most time consuming task in your business</p> */}
              <TypeWriterParagraph
                words={[
                  "Describe the most time consuming task in your business",
                ]}
              />
              <textarea
                name="longAnswer"
                placeholder="Most Time Consuming Task is..."
                value={formData.longAnswer}
                onChange={handleChange}
                className="p-2 m-0 w-[100%] h-[20vh] bg-transparent text-[#13ffaa] border-[#13ffaa] border-2 rounded-lg max-h-[30vh] min-h-[25vh] focus:outline-none"
              />
            </div>
            {errors.longAnswer && (
              <p className="text-red-500">{errors.longAnswer}</p>
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              className="p-2 m-2 w-[50%] bg-[#13ffaa] text-[#111827] border-[#13ffaa] border-2"
            >
              Submit
            </button>
            <div className="h-[5vh]" />
          </form>
        </div>
      </div>
    </div>
  );
}
