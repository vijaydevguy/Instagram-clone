import { Avatar, Flex, Text, Link } from "@chakra-ui/react"
import {Link as RouterLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

const SuggestedHeader = () => {
 
  const navigate = useNavigate();

  const handleNavigate = (username) => {
    navigate(`/${username}`);
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"lg"} src="/src/public/profilepic.png"/>
        <Text fontSize={12} fontWeight={"bold"} cursor={"pointer"} onClick={() => handleNavigate("asaprogrammer_")}>
            asaprogrammer_
        </Text >
      </Flex>

      <Link
      as={RouterLink} 
      to="/auth"
      fontSize={14}
      fontWeight={"medium"}
      color={"blue.400"}
      style={{textDecoration: "none"}}
      cursor={"pointer"}
      >
        Logout
      </Link>
    </Flex>
  )
}

export default SuggestedHeader
