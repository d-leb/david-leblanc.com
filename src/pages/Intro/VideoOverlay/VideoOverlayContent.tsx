import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import { Text } from 'components'
import { Colors } from 'styles'

import { textTimeout, ContextProvider } from './VideoOverlayProvider'

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 70px;
  text-align: center;
`

const SalutationsWrapper = styled.div`
  margin-bottom: 2em;
`

const GreetingWrapper = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
`

const GreetingLeft = styled.div`
  width: 55%;
  text-align: right;
  padding-right: 5px;
`

const GreetingRight = styled.div`
  width: 45%;
  text-align: left;
  padding-left: 5px;
`

const fadingKeyframes = keyframes`
  0% {
    font-size: 3em;
    margin-bottom: 10px;
    opacity: 0;
  }

  10% {
    font-size: 3em;
    margin-bottom: 10px;
    opacity: 1;
  }

  40% {
    font-size: 3em;
    margin-bottom: 10px;
    opacity: 1;
  }

  80% {
    font-size: 2em;
    margin-bottom: 0;
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const FadeInText = styled(Text)`
  display: inline-block;
  animation-name: ${fadingKeyframes};
  animation-duration: ${textTimeout - 0.4}s;
  color: ${Colors.INTRO_TEXT};
  margin-bottom: 0;
  font-size: 2em;
  opacity: 0;
`

export const VideoOverlayContent = () => {
  const { state } = useContext(ContextProvider)
  const { greeting, greetingList, showText } = state
  return (
    <Container>
      <SalutationsWrapper>
        <Text color="INTRO_TEXT" size={3} messageId="salutations" />
      </SalutationsWrapper>
      <GreetingWrapper>
        <GreetingLeft>
          <Text color="INTRO_TEXT" size={2} messageId="intro.greeting" />
        </GreetingLeft>
        <GreetingRight>
          {showText && <FadeInText color="INTRO_TEXT" size={2} messageId={greetingList[greeting]} />}
        </GreetingRight>
      </GreetingWrapper>
    </Container>
  )
}
