import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

interface UlProps {
  $isMobile: boolean
}

export const Container = styled.div`
  background-color: ${colors.brownDeep};
  color: ${colors.orangeDark};
  padding: 48px 8px;
  text-align: center;

  h2 {
    font-size: 48px;
    padding-bottom: 48px;
  }
`

export const List = styled.ul<UlProps>`
  display: flex;
  justify-content: center;
  padding: 48px;
  gap: 48px;

  ${({ $isMobile }) =>
  $isMobile
    ? `
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  gap: 16px;
  padding: 16px;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    flex: 0 0 90%;
    scroll-snap-align: center;

    background-color: ${colors.brownDark};
    min-height: 420px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 8px;
    padding: 8px;
  }
`
      : `
    li {
      background-color: ${colors.brownDark};
      width: 280px;
      min-height: 420px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      text-align: center;
      border-bottom: 1px solid ${colors.orangeDark};
      border-top: 1px solid ${colors.orangeDark};
      border-radius: 8px;
      padding: 8px;
      cursor: pointer;

      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }
    }
  `}

  li img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
  }
`
