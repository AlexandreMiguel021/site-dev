import React from 'react'
import ButtonGroup from 'components/ButtonGroup'
import { Container } from 'styles/pages/home'
import Button from 'components/Button'
import CardImage from 'components/CardImage'
import CardText from 'components/CardImage/CardText'
import Section from 'components/Section'
import Col from 'components/Col'
import Heading from 'components/Heading'
import SubHeading from 'components/SubHeading'
import Text from 'components/Text'

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Col>
          <Heading>Sistema de Gestão</Heading>
          <SubHeading>
            Já pensou ter tudo as soluções acima e muito mais em uma única
            ferramenta?
          </SubHeading>
          <Text>
            Cadastre seus métodos de pagamento, produtos e serviços sempre
            contando com um sistema intuitivo que vai tornar seu dia a dia muito
            mais produtivo.
          </Text>
          <ButtonGroup>
            <Button size="medium" bgcolor="primary">
              Criar Conta
            </Button>
            <Button size="medium" bgcolor="secondary">
              Conheça o modulo ERP
            </Button>
          </ButtonGroup>
        </Col>
        <Col>
          <CardImage img="/img/brooke-cagle.png" alt="teste">
            <CardText text="Gestão Financeira" top={20} left={200} />
            <CardText text="Gestão Fiscal" top={400} left={410} />
            <CardText text="Controle de Estoque" top={100} left={90} />
            <CardText text="Gestão de compras" top={280} left={240} />
          </CardImage>
        </Col>
      </Container>
    </Section>
  )
}

export default CallToAction
