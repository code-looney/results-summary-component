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
  const [score, setScore] = useState(null)
  const bgColors = ['bg-light-red', 'bg-orangey', 'bg-green-teal', 'bg-cobalt'];
  const textColors = ['text-light-red', 'text-orangey', 'text-green-teal', 'text-cobalt'];


  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setList(data))
  }, [])


  function handleSummaryTextColor (index) {
      if (index === 1) {
        return 'light-red'
      } else if (index === 2) {
        return 'orangey'
      } else if (index === 3) {
        return 'green-teal'
      } else if (index === 4) {
        return 'cobalt'
      }else if (index === 0) {
      return 'hidden'
    } 
  }

  function handleIcons (index) {
    if(index === 1) {
      return 'reaction'
    } else if(index === 2) {
      return 'memory'
    } else if(index === 3) {
      return 'verbal'
    } else if(index === 4) {
      return 'visual'
    }
  } 

  return (
    <Container className={`bg-white h-screen w-screen md:w-auto  flex flex-col md:flex-row  md:h-[500px] outline `}>
        <Card className={`flex flex-col gap-5 justify-center  `}>
                <Container className={`md:w-[400px] pt-6 pb-10 bg-gradient-to-t from-royal to-slate flex flex-col items-center rounded-b-[30px] md:rounded-[30px] gap-5`}>
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
        </Card>
            <Card className={`bg-white w-full flex flex-col items-center gap-7`}>
                <Container className={`px-10 w-full outline`}>
                        <Container>
                          <Title className={`text-[21px] font-medium`}>Summary</Title>
                        </Container>
                        <ul className={`flex flex-col gap-5`}>
                          {list && list.map((item, index) => <li key={index} 
                          className={`text-${handleSummaryTextColor(index)} bg-${handleSummaryTextColor(index)} ${index === 0 ? 'hidden' : ''} bg-opacity-10 flex p-4 rounded-xl flex-wrap outline`}> {/* fix the alignment */}
                          <img src={`public/images/icon-${handleIcons(index)}.svg`} alt="" />{item.category} <span className={'flex justify-end w-full gap-1'}>{index ? item.score : ''} <span>{index ? '/ 100' : ''}</span></span></li>)}
                        </ul>
                </Container>
                <Container className={`flex justify-center`}><Button className={`outline w-40`}>Continue</Button></Container>

            </Card>
    </Container>
  )
}

export default Cards