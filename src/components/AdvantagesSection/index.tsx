import Col from 'components/Col'
import Container from 'components/Container'
import Grid from 'components/Grid'
import Row from 'components/Row'
import Section from 'components/Section'
import SubHeading from 'components/SubHeading'
import Text from 'components/Text'
import React from 'react'
import AdvantageCard, { AdvantageCardProps } from './AdvantageCard'

type AdvantagesSectionProps = {
  cards: AdvantageCardProps[]
}

const AdvantagesSection = ({ cards }: AdvantagesSectionProps) => (
  <Section>
    <Container spacer="xlarge" direction="column">
      <Row>
        <SubHeading align="center">Quer Ser competitivo?</SubHeading>
        <Text align="center">
          Além do benifício da conta digital, sua empresa também pode contar com
          um sistema de gestão empresarial completo:
        </Text>
      </Row>
      <Grid>
        {cards.map((card, i) => (
          <AdvantageCard key={i} {...card} />
        ))}
      </Grid>
    </Container>
  </Section>
)

export default AdvantagesSection
