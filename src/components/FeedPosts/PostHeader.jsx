import { Flex, Box, Avatar, Text } from "@chakra-ui/react"
import { useState } from "react"


const PostHeader = ({username,avatar}) => {

  const [isFollowed, setIsFollowed] = useState(false)

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
      <Flex alignItems={"center"} gap={2}>
          <Avatar src={avatar} alt={username} size={"sm"}/>
          <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            {username}
              <Box color={"gray.500"}>
               • 1w
              </Box>
          </Flex>
      </Flex>
              <Box
              cursor={"pointer"}
              >
                <Text fontSize={12}
                color={"blue.500"}
                fontWeight={"bold"}
                _hover={{
                  color:"white"
                }}
                transition={".2s ease-in-out"}

                onClick={() => setIsFollowed(!isFollowed)}
                >
                      {
                      isFollowed ?
                      "Unfollow" : "Follow"
                      }
                </Text>
              </Box>
    </Flex>
  )
}

export default PostHeader
