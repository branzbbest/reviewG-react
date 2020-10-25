import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getData, countView } from '../../../services/fetchData'
import styled from 'styled-components'

const Containar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 1.5rem 4rem 1.5rem 4rem;
  color: #000;
  
  a {
    color: inherit;
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
`

const TopicContainer = styled.div`
  width: 25%;
  height: 20%;
  margin: 30px;
  padding: 2%;

  &:hover {
    color: #f04823;
  }
`

const ImageTopic = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: auto;
  height: 11rem;
  border-radius: 15px;
`
const Topics = styled.div`
  font-size: 18px;
  line-height: 1.2;
  padding-top: 1rem;
  font-size: 1.25rem;
  width: auto;
  height: auto;
  transition: color 0.4s;
`
const DateOfTopics = styled.div`
  font-size: 12px;
  padding-top: 10px;
  transition: color 0.4s;
`

function Topic (params) {
  const [catagoriesData, setCatagoriesData] = useState([])
  const { catagories } = useParams()

  const handleOnClick = (catagories, id) => {
    return countView('posts', catagories, id)
  }
  useEffect(() => {
    getData('posts', 'assets').then(response => setCatagoriesData(response))
  }, [])

  return (
    <>
      <Containar>
        {catagoriesData.filter(catagoriesType => catagoriesType.catagories === catagories).sort((a, b) => b.post_id - a.post_id).map((item, index) => (
          <TopicContainer key={index}>
            <Link to={`/review/${item.catagories}/${item.post_id}`} onClick={() => handleOnClick(item.catagories, item.post_id)}>
              {item.assets.map((image, index2) => (
                <ImageTopic key={index2} src={image.asset_path} />
              ))}
              <Topics>
                {item.topic}
              </Topics>
              <DateOfTopics>{item.date}</DateOfTopics>
            </Link>
          </TopicContainer>
        ))}
      </Containar>
    </>
  )
}

export default Topic
