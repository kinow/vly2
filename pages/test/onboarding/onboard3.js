import {
  HalfGrid,
  FullPage,
  Spacer,
  Card
} from '../../../components/VTheme/VTheme'
import { Button } from 'antd'
import publicPage from '../../../hocs/publicPage'
import styled from 'styled-components'
import { ShortInputContainer } from '../../../components/VTheme/FormStyles'
import Link from 'next/link'

const IntroContainer = styled.div`
  display: grid;
  align-content: center;
`
const ToDoCard = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 24px 0 rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  align-content: center;
  grid-template-columns: 72px 1fr;
  gap: 16px;
  margin-bottom: 1.5rem;
  h5 {
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: 700;
    color: black;
  }

  :hover {
    transition: all 0.3s;
    transform: scale(1.01);
    box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }

  div {
    align-content: center;
    display: grid;
  }
`

function Page3 () {
  return (
    <FullPage>
      <Spacer />
      <HalfGrid>
        <img src='../../static/img/demo/intro2.png' />
        <IntroContainer>
          <h3>
            You are now ready to bring in awesome, skilled volunteers into your
            school.
          </h3>
          <br />
          <h4>Try the following things next:</h4>
          <br />
          <Link href='./onboard4'><a>
          <ToDoCard>
            <img src='../../static/img/demo/introcard.png' />
            <div>
              <h5>Try an Inspiring The Future Activity</h5>
              <p>
                Invite volunteers into your school to talk about their careers.
                <br /> Inspire. Excite. Ignite.
              </p>
            </div>
          </ToDoCard>
          </a>
          </Link>
          <ToDoCard>
            <img src='../../static/img/demo/introcard2.png' />
            <div>
              <h5>Invite Staff</h5>
              <p>
                Invite the rest of your school staff to use the platform <br />
                and call in skilled volunteers as well
              </p>
            </div>
          </ToDoCard>
        </IntroContainer>
      </HalfGrid>
    </FullPage>
  )
}

export default publicPage(Page3)
