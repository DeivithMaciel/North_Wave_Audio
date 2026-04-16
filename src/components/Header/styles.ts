import styled from 'styled-components'

import { colors } from '../../styles/GlobalStyles'

export const Container = styled.header`
  background: linear-gradient(
    140deg,
    ${colors.orangeDark},
    ${colors.orangeMain},
    ${colors.orangeLight}
  )
  ;
  color: ${colors.gray};
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-weight: bold;

  h1 {
    padding-left: 64px;
    cursor: pointer;
  }

  ul {
    display: flex;
    padding-right: 64px;
    gap: 24px;

    li {
      font-size: 24px;
      padding: 8px;
      border-radius: 8px;

      &:hover {
        background-color: ${colors.orangeDark};
      }
    }
  }
`
