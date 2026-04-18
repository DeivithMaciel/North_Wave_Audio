import styled from "styled-components";

import background from '../../assets/images/hero.png'
import { breakpoints, colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${colors.whiteSoft};

  padding-top: 160px;

  div {
    padding: 72px;
    max-width: 760px;
  }

  h2 {
    font-size: 48px;
    text-align: center;
    font-weight: 900;
  }

  h4 {
    font-size: 18px;
    padding: 64px 0;
  }

  span {
    padding-left: 16px;
  }

  form {
    display: flex;
    padding: 16px 16px 56px;
    gap: 48px;

    input {
      background-color: ${colors.orangeMain};
      color: ${colors.whiteCream};
      padding: 16px 128px;
      padding-left: 16px;
      border: none;
      border-radius: 16px;

      &::placeholder {
        color: ${colors.whiteSoft};
        font-weight: bold;
        font-size: 16px;
      }
    }

    button {
      background-color: ${colors.brownDark};
      color: ${colors.whiteCream};
      border: none;
      padding: 8px 24px;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        filter: brightness(1.3);
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    div {
      padding: 16px;
      max-width: 480px;
    }

    h2 {
      font-size: 36px;
      text-align: left;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;

    h2 {
      text-align: center;
    }

    form {
      flex-direction: column;

      input:: placeholder {
      font-size: 14px;
      }
    }
  }
`
