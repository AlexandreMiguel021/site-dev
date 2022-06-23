import Button from 'components/Button'
import Container from 'components/Container'
import Text from 'components/Text'
import Image from 'next/image'
import { memo } from 'react'
import {
  FirstCol,
  SecondCol,
  WrapperButtons,
  Header as HeaderStyle
} from './styles'

export type HeaderProps = {
  title: string
  description: string
  img: string
  alt: string
  primaryBtnTxt: string
  secondBtnTxt: string
}

const Header = (props: HeaderProps) => {
  const { title, description, img, alt, primaryBtnTxt, secondBtnTxt } = props

  return (
    <HeaderStyle>
      <Container>
        <FirstCol>
          <Text component="h1" size="huge" color="title">
            {title}
          </Text>
          <Text size="large" color="title">
            {description}
          </Text>
          <WrapperButtons>
            <Button size="medium" bgcolor="primary">
              {primaryBtnTxt}
            </Button>
            <Button size="medium" bgcolor="secondary">
              {secondBtnTxt}
            </Button>
          </WrapperButtons>
        </FirstCol>
        <SecondCol>
          <div />
          <Image
            src={img}
            alt={alt}
            width={900}
            height={900}
            layout="raw"
            priority
          />
        </SecondCol>
      </Container>
    </HeaderStyle>
  )
}

export default memo(Header)
