import styled from "styled-components";
import { breakpoints, colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  background-color: ${colors.brownDeep};
  color: ${colors.orangeDark};
  padding: 128px 0;
  text-align: center;

  h2 {
    font-size: 40px;
  }

  ul {
    padding: 64px 8px;
    display: flex;
    gap: 24px;

    li {
      border-radius: 24px;
      border: 1px solid ${colors.orangeDark};
      padding: 16px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }

      h3 {
        font-size: 32px;
        padding-bottom: 16px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 96px 0;

    h2 {
      font-size: 36px;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 8px 24px;

      li {
        h3 {
          font-size: 24px;
        }
      }
    }
  }
`
