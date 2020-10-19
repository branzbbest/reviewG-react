import React from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

const Containar = styled.div`
  background: #003d59;
  display: flex;
  justify-content: center;
  width: auto;
  height: 89vh;
  padding: 1.5rem 4rem 1.5rem 4rem;
`
const BodyContainer = styled.div`
  /* flex-direction: column; */
  background: white;
  width: 90%;
  height: auto;
  border-radius: 2rem;
  padding: 3rem;
`
// TopicReview start
const TopicReviewContainer = styled.div`
  height: auto;
  width: auto;
`

const TopicReview = styled.div`
  font-size: 30px;
  height: auto;
  width: auto;
  font-weight: bold;
  margin: 2rem;
`
const DateTopicReview = styled.div`
  padding:1rem;
  font-size: 15px;

`
// TopicReview end
const Image = styled.div`
  height: 50vh;
  width: 50vh;
  background-color: red;
`

function ReviewGame () {
  return (
    <>
      <Reset />
      <Containar>
        <BodyContainer>
          <TopicReviewContainer>
            <TopicReview>
              ภาพวาดเกม The Last of Us Part II จาก Yoji Shinkawa แห่ง Kojima
              Productions เพื่อเฉลิมฉลองวัน The Last of Us Day
              <DateTopicReview> 19/10/2563 </DateTopicReview>
            </TopicReview>
          </TopicReviewContainer>
          <Image />
        </BodyContainer>
      </Containar>
      dic`
    </>
  )
}

export default ReviewGame
