import { TypographyProps } from 'components/Text'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export default styled.h3<Pick<TypographyProps, 'align'>>`
  ${({ align = 'left' }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.title};
    font-weight: 500;
    text-align: ${align};

    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`
