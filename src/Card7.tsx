import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper"

type Card7Data = {
  answer12: string
}

type Card7Props = Card7Data & {
  updateFields: (fields: Partial<Card7Data>) => void
}

export function Card7({
  answer12,
  updateFields,
}: Card7Props) {
  return (
    <SignUpCarouselWrapper  title=''>
      <div className="text-left red-question mb-3">
      What is the most important thing you are looking for in a Brokerage that will help grow your business?
      </div>
      <div className="radio-container">
        <label className="radio-label">
          <input type="radio" name="commission" value="Leads" onChange={e => updateFields({ answer12: e.target.value })} required/>
          Leads
        </label>
        <label className="radio-label">
          <input type="radio" name="commission" value="Broker Support" onChange={e => updateFields({ answer12: e.target.value })}/>
          Broker Support
        </label>
        <label className="radio-label">
          <input type="radio" name="commission" value="Coaching" onChange={e => updateFields({ answer12: e.target.value })}/>
          Coaching
        </label>
        <label className="radio-label">
          <input type="radio" name="commission" value="Training" onChange={e => updateFields({ answer12: e.target.value })}/>
          Training
        </label>
      </div>
    </SignUpCarouselWrapper>
  )
}