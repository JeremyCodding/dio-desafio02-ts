import { Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from "../../services/login"

export const LoginForm = () => {
    return <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
    <Center>
      <h1>Faça o login</h1>
    </Center>
    <Input placeholder="email" />
    <Input placeholder="password" />
    <Center>
      <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        Button
      </Button>
    </Center>
  </Box>
}