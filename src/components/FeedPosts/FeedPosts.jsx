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
          img="/src/public/img5.jpg" username="burakorkmezz" avatar="/src/public/img5.jpg"
          />
          <FeedPost 
          img="/src/public/img6.jpg" username="josh" avatar="/src/public/img6.jpg"
          />
          <FeedPost 
          img="/src/public/img3.jpg" username="janedoe" avatar="/src/public/img3.jpg"
          />
          <FeedPost 
          img="/src/public/img4.jpg" username="johndoe" avatar="/src/public/img4.jpg"
          />
        </>
      )}
      

    </Container>
  )
}

export default FeedPosts
