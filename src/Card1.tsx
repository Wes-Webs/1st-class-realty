import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper"

type Card1Data = {
  answer1: string
}

type Card1Props = Card1Data & {
  updateFields: (fields: Partial<Card1Data>) => void
}

export function Card1({
  answer1,
  updateFields,
}: Card1Props) {

  return (
    <SignUpCarouselWrapper title="ARE YOU READY TO TAKE YOUR CAREER TO THE NEXT LEVEL?">
      <div className="text-center black-description mb-3 px-3">
        Please answer a few questions about your interest in 1st Class Real Estate. This will help our hiring managers connect with you more quickly
      </div>
      <div className="text-center red-question mb-3">
        Where are you in your Job Search?
      </div>
      <div className="radio-container ">
        <label className="radio-label">
          <input type="radio" name="jobSearch" value="I want to Explore a Career in Real Estate" onChange={e => updateFields({ answer1: e.target.value })} required/>
          <span>I want to Explore a Career in Real Estate</span>
        </label>
        <label className="radio-label">
          <input type="radio" name="jobSearch" value="I am Enrolled in Real Estate School" onChange={e => updateFields({ answer1: e.target.value })}/>
          <span>I am Enrolled in Real Estate School</span>
        </label>
        <label className="radio-label">
          <input type="radio" name="jobSearch" value="I am waiting to take the Final State Exam" onChange={e => updateFields({ answer1: e.target.value })}/>
          <span>I am waiting to take the Final State Exam</span>
        </label>
        <label className="radio-label">
          <input type="radio" name="jobSearch" value="I am a Licensed Real Estate Agent" onChange={e => updateFields({ answer1: e.target.value })}/>
          <span>I am a Licensed Real Estate Agent</span>
        </label>
      </div>
    </SignUpCarouselWrapper>
  )
}