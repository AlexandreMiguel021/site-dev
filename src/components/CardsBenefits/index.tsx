import { CheckMarkIcon } from 'assets/icons'
import Text from 'components/Text'
import React from 'react'
import { Card } from './styles'

export type CardsBenefitsProps = {
  texts: string[]
}

const CardsBenefits = ({ texts }: CardsBenefitsProps) => (
  <Card>
    {texts.map((text) => (
      <Text
        color="title"
        size="small"
        withIcon={<CheckMarkIcon />}
        key={text.substring(0, 7)}
      >
        {text}
      </Text>
    ))}
  </Card>
)

export default CardsBenefits
