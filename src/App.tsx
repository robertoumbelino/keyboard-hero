import React from 'react'
import GithubCorner from 'react-github-corner'

/**
 * Components.
 */
import { FullPage } from './components/Page/components/FullPage'
import { Keyboard } from './components/Keyboard/components/Keyboard'

/**
 * Styles.
 */
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => (
  <>
    <FullPage backgroundColor="#141821">
      <Keyboard />
    </FullPage>

    <GithubCorner
      bannerColor="#64AAEB"
      href="https://github.com/robertoumbelino/keyboard-hero"
    />
    <GlobalStyles />
  </>
)
