import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper"

type Card8Data = {
    fullName: string,
    email: string,
    phone: string,
    state: string,
    contactTime: string
}

type Card8Props = Card8Data & {
  updateFields: (fields: Partial<Card8Data>) => void

}

export function Card8({
    fullName,
    email,
    phone,
    state,
    contactTime,
    updateFields,
}: Card8Props) {
  return (
    <SignUpCarouselWrapper title="">
      <div className="text-left red-question mb-3">
        Please provide your Contact info and the best Phone number to reach you.
      </div>
      <div className="mb-3">
        <label htmlFor="name-signup" hidden>Enter your name:</label>
        <input
          type="text"
          id="name-signup"
          className="form-control text-muted"
          placeholder="Full Name"
          style={{ backgroundColor: '#f8f9fa', border: 'none' }}
          onChange={(e) => updateFields({ fullName: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email-signup" hidden>Enter your email:</label>
        <input
          type="email"
          id="email-signup"
          className="form-control text-muted"
          placeholder="Email"
          style={{ backgroundColor: '#f8f9fa', border: 'none' }}
          onChange={(e) => updateFields({ email: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone-signup" hidden>Enter your phone:</label>
        <input
          type="tel"
          id="phone-signup"
          className="form-control text-muted"
          placeholder="Phone"
          style={{ backgroundColor: '#f8f9fa', border: 'none' }}
          onChange={(e) => updateFields({ phone: e.target.value })}
          required
        />
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="selectState" hidden>Select your State:</label>
          <select
            className="form-control text-muted"
            id="selectState"
            style={{ backgroundColor: '#f8f9fa', border: 'none', minHeight: '50px' }}
            onChange={(e) => updateFields({ state: e.target.value })}
            required
          >
            <option value="" disabled selected>Select your State</option>
            <option value="Georgia">Georgia</option>
            <option value="Florida">Florida</option>
            <option value="South Carolina">South Carolina</option>
            <option value="Tennessee">Tennessee</option>
            <option value="North Carolina">North Carolina</option>
            <option value="Alabama">Alabama</option>
            <option value="Utah">Utah</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="selectContactTime" hidden>Best time for us to Contact you:</label>
          <select
            className="form-control text-muted"
            id="selectContactTime"
            style={{ backgroundColor: '#f8f9fa', border: 'none', minHeight: '50px' }}
            onChange={(e) => updateFields({ contactTime: e.target.value })}
            required
          >
            <option value="" disabled selected>Best time for us to Contact you?</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Anytime">Anytime</option>
          </select>
        </div>
      </div>
    </SignUpCarouselWrapper>
  )
}