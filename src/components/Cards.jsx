import React from 'react'
import Container from './Container'
import Card from './Card'
import Title from './Title'

const Cards = () => {

  return (
    <Container className={`outline flex w-full h-[500px]`}>
        <Card className={`outline h-auto flex flex-col`}>
                <Container className={`bg-gradient-to-t from-royal to-slate `}>
                    <Title>Your Result</Title>
                    76
                    of 100
                    Great
                    You scored higher than 65% of the people who have taken these tests.
                </Container>
            <Card className={`bg-white flex flex-col items-center`}>
                <Container className={`outline w-96`}>
                    
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