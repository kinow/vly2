import { HalfGrid, FullPage, Spacer } from '../../../components/VTheme/VTheme'
import { Button, Form, Divider, Input, DatePicker } from 'antd'
import publicPage from '../../../hocs/publicPage'
import PageTitle from '../../../components/LandingPageComponents/PageTitle.js'
import styled from 'styled-components'
import { DescriptionContainer, FormGrid, InputContainer, MediumInputContainer, ShortInputContainer, TitleContainer } from '../../../components/VTheme/FormStyles'
import ImageUpload from '../../../components/UploadComponent/ImageUploadComponent'
import Link from 'next/link'
import TagInput from '../../../components/Form/Input/TagInput'
import { TagContainer } from '../../../components/VTheme/ItemList'
const { TextArea } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function Page1 () {

  
  return (
    <FullPage>
      <PageTitle><h1>Run an Inspiring the Future event</h1></PageTitle>
     
      <Form>
      <FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>Event title &amp; description</h3>
              </TitleContainer>
              <p>
              Write a title and description for the event that tells volunteers what they’ll be doing
              </p>
            </DescriptionContainer>
            <InputContainer>
            <ShortInputContainer>
            <Form.Item >
              <p>Event Title</p>
            <Input size="large" defaultValue='Inspiring the Future' placeholder="large size" />
                </Form.Item>
            </ShortInputContainer>
            <Form.Item >
              <p>Event Description</p>
            <TextArea rows={12} defaultValue='You can make a positive difference in a young person’s life by sharing your pathway, experience and skills in a way that can spark their interest or encourage their learning.&#13;&#13;

By participating in Inspiring the Future, you can:&#13;

•	broaden students’ aspirations, opening their minds to career opportunities beyond their daily experience&#13;

•	break down students’ career biases and gender stereotypes, which can form by the age of seven&#13;

•	raise students’ awareness of your industry, and the skills and capabilities that are in demand.' placeholder="Write a short blurb about your event here - this is what volunteers who want to help out your school will see" />
                </Form.Item>

            </InputContainer>

      </FormGrid>
<Divider />
<FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>Location</h3>
              </TitleContainer>
              <p>
              Help nearby businesses and volunteers discover your event and let volunteers know where to show up to help out.
              </p>
            </DescriptionContainer>
            <InputContainer>
            <MediumInputContainer>
            <Form.Item >
              <p>Location</p>
            <Input size="large" defaultValue='Hiruharama School, 45 Hiruharama Road, Waitakaro, Ruatoria, 4081' placeholder="large size" />
                </Form.Item>
            </MediumInputContainer>
           
            </InputContainer>

      </FormGrid>
      <Divider />
<FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>Event Date</h3>
              </TitleContainer>
              <p>
              Tell volunteers when your event starts and ends so they can organize to help you out.
              </p>
            </DescriptionContainer>
            <InputContainer>
            <MediumInputContainer>
            <Form.Item >
              <p>Date</p>
            <RangePicker size='large' />
                </Form.Item>
            </MediumInputContainer>
           
            </InputContainer>

      </FormGrid>
<Divider />


<FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>Event photo</h3>
              </TitleContainer>
              <p>
              This is the first thing Volunteers will see when viewing your Activity. You can use the provided image, or upload one yourself :)<br/><br/>Supported formats: PNG, JPG, GIF
              </p>
            </DescriptionContainer>
            <InputContainer>
            <ImageUpload  />
            
            </InputContainer>

      </FormGrid>
      <Divider />      <Divider />
      <FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>Looking for any specific skills from volunteers?</h3>
              </TitleContainer>
              <p>
              Enter keywords for any specific skills or industries you’re looking for
              </p>
            </DescriptionContainer>
            <InputContainer>
            <Input size="large" defaultValue='Engineering, Science, Technology, Nursing, Healthcare, Tourism' placeholder="large size" />

            
            </InputContainer>

      </FormGrid>
      <Divider/>

<FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>Confirm details</h3>
              </TitleContainer>
     
            </DescriptionContainer>
            <InputContainer>
            <Link href='./onboard6'>
            <Button type='primary' shape='round' size='large'>Run event</Button>
            </Link>
            </InputContainer>

      </FormGrid>


      </Form>
    </FullPage>
  )
}

export default publicPage(Page1)
