import React from 'react'
import Head from './head'

describe('<Head />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Head />)
  })
})