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
    .catch(err => console.error(`${err}: Check the data.json file to correct any mistakes`))
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
    <Container className={`bg-white h-screen w-screen md:w-auto flex flex-col md:flex-row md:h-[500px] `}>
        <Card className={`flex flex-col gap-5  justify-center relative z-50`}>
                <Container className={` md:h-full md:w-[350px] pt-6 pb-10 bg-gradient-to-t from-royal to-slate flex flex-col items-center rounded-b-[30px] md:rounded-[30px] gap-5`}>
                    <Title className={`text-lavender text-[21px] md:text-[24px] font-medium`}>Your Result</Title>
                    <Container 
                    className={`bg-gradient-to-b from-violet to-persian text-pale w-48 h-48 md:w-[200px] md:h-[200px] flex flex-col items-center justify-center rounded-full text-[64px] font-bold leading-snug`}>
                      {result} <span 
                    className={`text-lavender text-[14px]`}>of 100</span></Container>
                    <Container className={`flex flex-col items-center gap-2 md:text-center`}>
                      <Sub className={`text-pale text-[28px] font-bold`}>Great</Sub>
                      <Paragraph className={`text-lavender`}>You scored higher than 65% of <br className={`md:block hidden`} /> the <br className={`md:hidden`} /> people who have taken <br className={`md:block hidden`} /> these tests.</Paragraph>
                    </Container>
                </Container>
        </Card>
            <Card className={`bg-white w-full md:w-[370px] flex flex-col gap-7 px-7 md:px-[60px] md:pr-[30px] pb-14 pt-7 shadow-lg md:translate-x-[-30px] relative z-20`}>
                <Container className={` w-full flex flex-col gap-7`}>
                        <Container>
                          <Title className={`text-[18px] font-medium text-dark-gray`}>Summary</Title>
                        </Container>
                        <ul className={`flex flex-col gap-5 flex-wrap sm:flex-nowrap `}>
                          {list && list.map((item, index) => <li key={index} 
                          className={`text-${handleSummaryTextColor(index)} bg-${handleSummaryTextColor(index)} ${index === 0 ? 'hidden' : ''} bg-opacity-10 flex p-4 rounded-xl flex-wrap sm:flex-nowrap gap-3`}> {/* fix the alignment */}
                          <img src={`public/images/icon-${handleIcons(index)}.svg`} alt="" />{item.category} 
                          <span className={'flex justify-end w-full gap-1 text-dark-gray font-bold'}>{index ? item.score : ''} 
                          <span className={`text-gray-400 font-normal`}>{index ? '/ 100' : ''}</span></span></li>)}
                        </ul>
                </Container>
                <Container className={`flex justify-center`}>
                <Button className={`bg-dark-gray w-full py-4 md:py-3 md:w-[350px] rounded-full text-white text-[18px] font-medium`}>Continue</Button></Container>
            </Card>
    </Container>
  )
}

export default Cards