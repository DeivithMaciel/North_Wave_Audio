import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.header`
  background: linear-gradient(
    140deg,
    ${colors.orangeLight},
    ${colors.orangeMain},
    ${colors.orangeDark},
    ${colors.brownDark},
    ${colors.brownDeep},
    ${colors.black}
  );
  color: ${colors.gray};
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-weight: bold;

  position: fixed;
  top: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  &.show {
    transform: translateY(0);
  }
  &.hide {
    transform: translateY(-100%);
  }

  h1 {
    padding-left: 64px;
    cursor: pointer;
    color: ${colors.brownDeep};

    a {
      color: inherit;
      text-decoration: none;
    }
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
        background-color: ${colors.brownDark};
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h1 {
      padding-left: 8px;
    }

    ul {
      padding-right: 8px;

      li {
        font-size: 18px;
      }
    }
  }
`
