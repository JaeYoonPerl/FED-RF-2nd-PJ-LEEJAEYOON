import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


export const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    // setPos(0);
    window.scroll({
      top: 0,
      behavior: 'smooth'
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
          <div className="tbtn fi" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp}className="upBtn" style={{fontSize:"32px", lineHeight:"30px"}}/>
        </div>
      }
    </>
  )
}
