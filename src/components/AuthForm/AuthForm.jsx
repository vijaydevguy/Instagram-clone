import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
      email: "",
      password: "",
      confirmPassword : ""
    });

    // below console we can check the inputs functions are working properly or not.
    // console.log(inputs)
    const handleAuth = () => {
      // below code use to check the onclick it will return or not
      // console.log(inputs)

      if(!inputs.email || !inputs.password )
      {
        alert("Please fill all the fields")
        return;
      }
      navigate("/")
    }


  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src="https://social-app-asaprogrammer.vercel.app/logo.png" h={24} cursor={"pointer"} alt="Instagram logo"/>
            <Input 
                placeholder="Email"
                type="email"
                fontSize={14}
                value={inputs.email}
                onChange={(e) => setInputs({...inputs, email:e.target.value})}
                
            />
           
            <Input 
                placeholder="Password"
                type="password"
                fontSize={14}
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password:e.target.value})}
            />
            {!isLogin ? <Input placeholder="Confirm Password" fontSize={14} 
            type="password" 
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
            /> : null}

            <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
                {isLogin ? "Log in" : "Signup"}
            </Button>
            
            {/* -------OR------- text */}
            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
                <Text >OR </Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
            </Flex>

            <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                <Image src="https://social-app-asaprogrammer.vercel.app/google.png" w={5} alt="Google logo"/>
                <Text mx="2" color={"blue.500"}>Log in with google</Text>
            </Flex>
        </VStack>
      </Box>

      {/* ------------------ Switch between Login and signup ------------------*/}

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
          <Flex alignItems={"center"} justifyContent={"center"}>
             <Box mx={2} fontSize={14}>
              {isLogin ? "Don't have an account?" : "Already have an account"}
             </Box>
             <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
              {isLogin ? "Sign up" : "Log in"}
             </Box>
          </Flex>
      </Box>
    </>
  )
}

export default AuthForm
