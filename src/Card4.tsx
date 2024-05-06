import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper"

type Card4Data = {
  answer6: string
  answer7: string
  answer8: string
}

type Card4Props = Card4Data & {
  updateFields: (fields: Partial<Card4Data>) => void

}

export function Card4({
  answer6,
  answer7,
  answer8,
  updateFields,
}: Card4Props) {
  return (
    <SignUpCarouselWrapper title="">
      <div className="text-left red-question mb-3">
        How long have you been a Licensed Real Estate Agent?
      </div>
      <div className="radio-container mb-3">
        <label className="radio-label">
          <input
            type="radio"
            name="licenseLength"
            value="Brand New Agent"
            onChange={(e) => updateFields({ answer6: e.target.value })}
            required
          />
          Brand New Agent
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="licenseLength"
            value="Less than 1 Year"
            onChange={(e) => updateFields({ answer6: e.target.value })}
          />
          Less than 1 Year
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="licenseLength"
            value="1 - 5 years"
            onChange={(e) => updateFields({ answer6: e.target.value })}
          />
          1 - 5 years
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="licenseLength"
            value="6 years +"
            onChange={(e) => updateFields({ answer6: e.target.value })}
          />
          6 years +
        </label>
      </div>
      <div className="text-left red-question mb-3">
        How many transactions have you Closed in the Last 12 Months?
      </div>
      <div className="row mb-3">
        <div className="col">
            <label htmlFor="selectOption" hidden>Select an option:</label>
            <select className="form-control text-muted" id="selectOption" style={{ backgroundColor: '#f8f9fa', border: 'none', minHeight: '50px' }} onChange={(e) => updateFields({ answer7: e.target.value })} required>
                <option value="" disabled selected>Select One</option>
                <option value="I haven't had a closing">I haven't had a closing</option>
                <option value="1 - 3 closings">1 - 3 closings</option>
                <option value="3 - 10 closings">3 - 10 closings</option>
                <option value="10 - 20 closings">10 - 20 closings</option>
                <option value="20 or more closings">20 or more closings</option>
            </select>
        </div>
      </div>

      <div className="text-left red-question mb-3">
        Is your License currently under Another Brokerage?
      </div>
      <div className="radio-container">
        <label className="radio-label">
          <input
            type="radio"
            name="licenseBroker"
            value="Yes"
            onChange={(e) => updateFields({ answer8: e.target.value })}
            required
          />
          Yes
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="licenseBroker"
            value="No, my license is currently Inactive"
            onChange={(e) => updateFields({ answer8: e.target.value })}
          />
          No, my license is currently Inactive
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="licenseBroker"
            value="I am transferring my License from another state"
            onChange={(e) => updateFields({ answer8: e.target.value })}
          />
          I am transferring my License from another state
        </label>
      </div>
    </SignUpCarouselWrapper>
  )
}