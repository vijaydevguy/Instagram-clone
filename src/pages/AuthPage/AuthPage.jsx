import { Container,Flex, VStack, Image, Box } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
   <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
    <Container maxW={"container.md"} padding={0} >
      <Flex justifyContent={"center"} alignItems={"center"} gap={10}> 
        
        {/* Left side */}
        <Box display={{base:"none", md:"block"}}>
            <Image src="/src/public/auth.png" h={650} alt="Phone img"/>
        </Box>

        
        {/* Right side */}
        {/* vstack is useful for stacking items one by one also it is working like a flex */}
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
          <Box textAlign={"center"}>Get the app</Box>
          <Flex gap={5} justifyContent={"Center"}>
            <Image src="/src/public/playstore.png" h={"10"} alt="Playstore logo"/>
            <Image src="/src/public/microsoft.png" h={"10"} alt="microsoft logo"/>

          </Flex>
        </VStack>
        
      </Flex>

    </Container>
   </Flex>
   
  )
}

export default AuthPage
