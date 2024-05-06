import { ReactElement, useState } from "react"

export function MultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 4,
    isFinishingStep: currentStepIndex === steps.length - 3 || currentStepIndex === steps.length - 2 || currentStepIndex === steps.length - 1 || currentStepIndex === steps.length,
    goTo,
    next,
    back,
  }
}