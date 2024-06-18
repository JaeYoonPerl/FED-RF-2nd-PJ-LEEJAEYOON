import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


export const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    // window.scrollTo(0,0)
    window.scroll({
      top: 0,
      behavior: 'auto'
    })

  }
  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener("scroll", ShowButtonClick)
    return () => {
      window.removeEventListener("scroll", ShowButtonClick)
    }
  }, [])
  
  return (
    <>
      {showButton &&
          <div className="tbtn fi">
          <FontAwesomeIcon icon={faArrowUp}className="upBtn" style={{fontSize:"32px", lineHeight:"30px"}}/>
        </div>
      }
    </>
  )
}
