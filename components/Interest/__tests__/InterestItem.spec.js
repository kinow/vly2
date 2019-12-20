import InterestItem from '../InterestItem'
import test from 'ava'
import { mountWithIntl } from '../../../lib/react-intl-test-helper'

test('constructs properly', t => {
  const wrapper = mountWithIntl(
    <InterestItem interest={{
      person: { nickname: 'Test Name' },
      opportunity: 'Test Opportunity',
      comment: 'Test Comment',
      status: 'Test Status',
      _id: '11223344'
    }}
    />)

  t.truthy(wrapper.find('.person.nickname'), 'Test Name')
  t.truthy(wrapper.find('.opportunity'), 'Test Opportunity')
  t.truthy(wrapper.find('.comment'), 'Test Comment')
  t.truthy(wrapper.find('.status'), 'Test Status')
  t.truthy(wrapper.find('._id'), '11223344')
})
