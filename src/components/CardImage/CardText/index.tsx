import { CheckMarkIcon } from 'assets/icons'
import Text from 'components/Text'
import React from 'react'
import { Wrapper } from './styles'

type CardTextProps = {
  text: string
  top: number
  left: number
}

const CardText = ({ text, top, left }: CardTextProps) => (
  <Wrapper top={top} left={left}>
    <Text
      component="h2"
      size="small"
      weigth="bold"
      withIcon={<CheckMarkIcon />}
    >
      {text}
    </Text>
  </Wrapper>
)

export default CardText
