import { Container } from "@chakra-ui/react"

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <Container>
      <h1>Card {id}</h1>
      <p>{paragraph}</p>
      <p>{details}</p>
    </Container>
  )
}