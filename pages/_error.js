/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import { FormattedMessage, IntlProvider } from 'react-intl'
import { FullPage, Spacer } from '../components/VTheme/VTheme'
import styled from 'styled-components'
import publicPage from '../hocs/publicPage'

const BugImage = styled.img`
  width: 5rem;
  height: 5rem;
  position: relative;
  animation: rotation 2s infinite linear;
  float: left;

  @keyframes rotation {
    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const BugContainer = styled.div`
  margin-top: 1.5rem;
  margin-left: 3rem;
`

class ErrorPage extends React.Component {
  static getInitialProps ({ res, xhr, req }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null

    const { locale, messages } = req || window.__NEXT_DATA__.props.initialProps
    const initialNow = Date.now()
    return {
      errorCode,
      locale,
      messages,
      initialNow
    }
  }

  render () {
    let response

    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <IntlProvider
            locale={this.props.locale}
            messages={this.props.messages}
            initialNow={this.props.initialNow}
          >
            <FullPage>
              <Head>
                <IntlProvider
                  locale={this.props.locale}
                  messages={this.props.messages}
                  initialNow={this.props.initialNow}
                >
                  <FormattedMessage
                    id='error.pagenotfound.title'
                    description='Page title for the 404 error'
                    defaultMessage='Oh no! Page not found'
                    tagName='title'
                  />
                </IntlProvider>
              </Head>
              <Spacer />
              <Spacer />
              <div>
                <FormattedMessage
                  id='error.pagenotfound.title'
                  description='Page title for the 404 error'
                  defaultMessage='Oh no! Page not found'
                  tagName='h1'
                />
                <FormattedMessage
                  id='error.pagenotfound.description'
                  defaultMessage="The page you are looking for is not here. We have looked everywhere but it doesn't seem to exist. Perhaps it just hasn't been built yet."
                />
                &nbsp;
                <a href='https://voluntarily.nz/get-involved'>
                  <FormattedMessage
                    id='error.pagenotfound.contribute'
                    defaultMessage='If you can write code you can help fix that by becoming a contributor to the project.'
                  />
                </a>
                &nbsp;
              </div>
              <Spacer />
              <BugImage src='/static/img/bug.png' />
              <BugContainer>
                <p>
                    An <strong>HTTP {this.props.errorCode}</strong> error occurred
                    while trying to access{' '}
                  <strong>{this.props.router.asPath}</strong>
                </p>
              </BugContainer>
            </FullPage>
          </IntlProvider>
        )
        break
      default:
        response = (
          <IntlProvider
            locale={this.props.locale}
            messages={this.props.messages}
            initialNow={this.props.initialNow}
          >
            <FullPage>
              <Head>
                <IntlProvider
                  locale={this.props.locale}
                  messages={this.props.messages}
                  initialNow={this.props.initialNow}
                >
                  <FormattedMessage
                    id='error.servererror.title'
                    description='Page title for error pages'
                    defaultMessage='There was a problem'
                    tagName='title'
                  />
                </IntlProvider>
              </Head>
              <Spacer />
              <Spacer />
              <div>
                <FormattedMessage
                  id='error.servererror.description'
                  description='A server error'
                  defaultMessage='Sorry, there was a problem and we can not complete this task. We have let our team know so they can take a look and fix it. For now try to refresh the page, or go back to the previous page'
                  tagName='h2'
                />
                <h4 className='display-4'>HTTP {this.props.errorCode} Error</h4>
                <p>
                    An <strong>HTTP {this.props.errorCode}</strong> error occurred
                    while trying to access{' '}
                  <strong>{this.props.router.asPath}</strong>
                </p>
                &nbsp;
              </div>
            </FullPage>
          </IntlProvider>
        )
    }

    return response
  }
}

ErrorPage.propTypes = {
  errorCode: PropTypes.number.isRequired
}

export const ErrorPageTest = ErrorPage // for test

export default publicPage(withRouter(ErrorPage))
