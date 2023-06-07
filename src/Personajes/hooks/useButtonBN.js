import React, { useState } from 'react'

export const useButtonBN = () => {

  const [page, setpage] = useState(1)

  const onBack = () => {
    if (page !== 1) {
      console.log("No debo ejucatarme si soy 1")
      setpage(page - 1)
    }

  }

  const onNext = () => {
    if (page !== 42) {
      setpage(page + 1)
    }

  }

  return {
    onBack,
    onNext,
    page,
    setpage
  }


}
