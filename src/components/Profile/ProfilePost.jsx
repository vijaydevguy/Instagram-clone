import { GridItem, Flex, Text, Image ,useDisclosure, Box, Avatar, Divider, VStack } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { AiFillHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaComment } from "react-icons/fa";

import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter"


const ProfilePost = ({img}) => {

   const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
    <GridItem
    cursor={"pointer"}
    borderRadius={4}
    overflow={"hidden"}
    border={"1px solid "}
    borderColor={"whiteAlpha.300"}
    position={"relative"}
    aspectRatio={1/1}
    onClick={onOpen}
    >

        <Flex
        opacity={0}
        _hover={{opacity:1}}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={"blackAlpha.700"}
        transition={"all 0.3s ease"}
        zIndex={1}
        justifyContent={"center"}
        >

            <Flex justifyContent={"cetner"} alignItems={"center"} gap={50}>
                <Flex alignItems={"center"}>
                    <AiFillHeart size={20}/>
                    <Text fontweight={"bold"} ml={2}>
                        7
                    </Text>
                </Flex>

                <Flex alignItems={"center"}>
                    <FaComment size={20}/>
                    <Text fontweight={"bold"} ml={2}>
                        16
                    </Text>
                </Flex>
            </Flex>
        </Flex>
      <Image src={img} alt="Profile Post" w={"100%"} h={"100%"} objectFit={"cover"}/>
    </GridItem>

    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:"3xl", md:'5xl'}}>
        <ModalOverlay />
        <ModalContent>
            <ModalCloseButton />
            <ModalBody bg={"black"} pb={5}>
                <Flex gap={4} w={{base:"90%", sm:"70%", md:"full"}} mx={"auto"}>
                    <Box
                    borderRadius={4}
                    overflow={"hidden"}
                    border={"1px solid "}
                    borderColor={"whiteAlpha.300"}
                    flex={1.5}
                    >
                        <Image src={img} alt="Profile post"/>
                    </Box>
                    <Flex
                    flex={1}
                    flexDir={"column"}
                    px={10}
                    display={{base:"none", md:"flex"}}
                    >
                        <Flex alignItems={"center"} justifyContent={"space-between"}>

                        <Flex alignItems={"center"} gap={4}>
                            <Avatar src="/src/public/profilepic.png"
                            size={"sm"}
                            name="As a Programmer"
                            />
                            <Text fontWeight="bold" fontSize={12}>
                                asaprogrammer_
                            </Text>
                        </Flex>

                        <Box _hover={{bg:"whiteAlpha.300", color:"red.600"}} borderRadius={4} p={1}>
                            <MdDelete size={20} cursor={"pointer"}/>
                        </Box>

                        </Flex>

                        <Divider my={4} bg={"gray.500"}/>

                        <VStack w="full" alignItems={"start"} maxH={"350px"} overflowY={"auto"}>

                            <Comment 
                            createdAt="1d ago"
                            username="asaprogrammer_"
                            profilePic="/src/public/img1.png"
                            text={"Nice pic"}
                            />

                            <Comment 
                            createdAt="12h ago"
                            username="abrahmov"
                            profilePic='/src/public/img2.png'
                            text="It looks pretty"
                            />

                            <Comment 
                            createdAt="1min ago"
                            username="kentdodds"
                            profilePic='/src/public/img4.jpg'
                            text="Just gorgeous"
                            />  
                             <Comment 
                            createdAt="1d ago"
                            username="asaprogrammer_"
                            profilePic="/src/public/profilepic.png"
                            text={"Nice pic"}
                            />

                            <Comment 
                            createdAt="12h ago"
                            username="abrahmov"
                            profilePic='/src/public/img2.png'
                            text="It looks pretty"
                            />

                            <Comment 
                            createdAt="1min ago"
                            username="kentdodds"
                            profilePic='/src/public/img4.jpg'
                            text="Just gorgeous"
                            />  
                             <Comment 
                            createdAt="1d ago"
                            username="asaprogrammer_"
                            profilePic="/src/public/profilepic.png"
                            text={"Nice pic"}
                            />

                            <Comment 
                            createdAt="12h ago"
                            username="abrahmov"
                            profilePic='/src/public/img2.png'
                            text="It looks pretty"
                            />

                            <Comment 
                            createdAt="1min ago"
                            username="kentdodds"
                            profilePic='/src/public/img4.jpg'
                            text="Just gorgeous"
                            />  
                             <Comment 
                            createdAt="1d ago"
                            username="asaprogrammer_"
                            profilePic="/src/public/profilepic.png"
                            text={"Nice pic"}
                            />

                            <Comment 
                            createdAt="12h ago"
                            username="abrahmov"
                            profilePic='/src/public/img2.png'
                            text="It looks pretty"
                            />

                            <Comment 
                            createdAt="1min ago"
                            username="kentdodds"
                            profilePic='/src/public/img4.jpg'
                            text="Just gorgeous"
                            />  
                        </VStack>

                        <Divider my={4} bg={"gray.800"}/>

                        <PostFooter isProfilePage={true}/>

                    </Flex>
                </Flex>
            </ModalBody >
        </ModalContent>
        </Modal>
    </>
  )
}

export default ProfilePost
