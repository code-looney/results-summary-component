import React, {useEffect, useState} from 'react'
import Container from './Container'
import Card from './Card'
import Title from './Title'
import Sub from './Sub'
import Paragraph from './Paragraph'
import Button from './Button'

const Cards = () => {
  const [result, setResult] = useState(76)
  const [list, setList] = useState(null)
  const colors = ['bg-light-red', 'text-light-red'];


  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setList(data))
  }, [])


  function handleSummaryTextColor (index) {
      if (index === 1) {
        return 'light-red'
      }
  }

  return (
    <Container className={`bg-white flex h-screen md:h-[500px] outline `}>
        <Card className={`h-auto flex flex-col md:flex-row  w-screen md:w-auto `}>
                <Container className={`md:w-[400px] pt-6 pb-10 bg-gradient-to-t from-royal to-slate flex flex-col items-center rounded-b-[30px] md:rounded-[30px] gap-5 md:justify-center`}>
                    <Title className={`text-lavender text-[21px] md:text-[24px] font-medium`}>Your Result</Title>
                    <Container 
                    className={`bg-gradient-to-b from-violet to-persian text-pale w-48 h-48 md:w-[220px] md:h-[220px] flex flex-col items-center justify-center rounded-full text-[64px] font-bold leading-snug`}>
                      {result} <span 
                    className={`text-lavender text-[14px]`}>of 100</span></Container>
                    <Container className={`flex flex-col items-center gap-2 md:text-center`}>
                      <Sub className={`text-pale text-[28px] font-bold`}>Great</Sub>
                      <Paragraph className={`text-lavender`}>You scored higher than 65% of <br className={`md:block hidden`} /> the <br className={`md:hidden`} /> people who have taken <br className={`md:block hidden`} /> these tests.</Paragraph>
                    </Container>
                </Container>
            <Card className={`bg-white flex flex-col items-center`}>
                <Container className={`w-full outline`}>
                        <Container>
                          <Title className={`text-[21px] font-medium`}>Summary</Title>
                        </Container>
                        <ul>
                          {list && list.map((item, index) => <li key={index} 
                          className={`text-${handleSummaryTextColor(index)} bg-${handleSummaryTextColor(index)} bg-opacity-10 flex outline  justify-between`}>{item.category} <span>{index ? item.score : ''} <span>{index ? '/ 100' : ''}</span></span></li>)}
                        </ul>
                        <Container className={`flex justify-center`}><Button className={`outline w-40`}>Continue</Button></Container>
                </Container>

            </Card>
        </Card>
    </Container>
  )
}

export default Cards