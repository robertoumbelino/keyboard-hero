import styled, { css, keyframes } from 'styled-components'
import { PlayFill, HandThumbsUp, HandThumbsDown } from 'styled-icons/bootstrap'

/**
 * Component properties.
 */
export type KeyProps = {
  width?: number
  isActive?: boolean
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const KeyboardContainer = styled.div``

export const Row = styled.div`
  display: flex;
  margin-left: -0.4em;
  margin-right: -0.4em;
`

export const Key = styled.span<KeyProps>`
  height: 3em;
  border-radius: 0.4em;

  margin: 0.4em;
  background-color: #64aaeb;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: #f8f8f8;

  ${({ width = 3 }) => css`
    width: ${width}em;
  `}

  ${({ isActive }) =>
    isActive &&
    css`
      background: #eb6475;
    `}
`

export const Title = styled.h1`
  color: #eb6475;
  align-self: flex-start;
`

export const Timer = styled.p`
  font-family: 'Press Start 2P';
  color: #f8f8f8;
  font-size: 3em;
  margin-top: 0.4em;
`

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FlexRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PointContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1em;
`

export const ScoreBoardContainer = styled.div`
  position: absolute;
  left: 1em;
  top: 1em;
`

export const Button = styled.button`
  width: 80px;
  height: 80px;
  outline: none;

  background-color: #eb6475;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #e2e8f0;
  font-size: 16px;
  font-weight: medium;

  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  & > svg {
    margin-left: 5px;
  }
`

const pulse = keyframes`
  0% {
    transform: scale(0.95);
  }

  70% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
`

export const StartPhrase = styled.p`
  font-family: 'Press Start 2P';
  width: 100%;
  color: #f8f8f8;
  font-size: 1.5em;
  text-align: center;
  margin-top: 1em;
  line-height: 1.5;

  transform: scale(1);
  animation: ${pulse} 0.5s infinite;
`

const PointText = styled.p`
  font-family: 'Press Start 2P';
  font-size: 1.5em;
  margin-left: 0.4em;
  text-align: center;
  width: 60px;
`

export const HitText = styled(PointText)`
  color: #33d9b2;
`

export const MistakeText = styled(PointText)`
  color: #ff5252;
`

/**
 * Icons.
 */
export const PlayIcon = styled(PlayFill)`
  width: 45px;
  height: 45px;
  color: #f8f8f8;
`

export const HitIcon = styled(HandThumbsUp)`
  width: 35px;
  height: 35px;
  color: #33d9b2;
`

export const MistakeIcon = styled(HandThumbsDown)`
  width: 35px;
  height: 35px;
  color: #ff5252;
`
