import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper"

type Card3Data = {
  answer3: string
  answer4: string
  answer5: string
}

type Card3Props = Card3Data & {
  updateFields: (fields: Partial<Card3Data>) => void

}

export function Card3({
  answer3,
  answer4,
  answer5,
  updateFields,
}: Card3Props) {
  return (
    <SignUpCarouselWrapper title="">
      <div className="text-left red-question mb-3">
        How are you Completing your Pre-Licensing Courses?
      </div>
      <div className="radio-container mb-3">
        <label className="radio-label">
          <input
            type="radio"
            name="preLicensingCourses"
            value="Online"
            onChange={(e) => updateFields({ answer3: e.target.value })}
            required
          />
          Online
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="preLicensingCourses"
            value="In person or Classroom setting"
            onChange={(e) => updateFields({ answer3: e.target.value })}
          />
          In person or Classroom setting
        </label>
      </div>
      <div className="text-left red-question mb-3">
        When are you Scheduled to take the State Exam?
      </div>
      <div className="radio-container mb-3">
        <label className="radio-label">
          <input
            type="radio"
            name="stateExamDate"
            value="Within 30 days"
            onChange={(e) => updateFields({ answer4: e.target.value })}
            required
          />
          Within 30 days
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="stateExamDate"
            value="Within 60 days"
            onChange={(e) => updateFields({ answer4: e.target.value })}
          />
          Within 60 days
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="stateExamDate"
            value="I haven't scheduled my test date yet"
            onChange={(e) => updateFields({ answer4: e.target.value })}
          />
          I haven't scheduled my test date yet
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="stateExamDate"
            value="Not sure, I am still finishing my courses"
            onChange={(e) => updateFields({ answer4: e.target.value })}
          />
          Not sure, I am still finishing my courses
        </label>
      </div>
      <div className="text-left red-question mb-3">
        Do you need a copy of a Sponsoring Broker form before you take the State Exam?
      </div>
      <div className="radio-container">
        <label className="radio-label">
          <input
            type="radio"
            name="sponsoringBrokerForm"
            value="Yes, I want my license to become Active after I pass the state exam"
            onChange={(e) => updateFields({ answer5: e.target.value })}
            required
          />
          Yes, I want my license to become Active after I pass the state exam
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="sponsoringBrokerForm"
            value="No, I intend to place my license Inactive after I pass the state exam"
            onChange={(e) => updateFields({ answer5: e.target.value })}
          />
          No, I intend to place my license Inactive after I pass the state exam
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="sponsoringBrokerForm"
            value="Not sure yet"
            onChange={(e) => updateFields({ answer5: e.target.value })}
          />
          Not sure yet
        </label>
      </div>
    </SignUpCarouselWrapper>
  )
}