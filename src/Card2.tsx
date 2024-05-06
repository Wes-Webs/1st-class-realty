import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper"

type Card2Data = {
  answer2: string
}

type Card2Props = Card2Data & {
  updateFields: (fields: Partial<Card2Data>) => void
}

export function Card2({
  answer2,
  updateFields,
}: Card2Props) {
  return (
    <SignUpCarouselWrapper  title='Steps to Begin a Career in Real Estate as a "License Real Estate Agent"'>
      <div className="text-center black-description mb-3 px-3">
        Being a real estate agent is a rewarding career in a lot of ways, and it means that you can control your schedule and your income. The process to obtain a real estate license has never been easier.
      </div>
      <div className="text-left mb-3 px-3">
        First you need to complete all the state required Pre-Licensing Courses then pass the final state exam. All this can be completed in as little as 2 weeks and costs around $250 for the pre licensing courses and $175 for State Exam.
      </div>
      <div className="text-left mb-3 px-3">
        <i>*To be officially hired, this position requires you to personally obtain a real estate license.*</i>
      </div>
      <div className="text-center red-question mb-3">
        Are you willing to pursue getting your real estate license?
      </div>
      <div className="radio-container">
        <label className="radio-label">
          <input type="radio" name="startClass" value="Yes, I am willing to pursue getting a real estate license" onChange={e => updateFields({ answer2: e.target.value })} required/>
          Yes, I am willing to pursue getting a real estate license
        </label>
        <label className="radio-label">
          <input type="radio" name="startClass" value="No, I do not have an interest in getting a real estate license" onChange={e => updateFields({ answer2: e.target.value })}/>
          No, I do not have an interest in getting a real estate license
        </label>
      </div>
    </SignUpCarouselWrapper>
  )
}