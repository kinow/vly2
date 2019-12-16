import { HalfGrid, FullPage, Spacer } from '../../../components/VTheme/VTheme'
import { Button, Form, Divider, Input } from 'antd'
import publicPage from '../../../hocs/publicPage'
import PageTitle from '../../../components/LandingPageComponents/PageTitle.js'
import styled from 'styled-components'
import { DescriptionContainer, FormGrid, InputContainer, MediumInputContainer, ShortInputContainer, TitleContainer } from '../../../components/VTheme/FormStyles'
import ImageUpload from '../../../components/UploadComponent/ImageUploadComponent'
import Link from 'next/link'

const { TextArea } = Input;


function Page1 () {

  
  return (
    <FullPage>
      <PageTitle><h1>About your School</h1></PageTitle>
      <Divider />
      <Form>
      <FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>Basic Info</h3>
              </TitleContainer>
              <p>
              Tell the world a little bit about your school, so that volunteers know who they are helping out
              </p>
            </DescriptionContainer>
            <InputContainer>
            <ShortInputContainer>
            <Form.Item >
              <p>School Name</p>
            <Input size="large" defaultValue=' Hiruharama School' placeholder="School name goes here" />
                </Form.Item>
            </ShortInputContainer>
            <Form.Item >
              <p>About your School</p>
            <TextArea rows={4} placeholder="Write a short blurb about your school here - this is what volunteers who want to help out your school will see" />
                </Form.Item>
            
            </InputContainer>

      </FormGrid>
<Divider />

<FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>School Logo</h3>
              </TitleContainer>
              <p>
              This gives volunteers a way to identify your school
              </p>
            </DescriptionContainer>
            <InputContainer>
            <ImageUpload  />
            
            </InputContainer>

      </FormGrid>
      <Divider />

<FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>Contact details</h3>
              </TitleContainer>
              <p>
              How do you want volunteers, and businesses to get in touch with your school?
              </p>
            </DescriptionContainer>
            <InputContainer>
            <ShortInputContainer>
            <Form.Item >
              <p>School Email</p>
            <Input size="large" defaultValue='office@hiruharama.school.nz' placeholder="School Email goes here" />
                </Form.Item>

                <Form.Item >
              <p>School Website</p>
            <Input size="large" defaultValue='http://www.hiruharama.school.nz' placeholder="School Website Goes Here" />
                </Form.Item>

                <Form.Item >
              <p>School Phone Number</p>
            <Input size="large" defaultValue='06 864 8701' placeholder="School Phone Number goes here" />
                </Form.Item>
            </ShortInputContainer>
          
            
            </InputContainer>

      </FormGrid>
      <Divider/>

      <FormGrid>
      <DescriptionContainer>
              <TitleContainer>
                <h3>School details</h3>
              </TitleContainer>
              <p>
              Check that your school details are correct so that we can bring more volunteers into your school
              </p>
            </DescriptionContainer>
            <InputContainer>
            <ShortInputContainer>
            <Form.Item >
              <p>School Decile</p>
            <Input size="large" defaultValue='2' placeholder="School Decile goes here" />
                </Form.Item>

                <Form.Item >
              <p>Age Range</p>
            <Input size="large" defaultValue='4 - 11' placeholder="School Website Goes Here" />
                </Form.Item>

                <Form.Item >
              <p>School Address</p>
            <TextArea rows={4} defaultValue='Hiruharama School, 45 Hiruharama Road, Waitakaro, Ruatoria, 4081'  placeholder="School Address goes here" />
                </Form.Item>
            </ShortInputContainer>
          
            
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
            <Link href='./onboard3'>
            <Button type='primary' shape='round' size='large'>Complete Signup</Button>
            </Link>
            </InputContainer>

      </FormGrid>


      </Form>
    </FullPage>
  )
}

export default publicPage(Page1)
