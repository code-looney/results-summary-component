import React, {useState} from 'react'
import Container from './Container'
import Card from './Card'
import Title from './Title'
import Sub from './Sub'
import Paragraph from './Paragraph'

const Cards = () => {
  const [result, setResult] = useState(76)

  return (
    <Container className={`bg-white flex w-full h-screen`}>
        <Card className={`h-auto flex flex-col`}>
                <Container className={`pt-6 pb-10 bg-gradient-to-t from-royal to-slate flex flex-col items-center rounded-b-[30px] gap-5`}>
                    <Title className={`text-lavender`}>Your Result</Title>
                    <Container className={`bg-gradient-to-b from-violet to-persian text-pale w-40 h-40 flex flex-col items-center justify-center rounded-full text-[64px] font-medium leading-snug`}>{result} <span className={`text-lavender text-[14px]`}>of 100</span></Container>
                    <Container className={`flex flex-col items-center gap-2`}>
                      <Sub className={`text-pale text-[28px]`}>Great</Sub>
                      <Paragraph className={`text-lavender`}>You scored higher than 65% of the <br /> people who have taken these tests.</Paragraph>
                    </Container>
                </Container>
            <Card className={`bg-white flex flex-col items-center`}>
                <Container className={``}>
                    
                        Summary
                    
                        Reaction
                        80 / 100
                    
                        Memory
                        92 / 100
                    
                        Verbal
                        61 / 100
                    
                        Visual
                        72 / 100
                    
                        Continue
                </Container>

            </Card>
        </Card>
    </Container>
  )
}

export default Cards