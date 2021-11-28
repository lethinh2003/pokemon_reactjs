const Global = createGlobalStyle`
  container {
    background-color: ${({ theme }) => theme.background};
    transition: all 200ms;
  }
`