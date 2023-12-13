import { Flex, AvatarGroup, Avatar, VStack, Text, Button} from "@chakra-ui/react"

const ProfileHeader = () => {


  return (

      

    <Flex gap={{base:4, sm:10}} py={10} direction={{base:"column", sm:"row"}}>
      <AvatarGroup
        size={{base:"xl", md:"2xl"}}
        justifyContent={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar src="/src/public/profilepic.png" name="As a programmer" alt="As a programmer logo">
        </Avatar>
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex gap={4} 
        direction={{base:"column", sm:"row"}}
        justifyContent={{base:"center", sm:"flex-start"}}
        alignItems={"center"}
        w={"full"}
        >
          <Text
          fontSize={{base:"sm", md:"lg"}}
          >
              asaprogrammer_
          </Text>

          <Flex
          gap={4}
          alignItems={"center"}
          justifyContent={"center"}
          >
            <Button
            bg={"white"}
            color={"black"}
            _hover={{bg:"whiteAlpha.800"}}
            size={{base:"xs", md:"sm"}}
            
            >Edit Profile</Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"}
        gap={{base:2, sm:4}}
        >
          <Text fontSize={{base:"xs", md:"sm"}}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>4</Text>
            Posts
          </Text>

          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>149</Text>
            Followers
          </Text>

          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>5</Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>As a Programmer</Text>
        </Flex>
        <Text fontSize={"sm"} >Whatever it is think is far better than start doing.</Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader
