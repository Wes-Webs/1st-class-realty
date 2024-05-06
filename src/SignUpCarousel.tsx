import React from "react";
import { useState } from 'react'
import { FormEvent } from "react"
import { MultiStepForm } from "./MultiStepForm"
import Axios from 'axios';
import { Card1 } from "./Card1"
import { Card2 } from "./Card2"
import { Card3 } from "./Card3"
import { Card4 } from "./Card4"
import { Card5 } from "./Card5"
import { Card6 } from "./Card6"
import { Card7 } from "./Card7"
import { Card8 } from "./Card8"
import { CardStop } from "./CardStop"
import { CardError } from "./CardError"
import { CardSent } from "./CardSent"


type FormData = {
  answer1: string,
  answer2: string,
  answer3: string,
  answer4: string,
  answer5: string,
  answer6: string,
  answer7: string,
  answer8: string,
  answer9: string,
  answer10: string,
  answer11: string,
  answer12: string,
  fullName: string,
  email: string,
  phone: string,
  state: string,
  contactTime: string,
}

const INITIAL_DATA: FormData = {
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answer5: "",
  answer6: "",
  answer7: "",
  answer8: "",
  answer9: "",
  answer10: "",
  answer11: "",
  answer12: "",
  fullName: "",
  email: "",
  phone: "",
  state: "",
  contactTime: "",
}


function SignUpCarousel() {

    const [data, setData] = useState(INITIAL_DATA)
    const [emailSent, setEmailSent] = useState(false);

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
        return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, isFinishingStep, back, next, goTo } =
        MultiStepForm([
            <Card1 {...data} updateFields={updateFields} />,
            <Card2 {...data} updateFields={updateFields} />,
            <Card3 {...data} updateFields={updateFields} />,
            <Card4 {...data} updateFields={updateFields} />,
            <Card5 {...data} updateFields={updateFields} />,
            <Card6 {...data} updateFields={updateFields} />,
            <Card7 {...data} updateFields={updateFields} />,
            <Card8 {...data} updateFields={updateFields} />,
            <CardStop {...data} updateFields={updateFields} />,
            <CardSent {...data} updateFields={updateFields} />,
            <CardError {...data} updateFields={updateFields} />,
        ])

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if (isLastStep) {
            e.preventDefault();
            console.log(data);
            if (!emailSent) { // Check if email has not been sent yet
                Axios.post("http://localhost:5000/sign-up", {
                    data: data,
                }).then(() => {
                    console.log("Success");
                    setEmailSent(true); // Set emailSent to true after sending email
                    return goTo(9)
                }).catch(error => {
                    console.error("Error:", error);
                    return goTo(10)
                });
            }
        }
        else if (data.answer1 === 'I want to Explore a Career in Real Estate') {
            if (data.answer2 === 'Yes, I am willing to pursue getting a real estate license') {
                if (data.answer9.length && data.answer10.length) {
                    if (data.answer11 === 'No, I am not comfortable working on commission') {
                        return goTo(8)
                    }
                    else {
                        return next()
                    }
                }
                else {
                    return goTo(4)
                }
            }
            else if (data.answer2 === 'No, I do not have an interest in getting a real estate license') {
                return goTo(8)
            }
            else {
                return next();
            }
        }
        else if (data.answer1 === 'I am Enrolled in Real Estate School' || data.answer1 === 'I am waiting to take the Final State Exam') {
            if (data.answer3.length && data.answer4.length && data.answer5.length) {
                if (data.answer12.length) {
                    next()
                }
                else {
                    return goTo(6)
                }
            }
            else {
                return goTo(2)
            }
        }
        else if (data.answer1 === 'I am a Licensed Real Estate Agent') {
            if (data.answer6.length && data.answer7.length && data.answer8.length) {
                if (data.answer12.length) {
                    next()
                }
                else {
                    return goTo(6)
                }
            }
            else {
                return goTo(3)
            }
        }
        else {
            return goTo(8)
        }
    }

    return (
        <div
        style={{
            position: "relative",
            background: "white",
            border: "1px dashed #CDE0EC",
            padding: "2rem",
            margin: "1rem",
            borderRadius: ".5rem",
            maxWidth: "550px",
        }}
        >
            <form id="user-form" onSubmit={onSubmit}>
                <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
                    {/* {currentStepIndex + 1} / {steps.length} */}
                </div>
                {step}
                <div
                    style={{
                        marginTop: "1rem",
                        display: "flex",
                        gap: ".5rem",
                        justifyContent: "end",
                    }}
                    >
                    {/* {!isFirstStep && (
                        <button type="button" onClick={back}>
                        Back
                        </button>
                    )} */}
                    <button type="submit" className={`btn btn-secondary btn-sm py-0 ${isFinishingStep ? "d-none" : ""}`}>{isLastStep ? "Finish" : "Next"}</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpCarousel