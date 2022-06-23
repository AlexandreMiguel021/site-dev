import CardImage from 'components/CardImage'
import CardText from 'components/CardImage/CardText'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import SubHeading from 'components/SubHeading'
import Text from 'components/Text'
import React from 'react'
import { BgGradient, Col, Container, Section } from './styles'

const SupportSection = () => {
  return (
    <Section>
      <BgGradient>
        <MediaMatch lessThan="large">
          <Text size="large" color="white" align="center">
            Suporte de verdade, com gente de verdade.
          </Text>
        </MediaMatch>
      </BgGradient>
      <Container>
        <Col
          style={{
            flexDirection: 'row',
            maxWidth: '100%'
          }}
        >
          <MediaMatch greaterThan="large">
            <Text size="xlarge" color="white">
              Suporte de verdade, com gente de verdade.
            </Text>
          </MediaMatch>
          <CardImage
            img="/img/suporte.png"
            alt="teste"
            width={400}
            height={300}
          >
            <CardText text="Rápido e eficaz" top={40} left={140} />
            <CardText text="Online ou por telefone" top={100} left={10} />
            <CardText text="Sempre que precisar" top={190} left={90} />
          </CardImage>
        </Col>
        <Col width={49}>
          <Heading>Suporte</Heading>
          <SubHeading>Cansado de falar com robôs?</SubHeading>
          <Text size="large">
            Mesmo utilizando o melhor da tecnologia entendemos que nem tudo deve
            ser feito por “robôs”. Por isso, conte com nosso suporte 100%
            humanizado para tirar todas as suas dúvidas, resolver possíveis
            problemas e treinar sua equipe para tirar o máximo da nossa
            ferramenta.
          </Text>
        </Col>
      </Container>
    </Section>
  )
}

export default SupportSection
