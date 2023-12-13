import { VStack , Flex, Text, Box, Link} from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={8} gap={4} >
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser name="Dan Abrahmov" followers={1465} avatar="https://bit.ly/sage-adebayo"/>
        <SuggestedUser name='Ryan Florence' followers={3734} avatar='https://bit.ly/ryan-florence'/>
        <SuggestedUser name='Kent Dodds' followers={5743} avatar='https://bit.ly/kent-c-dodds'/>

        <Box fontSize={12} color={"Gray.500"} mt={5} alignSelf={"start"}>
            @ 2023 Built By vijay{" "}
            <Link href="https://github.com/vijaydevguy?tab=repositories" target="_blank" color={"blue.500"} fontSize={14}>
                Developments
            </Link>
        </Box>

        
    </VStack>
  )
}

export default SuggestedUsers
