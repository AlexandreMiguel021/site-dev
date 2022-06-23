import { Disclosure } from '@headlessui/react'
import Button from 'components/Button'
import Text from 'components/Text'
import Image from 'next/image'
import React from 'react'
import {
  ChevronIcon,
  StyleProps,
  WrapperButton,
  Content,
  PanelWrapper
} from './styles'

type SolutionMobileType = {
  title: string
  description: string
  image: string
}

const SolutionsMobile = ({ title, description, image }: SolutionMobileType) => {
  return (
    <Disclosure>
      {({ open }: StyleProps) => (
        <Content>
          <Disclosure.Button
            className={open ? 'btn-panel isOpen' : 'btn-panel'}
          >
            <WrapperButton>
              <Text component="span" weigth="bold" size="large">
                {title}
              </Text>
              <ChevronIcon open={open} />
            </WrapperButton>
          </Disclosure.Button>
          <Disclosure.Panel>
            <PanelWrapper>
              <Image src={image} width={400} height={200} layout="raw" />
              <Text size="large">{description}</Text>
              <Button size="medium" bgcolor="primary">
                Saber mais
              </Button>
            </PanelWrapper>
          </Disclosure.Panel>
        </Content>
      )}
    </Disclosure>
  )
}

export default SolutionsMobile
