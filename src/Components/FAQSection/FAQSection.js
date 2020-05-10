import React from "react"

import FAQ from "../FAQ/FAQ"
import styles from "./FAQSection.sass"

const FAQSection = props => {
  
  const questions = [1, 2, 3, 4, 5, 6, 7]

  return(
    <div className="FAQSection">
      <h1 className="FAQSection__title">Frequently Asked Questions (FAQ)</h1>
      <div className="FAQSection__container">
        {questions && questions.map((question, index) => {
          return (
            <FAQ name="What is a hackathon" 
            body={
              `A hackathon is a weekend-long event where students come together to 
              learn about the latest technologies and build innovative products. 
              Hackathons also provide opportunities for students by giving them access to various workshops, 
              fun activities and networking events.`
            }/>
          )
        })}
      </div>
    </div>
  )
}

export default FAQSection