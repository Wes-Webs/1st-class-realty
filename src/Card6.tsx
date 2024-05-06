import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper"

type Card6Data = {
  answer11: string
}

type Card6Props = Card6Data & {
  updateFields: (fields: Partial<Card6Data>) => void
}

export function Card6({
  answer11,
  updateFields,
}: Card6Props) {
  return (
    <SignUpCarouselWrapper  title=''>
      <div className="text-center black-description mb-3 px-3">
        The way an agent makes money is a little different since real estate agents don’t make a typical salary, but are paid on commission.
      </div>
      <div className="text-center black-description mb-3 px-3">
        The compensation for this position is 100% commission based on each of your sales.
      </div>
      <div className="text-left red-question mb-3">
        In general, are you comfortable working on commission?
      </div>
      <div className="radio-container">
        <label className="radio-label">
          <input type="radio" name="commission" value="Yes, I am comfortable working on commission" onChange={e => updateFields({ answer11: e.target.value })} required/>
          Yes, I am comfortable working on commission
        </label>
        <label className="radio-label">
          <input type="radio" name="commission" value="No, I am not comfortable working on commission" onChange={e => updateFields({ answer11: e.target.value })}/>
          No, I am not comfortable working on commission
        </label>
      </div>
    </SignUpCarouselWrapper>
  )
}