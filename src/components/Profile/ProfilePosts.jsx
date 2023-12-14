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
            <ProfilePost img="https://images.pexels.com/photos/4301702/pexels-photo-4301702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <ProfilePost img="https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <ProfilePost img="https://images.pexels.com/photos/1376042/pexels-photo-1376042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <ProfilePost img="https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </>
        )}
     
    </Grid>
  )
}

export default ProfilePosts
