import React from 'react'

/**
 * Hooks.
 */
import { useKeyboard } from '../../hooks/useKeyboard'

/**
 * Styles.
 */
import {
  Container,
  Row,
  Key,
  Title,
  Timer,
  KeyboardContainer,
  Button,
  PlayIcon,
  StartPhrase,
  FlexColumnContainer,
  FlexRowContainer,
  HitIcon,
  HitText,
  MistakeIcon,
  MistakeText,
  PointContainer,
  ScoreBoardContainer
} from './styles'

/**
 * Component.
 */
export const Keyboard = () => {
  const { point, randomizedKey, time, isRunning, handleStart } = useKeyboard()

  return (
    <Container>
      <ScoreBoardContainer>
        <Timer>00:{String(time).padStart(2, '0')}</Timer>

        <PointContainer>
          <FlexRowContainer>
            <HitIcon />
            <HitText>{point.hits}</HitText>
          </FlexRowContainer>

          <FlexRowContainer>
            <MistakeIcon />
            <MistakeText>{point.mistakes}</MistakeText>
          </FlexRowContainer>
        </PointContainer>
      </ScoreBoardContainer>

      <FlexColumnContainer>
        <FlexColumnContainer>
          <Button onClick={handleStart}>
            <PlayIcon />
          </Button>

          <StartPhrase>
            {isRunning ? 'GO GO GO' : 'PRESS START TO PLAY'}
          </StartPhrase>
        </FlexColumnContainer>
      </FlexColumnContainer>

      <KeyboardContainer>
        <Title>Keyboard Hero</Title>

        <Row>
          <Key>ESC</Key>
          <Key>1</Key>
          <Key>2</Key>
          <Key>3</Key>
          <Key>4</Key>
          <Key>5</Key>
          <Key>6</Key>
          <Key>7</Key>
          <Key>8</Key>
          <Key>9</Key>
          <Key>0</Key>
          <Key>-</Key>
          <Key>+</Key>
          <Key width={5.4}>BACK</Key>
        </Row>

        <Row>
          <Key width={5.4}>TAB</Key>
          <Key isActive={'q' === randomizedKey}>Q</Key>
          <Key isActive={'w' === randomizedKey}>W</Key>
          <Key isActive={'e' === randomizedKey}>E</Key>
          <Key isActive={'r' === randomizedKey}>R</Key>
          <Key isActive={'t' === randomizedKey}>T</Key>
          <Key isActive={'y' === randomizedKey}>Y</Key>
          <Key isActive={'u' === randomizedKey}>U</Key>
          <Key isActive={'i' === randomizedKey}>I</Key>
          <Key isActive={'o' === randomizedKey}>O</Key>
          <Key isActive={'p' === randomizedKey}>P</Key>
          <Key>[</Key>
          <Key>]</Key>
          <Key>\</Key>
        </Row>

        <Row>
          <Key width={6.1}>CAPS</Key>
          <Key isActive={'a' === randomizedKey}>A</Key>
          <Key isActive={'s' === randomizedKey}>S</Key>
          <Key isActive={'d' === randomizedKey}>D</Key>
          <Key isActive={'f' === randomizedKey}>F</Key>
          <Key isActive={'g' === randomizedKey}>G</Key>
          <Key isActive={'h' === randomizedKey}>H</Key>
          <Key isActive={'j' === randomizedKey}>J</Key>
          <Key isActive={'k' === randomizedKey}>K</Key>
          <Key isActive={'l' === randomizedKey}>L</Key>
          <Key isActive={'ç' === randomizedKey}>Ç</Key>
          <Key>:</Key>
          <Key width={6.1}>ENTER</Key>
        </Row>

        <Row>
          <Key width={8}>SHIFT</Key>
          <Key isActive={'z' === randomizedKey}>Z</Key>
          <Key isActive={'x' === randomizedKey}>X</Key>
          <Key isActive={'c' === randomizedKey}>C</Key>
          <Key isActive={'v' === randomizedKey}>V</Key>
          <Key isActive={'b' === randomizedKey}>B</Key>
          <Key isActive={'n' === randomizedKey}>N</Key>
          <Key isActive={'m' === randomizedKey}>M</Key>
          <Key>,</Key>
          <Key>.</Key>
          <Key>;</Key>
          <Key width={8}>SHIFT</Key>
        </Row>
      </KeyboardContainer>
    </Container>
  )
}
