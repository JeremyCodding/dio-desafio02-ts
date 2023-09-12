import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' display={'flex'} flexDirection={'column'} justifyContent='space-between'>
      <Header />
      <Box display={'flex'} justifyContent={'center'} alignItems={'flex-start'} height={'100%'} flex={1}>
        { children }
      </Box>
      <Footer />
    </Box>
  )
}
