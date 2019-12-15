import {
  HalfGrid,
  FullPage,
  Spacer,
  Card,
  OpSectionGrid
} from '../../../components/VTheme/VTheme'
import { Button, Divider, Tabs } from 'antd'
import publicPage from '../../../hocs/publicPage'
import styled from 'styled-components'
import { ShortInputContainer } from '../../../components/VTheme/FormStyles'
import { OpQuestion } from '../../../components/Op/OpQuestion'
import { OpUpdate } from '../../../components/Op/OpUpdate'
import Link from 'next/link'
import {
  Left,
  Right,
  ItemContainer,
  ItemDescription,
  TagContainer,
  ItemDuration,
  ItemStatus,
  ItemIdLine,
  ItemVolunteers,
  ItemSpace,
  EquipmentList,
  ItemImage
} from '../../../components/VTheme/ItemList'

const ProfileGrid = styled.div`
display: grid;
grid-template-columns: 48px 1fr;
gap: 1rem;
`

const ActivityText = styled.p`
  p {
    font-size: 1.25rem;
    line-height: 1.75;
  }
`
const shadowStyle = { overflow: 'visible', textAlign: 'center' }
const { TabPane } = Tabs

const aboutTab = (
  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#653cad' }}>
    About
  </span>
)

const questionTab = (
  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#653cad' }}>
    Questions
  </span>
)

const updateTab = (
  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#653cad' }}>
    Activity Instructions
  </span>
)

const TabContainer = styled.div`
  margin-top: 2rem;
`

const ActLOL = styled.div`
  display: grid;
  align-content: center;
`
function Page3 () {
  return (
    <FullPage>

      <HalfGrid>
        <Left>
          <ItemImage src='../../static/img/demo/acttest1.png' />
        </Left>
        <ActLOL>
          <h1>Inspiring the future</h1>
          <a>
            <p>Tertiary Education Commission</p>
          </a>
          <ItemContainer>
            <p>
              <strong>🙋‍♀️ You will need:</strong> 5 Volunteers, 3 Items
              <br />
              <strong>⏱ Commitment:</strong> 2 hours
            </p>
          </ItemContainer>
          <Divider />
          <ShortInputContainer>
            <Button size='large' shape='round' type='primary'>
              Run Event
            </Button>
          </ShortInputContainer>
        </ActLOL>
      </HalfGrid>
      <TabContainer>
        <Tabs style={shadowStyle} defaultActiveKey='1'>
          <TabPane tab={aboutTab} key='1'>
            <OpSectionGrid>
              <div>
                <h2>About</h2>
              </div>
              <ActivityText>
                <p>
                  Call for volunteers from the world of work to come to your
                  school and broaden children's and young people's horizons.
                </p>
                <br />

                <iframe
                  width='800'
                  height='400'
                  src='https://www.youtube.com/embed/vVkAX3oPscE'
                  frameborder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                />
                <br />
                <br />
                <p>
                  <strong>What is Inspiring the Future?</strong>
                  <br />
                  <br />
                  Inspiring the Future connects children and young people in
                  Years 3 to 8 with volunteers and role models from the world of
                  work through a fun and inspiring activity.
                  <br />
                  <br />
                  Volunteers talk about the jobs they do, the pathway they took
                  to get there, the skills they developed, and the challenges
                  faced along the way.
                  <br />
                  <br />
                  These activities meet the aims of the New Zealand Curriculum
                  and Te Marautanga o Aotearoa for all New Zealand children to
                  build their sense of self, and realise their potential.
                </p>
              </ActivityText>
            </OpSectionGrid>
            <Divider />

            <OpSectionGrid>
              <h2>Recommended items</h2>
              <ActivityText>
                <p>
                  <strong>A physical space</strong>
                </p>
                <p>Enough space to fit students and volunteers</p>
                <Divider />
                <p>
                  <strong>5 Volunteers</strong>
                </p>
                <p>To talk about their careers</p>
              </ActivityText>
            </OpSectionGrid>
            <Divider />

            <OpSectionGrid>
              <h2>Provided by</h2>
              <ProfileGrid>
                <img src=''/>
                <h3>aaaa</h3> 

              </ProfileGrid>
              
            </OpSectionGrid>
          </TabPane>

          <TabPane tab={updateTab} key='3'>
            <OpUpdate />
          </TabPane>

          <TabPane tab={questionTab} key='2'>
            <OpQuestion />
          </TabPane>
        </Tabs>
      </TabContainer>
    </FullPage>
  )
}

export default publicPage(Page3)
