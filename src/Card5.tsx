import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper";

type Card5Data = {
  answer9: string;
  answer10: string;
};

type Card5Props = Card5Data & {
  updateFields: (fields: Partial<Card5Data>) => void;
};

export function Card5({
  answer9,
  answer10,
  updateFields,
}: Card5Props) {
  return (
    <SignUpCarouselWrapper title="">
      <div className="black-description mb-3">
        Our talent acquisition team helps individuals like you make the transition from a traditional job to a meaningful and rewarding career as a real estate professional.
      </div>
      <div className="text-left red-question mb-3">
        Are you planning to work full-time or part-time as a real estate professional?
      </div>
      <div className="radio-container mb-3">
        <label className="radio-label">
          <input
            type="radio"
            name="hoursWorking"
            value="I am willing and able to work full-time as a real estate professional."
            onChange={(e) => updateFields({ answer9: e.target.value })}
            required
          />
          <span className="radio-text">I am willing and able to work full-time as a real estate professional.</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="hoursWorking"
            value="I want to work full-time but would need to transition out of another career."
            onChange={(e) => updateFields({ answer9: e.target.value })}
          />
          <span className="radio-text">I want to work full-time but would need to transition out of another career.</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="hoursWorking"
            value="I am planning to work part-time as a real estate professional"
            onChange={(e) => updateFields({ answer9: e.target.value })}
            required
          />
          <span className="radio-text">I am planning to work part-time as a real estate professional</span>
        </label>
      </div>

      <div className="text-left red-question mb-3">
        When do you plan on starting your Real Estate Career?
      </div>
      <div className="radio-container">
        <label className="radio-label">
          <input
            type="radio"
            name="startingCareer"
            value="Immediately"
            onChange={(e) => updateFields({ answer10: e.target.value })}
            required
          />
          <span className="radio-text">Immediately</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="startingCareer"
            value="Within the next 30 days"
            onChange={(e) => updateFields({ answer10: e.target.value })}
          />
          <span className="radio-text">Within the next 30 days</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="startingCareer"
            value="Not sure yet"
            onChange={(e) => updateFields({ answer10: e.target.value })}
          />
          <span className="radio-text">Not sure yet</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="startingCareer"
            value="I've already enrolled in my Pre-Licensing Courses"
            onChange={(e) => updateFields({ answer10: e.target.value })}
          />
          <span className="radio-text">I've already enrolled in my Pre-Licensing Courses</span>
        </label>
      </div>
    </SignUpCarouselWrapper>
  )
}
