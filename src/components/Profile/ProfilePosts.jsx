import { Grid, Skeleton, VStack, Box, } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import ProfilePost from "./ProfilePost"

const ProfilePosts = () => {

  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])
  

  return (
    <Grid templateColumns={{sm:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} 
    gap={1}
    columnGap={1}>

        {isLoading && [0,1,2,3,4,5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>

              <Skeleton w={"full"}>
                 <Box h={"300px"}
                 >
                    contents wrapped
                 </Box>
              </Skeleton>

          </VStack>

        ))}

        {!isLoading && (
          <>
            <ProfilePost img="/src/public/img8.jpg" />
            <ProfilePost img="/src/public/img6.jpg"/>
            <ProfilePost img="/src/public/img7.jpg"/>
            <ProfilePost img="/src/public/img10.jpg"/>
          </>
        )}
     
    </Grid>
  )
}

export default ProfilePosts
