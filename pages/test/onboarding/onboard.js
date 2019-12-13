import { HalfGrid, FullPage, Spacer } from '../../../components/VTheme/VTheme'
import { Button } from 'antd'
import publicPage from '../../../hocs/publicPage'
import styled from 'styled-components'
import { ShortInputContainer } from '../../../components/VTheme/FormStyles'
import Link from 'next/link'

const IntroContainer = styled.div`
display: grid;
align-content: center;
`
const BigTitle = styled.h2`
font-size: 3rem;
margin-bottom: 1rem;
`
const SubTitle = styled.p`
font-size: 1.5rem;
line-height: 1.75;
`


function Page1 () {
  return (
    <FullPage>
      <Spacer />
      <HalfGrid>
        <img src='../../static/img/demo/intro.png' />
        <IntroContainer>
          <BigTitle>Welcome to Voluntarily!</BigTitle>
          <SubTitle>
            You’ve been invited to Voluntarily, a volunteering platform that
            helps you bring skilled volunteers into your school. To get
            started, tell us a bit about your school.
          </SubTitle><br/>
          <ShortInputContainer>
          <Link href='./onboard2'>
          <Button type='primary' shape='round' size='large'>Get Started</Button>
          </Link>
          </ShortInputContainer>
        </IntroContainer>
      </HalfGrid>
    </FullPage>
  )
}

export default publicPage(Page1)
