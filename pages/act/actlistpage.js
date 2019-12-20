// [@TODO] - remove Input once actual search component is done
import { Button, Input } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import ActList from '../../components/Act/ActList'
import ActMenu from '../../components/Act/ActMenu'
import NoResult from '../../components/NoResult'
import { ActivityContainer, FullPage, GridContainer, PageBanner, PageBannerButtons } from '../../components/VTheme/VTheme'
import publicPage from '../../hocs/publicPage'
import reduxApi, { withActs } from '../../lib/redux/reduxApi.js'

const escapeRegex = require('../../server/util/regexUtil')

const SearchContainer = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 12px 0 rgba(117, 117, 117, 0.5);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
`
const TabContainer = styled.div`
  margin: 1.5rem 0 0 0;
`

const handleSearch = (value) => {
  if (!value) { return false }
  value = escapeRegex(value)

  Router.push({
    pathname: '/acts',
    query: {
      search: value
    }
  })
}

export const ActListPage = ({ activities }) =>
  <FullPage>
    <Helmet>
      <title>Voluntarily - Activities List</title>
    </Helmet>
    <PageBanner>
      <h1>
        <FormattedMessage
          id='ActListPage.Title'
          defaultMessage='Activities'
          description='Title of page listing activities'
        />
      </h1>

      <PageBannerButtons>
        <Button type='primary' shape='round' size='large'>
          <Link href='/act/new'>
            <a>
              <FormattedMessage
                id='act.new'
                defaultMessage='New activity'
                description='Button to create a new activity'
              />
            </a>
          </Link>
        </Button>
      </PageBannerButtons>
      <FormattedMessage
        defaultMessage='Find activity templates that make it easy to bring volunteers into your classroom'
        id='act.list.subtitle'
      />
    </PageBanner>
    {/* <Tabs style={shadowStyle} defaultActiveKey='1' onChange={callback}>
      <TabPane tab={activityTab} key='1'> */}
    <ActivityContainer>
      <TabContainer>
        {' '}
        <ActMenu acts={activities.data} />
      </TabContainer>
      <TabContainer>
        <SearchContainer>
          <p>Search activities</p>
          <Input.Search
            placeholder='eg: activity'
            enterButton='Search'
            size='large'
            onSearch={handleSearch}
          />
        </SearchContainer>

        {activities.data.length > 0 ? (
          <ActList acts={activities.data} />
        ) : (
          <NoResult
            id='act.noresult'
            msg='No activities found based on your search criteria'
            description='Message shown while no activities found'
          />
        )}
      </TabContainer>
    </ActivityContainer>
    {/* </TabPane>
    </Tabs> */}
    <GridContainer>
      <br />
      <br />

      {/* [@TODO] Replace with actual searchbar component */}
    </GridContainer>
  </FullPage>

ActListPage.getInitialProps = async ({ store, query }) => {
  // Get all Acts
  return store.dispatch(
    reduxApi.actions.activities.get({
      ...query
    })
  )
}

export default publicPage(withActs(ActListPage))
