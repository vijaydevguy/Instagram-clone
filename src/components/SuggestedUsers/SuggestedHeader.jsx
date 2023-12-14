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
        <Avatar name="As a Programmer" size={"lg"} src="https://images.pexels.com/photos/19408382/pexels-photo-19408382/free-photo-of-silhouettes-of-small-boys-looking-at-the-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
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
