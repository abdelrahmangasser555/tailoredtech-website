"use client";

import { useState, useEffect } from 'react';
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import { HomeNavBar } from "@/components/general/home/navBar";
import { AnimatedLineWithText } from "@/components/animations/svgCircleAnimation";
import { TypeWriterParagraph } from "@/components/acernityComponents/typeWrite";

type FormData = {
    name: string;
    email: string;
    longAnswer: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    longAnswer?: string;
};

export default function Form() {

    // check from the localstorage that if the user has already submitted the form, display for him check your email and a resubmit button
    // if not display the form
    
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        longAnswer: ''
    });

    const [errors, setErrors] = useState<FormErrors>({
        name: '',
        email: '',
        longAnswer: ''
    });

    useEffect(() => {
        const submitted = localStorage.getItem('submitted');
        if (submitted) setSubmitted(true);
    }, []);

    function handleResubmit() {
        setSubmitted(false);
        localStorage.removeItem('submitted');
    }

    if (submitted) {
        return (
            <div className="flex flex-col justify-center items-center m-0 p-0 min-h-screen bg-[#111] box-border">
                <BackgroundBlur />
                <HomeNavBar index={-1} />
                <div className='min-h-[10vh]'></div>
                <div className="w-[100%] h-[10px] bg-gradient-to-t from-[#13ffaa] to-transparent" />
                <div className="bg-[#111827] w-[100%] min-h-[70vh]">
                    <div className='h-4'></div>
                    <div className="flex flex-col items-center justify-center w-[100%] h-[80vh]">
                        <AnimatedLineWithText strokeColor="#13ffaa" width="150" delay={0.5}>
                            <h1 className="text-[#13ffaa] text-4xl font-bold">Check your email</h1>
                        </AnimatedLineWithText>
                        <button
                            onClick={() => handleResubmit()}
                            className="p-2 m-2 w-[50%] bg-[#13ffaa] text-[#111827] border-[#13ffaa] border-2"
                        >
                            Resubmit
                        </button>
                    </div>
                </div>
                <div className="w-[100%] h-[10px] bg-gradient-to-t from-[#13ffaa] to-transparent" />
                <div className="w-[100%] h-[10px] bg-gradient-to-t from-[#13ffaa] to-transparent" />
                <div className="w-[100%] h-[10px] bg-gradient-to-t from-[#13ffaa] to-transparent" />
            </div>
        );
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Reset errors on change
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address.';
        if (!formData.longAnswer) newErrors.longAnswer = 'Please answer the question.';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
        } else {
            console.log('Form has errors:', errors);
        }

        // send http request to submit the form
        // set the localstorage to submitted
        localStorage.setItem('submitted', 'true');
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col justify-center items-center m-0 p-0 min-h-screen bg-[#111] box-border">
            <BackgroundBlur />
            <HomeNavBar index={-1} />
            <div className='min-h-[10vh]'></div>
            {/* small thin container with width 100% and height 10px and color is from [#13ffaa] to transparent. gradient from bottom to up */}



            <div className="w-[100%] h-[10px] bg-gradient-to-t from-[#13ffaa] to-transparent" />
            <div className="bg-[#111827] w-[100%] min-h-[70vh]">
                <div className='h-4'></div>

                <div className="flex flex-col items-center justify-evenly w-[100%] h-[80vh]">
                    <AnimatedLineWithText strokeColor="#13ffaa" width="150" delay={0.5}>
                        <h1 className="text-[#13ffaa] text-4xl font-bold">Free Gift</h1>
                    </AnimatedLineWithText>
                    {/* <form className="flex flex-col items-center justify-center w-[100%] h-[80vh]"> */}
                    <form className="flex flex-col items-center justify-center w-[100%] h-fit">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 m-2 w-[90%] sm:w-[50%] bg-[#111827] text-[#13ffaa] border-[#13ffaa] border-2"
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 m-2 w-[90%] sm:w-[50%] bg-[#111827] text-[#13ffaa] border-[#13ffaa] border-2"
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        <div className='flex flex-col items-center justify-center w-[90%] sm:w-[50%] m-4'>
                            {/* <p className='text-black self-start font-semibold bg-[#13ffaa] p-1'>Describe the most time consuming task in your business</p> */}
                            <TypeWriterParagraph words={['Describe the most time consuming task in your business']} />
                            <textarea
                                name="longAnswer"
                                placeholder="Most Time Consuming Task is..."
                                value={formData.longAnswer}
                                onChange={handleChange}
                                className="p-2 m-0 w-[100%] h-[20vh] bg-[#111827] text-[#13ffaa] border-[#13ffaa] border-2"
                            />
                        </div>
                        {errors.longAnswer && <p className="text-red-500">{errors.longAnswer}</p>}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="p-2 m-2 w-[50%] bg-[#13ffaa] text-[#111827] border-[#13ffaa] border-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
            <div className="w-[100%] h-[10px] bg-gradient-to-t from-[#13ffaa] to-transparent" />
            <div className="w-[100%] h-[10px] bg-gradient-to-t from-[#13ffaa] to-transparent" />
            <div className="w-[100%] h-[10px] bg-gradient-to-t from-[#13ffaa] to-transparent" />

        </div>
    );
}
