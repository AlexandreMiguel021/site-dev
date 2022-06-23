import { Menu } from '@headlessui/react'
import DropdownButton, { DropdownButtonProps } from 'components/DropdownButton'
import Text from 'components/Text'
import {
  Items,
  MenuButton,
  Item,
  Wrapper,
  ChevronIcon,
  MenuFooter,
  WrapperItems
} from './styles'

export type DropdownProps = {
  title: string
  cols?: number
  children?: React.ReactNode
  items: DropdownButtonProps[]
}

type Menu = {
  open: boolean
}

const Dropdown = ({ title, children, items, cols }: DropdownProps) => {
  return (
    <Menu>
      {({ open }: Menu) => (
        <Wrapper>
          <MenuButton>
            <Text component="span" weigth="bold">
              {title}
            </Text>
            <ChevronIcon open={open} />
          </MenuButton>
          <Items>
            <WrapperItems cols={cols}>
              {items?.map((item, i) => (
                <Item key={i}>
                  <DropdownButton
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    url={item.url}
                    withIconLink={item.withIconLink}
                  />
                </Item>
              ))}
              {open && children && <MenuFooter>{children}</MenuFooter>}
            </WrapperItems>
          </Items>
        </Wrapper>
      )}
    </Menu>
  )
}

export default Dropdown
