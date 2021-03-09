import React from 'react'
import styled from 'styled-components'

import { Link } from 'components'
import { Routes } from 'config/routes'
import { Breakpoints, Colors } from 'styles'

const Wrapper = styled.nav`
  display: block;
  background-color: ${Colors.IVORY};
  position: relative;
  top: 16px;
  height: 80px;
  width: 100%;
`

const Content = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  @media ${Breakpoints.Mobile} {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const NavigationBanner = () => (
  <Wrapper>
    <Content>
      <div>
        <Link
          messageId="site.name"
          size={1.3}
          to={Routes.Contact}
          color="JET"
          hoverColor="DAVYS_GREY"
          nounderline
          bold
        />
      </div>
      <div>
        <Link
          messageId="heading.contact"
          size={1.3}
          to={Routes.Contact}
          color="JET"
          hoverColor="DAVYS_GREY"
          nounderline
          bold
        />
      </div>
    </Content>
  </Wrapper>
)
