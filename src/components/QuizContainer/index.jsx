import styled from 'styled-components'

const QuizContainer = styled.div`
  flex: 1 auto;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 1rem;
  }
`

export default QuizContainer
