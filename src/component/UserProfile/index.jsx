import { Box, Flex, Text, Image, Button, Stack, Avatar, Tabs, Tab, TabList, TabPanel, TabPanels, Container } from "@chakra-ui/react";
import { BiArrowBack, BiLike, BiComment, BiShare } from "react-icons/bi";
import PostCard from "../PostCard";
import { useSelector } from 'react-redux';



const UserProfile = () => {

  const posts = useSelector((state) => state.postReducer.post);
  
  return (

    <Container maxW="2xl">
    
      <Flex position={'absolute'} display="flex" boxShadow={'xl'} p={'10px 25px'} w={'700px'}flexDirection={"column"}  bg="white" >
        
        <Box display="flex" height="50" position="sticky" top="0" mt="2" bg="white" >
          <Box height="30" w="9" h="50" mr="5" >
            <BiArrowBack mx="auto" display="flex" />  
          </Box>
          <Box>
            <Text>Khans✨</Text>
            <Text fontSize={"small"}>10.1K posts</Text>
          </Box>
        </Box>

        <Box ml="3" >
          <Box display="flex" flexDirection="row" justifyContent="space-between" >
            <Box mt="3"> 
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EG5riByirde3MwMuf1t-dS6ziGY4JCUBog&usqp=CAU" w="100px" h="100px" mb="3" borderRadius="50%"/>
            </Box>
            <Button m="auto 0">Edit Profile</Button>
          </Box>
          
          <Box >
            <Text>Khans✨</Text>
            <Text mb="3">@username</Text>
            <Text>bio</Text>

            <Flex  mt="3">
              <Text mr="3">Born January 20, 2000</Text>
              <Text>Joined 2018</Text>
            </Flex>

            <Flex mb="3" mt="2">
                <Text mr="7" fontSize={"small"}>2,345 Following</Text>
                <Text fontSize={"small"}>2,345 Followers</Text>
            </Flex>

            <Flex mt="7"  >
            <Tabs>
              <TabList >
                <Tab>Posts</Tab>
                <Tab>Likes</Tab>
                <Tab>Media</Tab>
              </TabList>

              <TabPanels mt={'5'}>
                <TabPanel>
                  {posts.filter((post) => post.capt) // Filter post yang memiliki teks
                  .map((post) => (<PostCard key={post.id} text={post.capt} />))}
                </TabPanel>

                <TabPanel mt={'5'}>
                  <Text>Likes</Text>
                </TabPanel>

                <TabPanel mt={'5'}>
                  <Text>Media</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
              
              
              
            </Flex>
          </Box>
        </Box>

        

      </Flex>

    </Container>  
  );
};

export default UserProfile;

