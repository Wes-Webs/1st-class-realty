import React from "react";
import { SignUpCarouselWrapper } from "./SignUpCarouselWrapper"

type CardSentData = {
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

type CardSentProps = CardSentData & {
    updateFields: (fields: Partial<CardSentData>) => void
  }

export function CardSent({
    updateFields,
}: CardSentProps) {
  return (
    <SignUpCarouselWrapper title="">
      <div className="text-center black-description mb-3 px-3">
        Message received. We will get back to you as soon as possible.
      </div>
    </SignUpCarouselWrapper>
  )
}