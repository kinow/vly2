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
margin-bottom:0.5rem;
h4 {
  font-weight: 700;
  display: grid;
font-size: 24px;
color: #000000;
letter-spacing: -0.3px;
line-height: 32px;
align-items: center;
}
`
const DownloadGrid = styled.div`
display: grid;
grid-template-columns:1fr 10rem;
align-items: center;
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
    Event Instructions
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
            <Link href='./onboard5'>
            <Button size='large' shape='round' type='primary'>
              Run Event
            </Button>
            </Link>
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
                <br />
                <iframe
                  width='640'
                  height='320'
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
              <div>
              <ProfileGrid>
                <img src='../../static/img/demo/providedby1.png'/>
                <h4>Inspiring the Future</h4> 
              </ProfileGrid>
              <p>Inspiring the Future connects children and young people in Years 3 to 8 with volunteers and role models from the world of work through a fun and inspiring activity.</p>
              <Divider />
              <ProfileGrid>
                <img src='../../static/img/demo/providedby2.png'/>
                <h4>Tertiary Education Commission</h4> 
              </ProfileGrid>
              <p>The Tertiary Education Commission (TEC) is the government organisation responsible for supporting New Zealanders to have the skills, knowledge and training opportunities for lifelong success. 
TEC is developing Inspiring the Future.<br/><br/>

The Ministry of Education is TEC’s primary partner. TEC is also engaging with business, communities, teachers’ unions and career practitioners to establish Inspiring the Future in New Zealand.</p>
              </div>
            </OpSectionGrid>
<Divider/>
            <OpSectionGrid>
              <h2>Run this event</h2>
              <div>
             <ActivityText> <p>This will create a copy of this event template that<br/> skilled volunteers can offer to help you with
</p>  </ActivityText>  <br/>          <Link href='./onboard5'>
            <Button size='large' shape='round' type='primary'>
              Run Event
            </Button>
            </Link>
              </div>
            </OpSectionGrid>

          </TabPane>

          <TabPane tab={updateTab} key='3'>
            <OpSectionGrid>
              <h2>Instructions</h2>
              <div><h4>What Happens at Inspiring The Future Activities?</h4><ActivityText><p>Inspiring the Future activities follow four standard steps.<br/><br/>
<strong> 1.	Setup</strong><br/>
Schools select four to six volunteers through the Voluntarily platform to participate in an Inspiring the Future activity, run during school hours. Schools can select volunteers with specific skills or jobs.
<br/><br/>
<strong>2. Twenty questions game</strong><br/>
•	Volunteers sit on stage or at the front of the classroom, wearing everyday clothes.
•	The students try to guess what each volunteer’s job is by asking them questions, which should be answered with only “yes” or “no”.
•	Volunteers leave the stage.
<br/><br/>
<strong>3. The reveal</strong><br/>
One by one the volunteers return, wearing their work clothing or holding a prop that symbolises their job. They each talk briefly about:<br/>
•	who they are<br/>
•	their role<br/>
•	the pathway they took to get to their role<br/>
•	skills they developed and challenges they faced along the way.<br/>
<br/>
<strong>4. Student-led questions</strong><br/>
Once all the volunteers have revealed their jobs, the children break into small groups to ask questions and learn more about the skills, experience and background of each volunteer.<br/>
<br/>
Questions?<br/>
Call or email your dedicated support person or please email css@tec.govt.nz </p></ActivityText></div>

            </OpSectionGrid>
            <Divider />

<OpSectionGrid>
  <h2>Resources</h2>
  <ActivityText>
    <DownloadGrid>
      <div>
    <p>
      <strong>Event Guide PDF</strong>
    </p>
    <p>A detailed guide to help you run your inspiring the future activity</p>
    </div><Button type='secondary' shape='round' size='large'>Download</Button></DownloadGrid>
    <Divider />
    <DownloadGrid>
      <div>
    <p>
      <strong>Printable Signs and Placards</strong>
    </p>
    <p>Optional signs to help run the event</p>
    </div><Button type='secondary' shape='round' size='large'>Download</Button>
    </DownloadGrid>
    <Divider />
    <DownloadGrid>
      <div>
    <p>
      <strong>Volunteer Guide</strong>
    </p>
    <p>A guide for volunteers who are new to speaking</p>
    </div><Button type='secondary' shape='round' size='large'>Download</Button>
    </DownloadGrid>
  </ActivityText>
</OpSectionGrid>
<Divider />

            <OpSectionGrid>
              <h2>Run this event</h2>
              <div><ActivityText>
                <p>This will create a copy of this event template that <br/> skilled volunteers can offer to help you with
</p>  </ActivityText> <br/>          <Link href='./onboard5'>
            <Button size='large' shape='round' type='primary'>
              Run Event
            </Button>
            </Link>
              </div>
            </OpSectionGrid>
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
