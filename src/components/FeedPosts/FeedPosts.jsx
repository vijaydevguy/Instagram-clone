import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useState, useEffect } from 'react'

const FeedPosts = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
  
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
   
  }, [])
  

  return (
    <Container maxW={"container.sm"} py={10} px={2}>

      {isLoading && [0,1,2,3].map((_, index) => (
        <VStack key={index} 
        gap={4} 
        alignItems={"flex-start"} 
        mb={10}
        > 
          <Flex gap={"2"}>
            <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton height='10px' w={'200px'} />
                <Skeleton height='10px' w={'100px'} />
              </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>Contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && (
        <>
          <FeedPost 
          img="https://images.pexels.com/photos/14755738/pexels-photo-14755738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" username="burakorkmezz" avatar="https://images.pexels.com/photos/14755738/pexels-photo-14755738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <FeedPost 
          img="https://images.pexels.com/photos/12454043/pexels-photo-12454043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" username="josh" avatar="https://images.pexels.com/photos/12454043/pexels-photo-12454043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <FeedPost 
          img="https://images.pexels.com/photos/14617568/pexels-photo-14617568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" username="janedoe" avatar="https://images.pexels.com/photos/14617568/pexels-photo-14617568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <FeedPost 
          img="https://images.pexels.com/photos/13577674/pexels-photo-13577674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" username="johndoe" avatar="https://images.pexels.com/photos/13577674/pexels-photo-13577674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </>
      )}
      

    </Container>
  )
}

export default FeedPosts
