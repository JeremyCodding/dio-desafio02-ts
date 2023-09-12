import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { LoginForm } from './components/LoginForm';
import { Layout } from './components/Layout';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <LoginForm />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
