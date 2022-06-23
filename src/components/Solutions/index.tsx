import Button from 'components/Button'
import Section from 'components/Section'
import Text from 'components/Text'
import Image from 'next/image'
import React, { memo, useState } from 'react'
import data from 'data/products.json'
import { Container, Content, Tab } from './styles'
import SolutionsMobile from './SolutionsMobile'
import Col from 'components/Col'
import SubHeading from 'components/SubHeading'
import Heading from 'components/Heading'

const Solutions = () => {
  const [solutionId, setSolutionId] = useState<number>(0)

  return (
    <Section>
      <Container direction="column">
        <div>
          <Text
            align="center"
            component="h2"
            size="xlarge"
            color="title"
            weigth="bold"
          >
            Nossas soluções
          </Text>
          <Text align="center">
            Temos sistemas que atendem a todos os tipos e tamanhos de negócio:
          </Text>
        </div>
        <Tab>
          {data.products.map(({ id, title }) => (
            <li
              className={solutionId === id ? 'active' : ''}
              onClick={() => setSolutionId(id)}
              key={id}
            >
              <Text>{title}</Text>
            </li>
          ))}
        </Tab>
        <Content>
          <Image
            src={data.products[solutionId].image}
            alt="teste"
            width={580}
            height={482}
            priority
          />
          <Col>
            <div>
              <Heading>Solução</Heading>
              <SubHeading>{data.products[solutionId].title}</SubHeading>
              <Text component="p" size="large">
                {data.products[solutionId].description}
              </Text>
            </div>
            <Button size="medium" bgcolor="primary">
              Acesso sistema
            </Button>
          </Col>
        </Content>

        {data.products.map((product) => (
          <SolutionsMobile key={product.id} {...product} />
        ))}
      </Container>
    </Section>
  )
}

export default memo(Solutions)
