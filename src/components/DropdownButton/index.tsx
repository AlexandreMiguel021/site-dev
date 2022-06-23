import { ExternalLinkIcon } from 'assets/icons'
import Text from 'components/Text'
import Link from 'next/link'
import React from 'react'
import { Button, ExternalLink, Icon, Info, Wrapper } from './styles'

export type DropdownButtonProps = {
  title: string
  url: string
  description: string
  icon: React.ReactNode
  withIconLink: boolean
}

const DropdownButton = (props: DropdownButtonProps) => {
  const { description, title, url, icon, withIconLink } = props

  return (
    <Link href={url} target={withIconLink ? '_blank' : '_self'}>
      <Button>
        <Wrapper>
          <Icon>{icon}</Icon>
          <Info>
            <Text component="h4" size="large" color="title" weigth="bold">
              {title}
            </Text>
            <Text component="span">{description}</Text>
          </Info>
          {withIconLink && (
            <ExternalLink>
              <ExternalLinkIcon />
            </ExternalLink>
          )}
        </Wrapper>
      </Button>
    </Link>
  )
}

export default DropdownButton
