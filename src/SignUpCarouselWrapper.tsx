import React from "react";
import { ReactNode } from "react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function SignUpCarouselWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="red-title text-center">
        {title}
      </h2>
      <div>
        {children}
      </div>
    </>
  )
}