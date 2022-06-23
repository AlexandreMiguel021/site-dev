import Row from 'components/Row'
import Text from 'components/Text'
import React from 'react'
import { ColCard, IconCard, WrapperCard } from './styles'

export type AdvantageCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
  return (
    <WrapperCard>
      <IconCard>{icon}</IconCard>
      <ColCard spacer="xxsmall">
        <Row>
          <Text component="h2" color="title" size="xlarge" weigth="normal">
            {title}
          </Text>
        </Row>
        <Row>
          <Text>{description}</Text>
        </Row>
      </ColCard>
    </WrapperCard>
  )
}

export default AdvantageCard
