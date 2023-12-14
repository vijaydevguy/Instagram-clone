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
                            <Avatar src="https://images.pexels.com/photos/19408382/pexels-photo-19408382/free-photo-of-silhouettes-of-small-boys-looking-at-the-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                            profilePic="https://images.pexels.com/photos/166054/pexels-photo-166054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            text={"Nice pic"}
                            />

                            <Comment 
                            createdAt="12h ago"
                            username="abrahmov"
                            profilePic='https://images.pexels.com/photos/1191146/pexels-photo-1191146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text="It looks pretty"
                            />

                            <Comment 
                            createdAt="1min ago"
                            username="kentdodds"
                            profilePic='https://images.pexels.com/photos/15637873/pexels-photo-15637873/free-photo-of-a-motorcycle-parked-on-the-side-of-the-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text="Just gorgeous"
                            />  
                             <Comment 
                            createdAt="1d ago"
                            username="asaprogrammer_"
                            profilePic="https://images.pexels.com/photos/16139161/pexels-photo-16139161/free-photo-of-a-man-in-a-helmet-and-black-shirt-riding-a-motorcycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            text={"Nice pic"}
                            />

                            <Comment 
                            createdAt="12h ago"
                            username="abrahmov"
                            profilePic='https://images.pexels.com/photos/15506493/pexels-photo-15506493/free-photo-of-two-motorcycles-parked-next-to-each-other-in-a-dark-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text="It looks pretty"
                            />

                            <Comment 
                            createdAt="1min ago"
                            username="kentdodds"
                            profilePic='https://images.pexels.com/photos/2056949/pexels-photo-2056949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text="Just gorgeous"
                            />  
                             <Comment 
                            createdAt="1d ago"
                            username="asaprogrammer_"
                            profilePic="https://images.pexels.com/photos/4767718/pexels-photo-4767718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            text={"Nice pic"}
                            />

                            <Comment 
                            createdAt="12h ago"
                            username="abrahmov"
                            profilePic='https://images.pexels.com/photos/8343564/pexels-photo-8343564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text="It looks pretty"
                            />

                            <Comment 
                            createdAt="1min ago"
                            username="kentdodds"
                            profilePic='https://media.istockphoto.com/id/1397957782/photo/young-woman-on-the-balcony-wearing-summer-clothes-and-a-hat.jpg?s=1024x1024&w=is&k=20&c=49U60F3vOJUpjYVygSLTGsj-iXmKA2fKjhvgHQ71IMI='
                            text="Just gorgeous"
                            />  
                             <Comment 
                            createdAt="1d ago"
                            username="asaprogrammer_"
                            profilePic="https://media.istockphoto.com/id/531464261/photo/closeup-portrait-of-beautiful-blond-girl.jpg?s=1024x1024&w=is&k=20&c=IYAvJZQ7IMmxhKgwr3CDqgLKPH1ysTaNSrFmB_TGnKk="
                            text={"Nice pic"}
                            />

                            <Comment 
                            createdAt="12h ago"
                            username="abrahmov"
                            profilePic='https://images.pexels.com/photos/303316/pexels-photo-303316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text="It looks pretty"
                            />

                            <Comment 
                            createdAt="1min ago"
                            username="kentdodds"
                            profilePic='https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
