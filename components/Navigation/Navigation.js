import { Avatar, Menu } from 'antd'
import Link from 'next/link'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAvatar = styled(Avatar)`
  background-color: #fff;

  .anticon-user {
    margin-right: 0px;
  }

  .ant-imgUrl > i {
    margin-right: 0px;
  }
`

const Navigation = ({ items, defaultItem, router, me, ...props }) => {
  const activeItem = router.pathname.slice(1)
  return (
    <Menu
      theme='light'
      mode='horizontal'
      style={{ float: 'right' }}
      selectedKeys={[activeItem]}
    >
      {items.map(item => (
        <Menu.Item key={item.key}>
          <Link key={item.href} href={item.href}>
            <a>{item.text}</a>
          </Link>
        </Menu.Item>
      ))}
      <Menu.Item>
        <StyledAvatar>
          <Link href={me && me._id ? `/people/${me._id}` : '/home'}>
            <Avatar
              size='small'
              src={me && me.imgUrl}
              icon='user'
            />
          </Link>
        </StyledAvatar>
      </Menu.Item>
    </Menu>
  )
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      url: PropTypes.string
    })
  ),
  defaultItem: PropTypes.string
}

export default withRouter(Navigation)
