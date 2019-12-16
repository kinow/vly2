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
const EventCard = styled.div`

background: #ffffff;
  box-shadow: 2px 2px 24px 0 rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  display: grid;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 1.5rem;

img {
  overflow: hidden;
  border-radius: 8px 0 0 8px;
}

div {
  padding: 1rem;
  align-content: center;
    display: grid;
}


:hover {
    transition: all 0.3s;
    transform: scale(1.01);
    box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);

  }


  h4 {
    font-weight: 700;
    margin-bottom:0.5rem;

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
          Volunteers can now see your activity and offer to help you out 😀
          </h3>
          <br />
          <EventCard>
          <img src='../../static/img/demo/introfinal.png' />
            <div>
              <h4> Inspiring the future</h4>
              <p>🗓  2:00pm - 12 Feb 2020</p>
              <p>🏫  Hiruharama School, Ruatoria</p>
            </div>
          </EventCard>
          <br/>
          <h4>Try the following things next:</h4>
          <br />
          <Link href='./onboard4'><a>
          <ToDoCard>
            <img src='../../static/img/demo/finalcta1.png' />
            <div>
              <h5>Invite friends and parents</h5>
              <p>
              Invite friends to volunteer for this event 
              </p>
            </div>
          </ToDoCard>
          </a>
          </Link>
          <ToDoCard>
            <img src='../../static/img/demo/finalcta2.png' />
            <div>
              <h5>Tell the rest of your school</h5>
              <p>
              Share this event with the rest of your school
              </p>
            </div>
          </ToDoCard>
          <ToDoCard>
            <img src='../../static/img/demo/finalcta2.png' />
            <div>
              <h5>See your dashboard</h5>
              <p>
              See what else you can do on the Voluntarily Platform
              </p>
            </div>
          </ToDoCard>
        </IntroContainer>
      </HalfGrid>
    </FullPage>
  )
}

export default publicPage(Page3)
