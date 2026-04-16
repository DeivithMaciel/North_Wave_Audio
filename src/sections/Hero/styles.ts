import styled from "styled-components";

import background from '../../assets/images/hero.png'
import { colors } from "../../styles/GlobalStyles";

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
    padding: 40px 0;
  }

  span {
    padding-left: 16px;
  }

  form {
    display: flex;
    padding: 16px;
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
`
