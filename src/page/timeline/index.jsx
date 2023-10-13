/* eslint-disable react/no-unknown-property */
import { Avatar, Box, Button, Container, Flex, Grid, GridItem, HStack, Heading, Image, Popover, PopoverContent, PopoverTrigger, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from "@chakra-ui/react";
import { primaryColor, secondaryColor, bgColor, secTextColor, secondBgColor } from "../../../public/color";
import { IoPersonAdd } from "react-icons/io5"
import { BsCardImage, BsMic, BsEmojiSmile } from "react-icons/bs"
import LayoutTimeline from "../../component/LayoutTimeline";
import Header from "../../component/Header";
import AvatarNav from "../../component/AvatarNav";
import SideNav from "../../component/SideNav";
import PostCard from "../../component/PostCard";
import PostInput from "../../component/PostInput";


const TimelinePage = () => {

    return <>
        <LayoutTimeline>
            <Header>
                <AvatarNav />
            </Header>
            <Flex h={'90vh'} w={'100%'} mt={'80px'} overflowX={'hidden'}>
                <Tabs display={'flex'} flex={'1'} variant={'unstyled'} colorScheme="orange">
                    <Flex flex={'1'} flexDirection={'row'}>
                        <SideNav/>
                        {/* POST */}
                        <Flex ml={'380px'} boxShadow={'xl'} p={'10px 25px'} >
                            <TabPanels>
                                <TabPanel p={'0'}>
                                    <PostInput/>
                                    <PostCard />
                                    
                                </TabPanel>
                            </TabPanels>
                        </Flex>

                    </Flex>
                </Tabs>
                {/* Who to follow */}
                <Flex w={'500px'} justify={'center'}>
                    <Flex w={'300px'} mt={'20px'} rounded={'md'} boxShadow={'lg'} position={'fixed'} p={'15px 20px'} bgColor={primaryColor} flexDirection={'column'}>
                        <Heading size={'lg'} color={'white'}>Who to follow</Heading>
                        <Flex bgColor={'white'} h={'60px'} w={'100%'} mt={'10px'} rounded={'lg'} boxShadow={'xl'} p={'10px'} align={'center'}>
                            <Avatar size='sm' src='https://bit.ly/dan-abramov' />
                            <Box overflow={'hidden'} mr={'10px'} ml={'15px'} w={'150px'} ><Text>Fahmi Ardiansyah</Text></Box>
                            <IoPersonAdd size={'25px'} />
                        </Flex>
                        <Flex bgColor={'white'} h={'60px'} w={'100%'} mt={'10px'} rounded={'lg'} boxShadow={'xl'} p={'10px'} align={'center'}>
                            <Avatar size='sm' src='https://bit.ly/dan-abramov' />
                            <Box overflow={'hidden'} mr={'10px'} ml={'15px'} w={'150px'} ><Text>Fahmi Ardiansyah</Text></Box>
                            <IoPersonAdd size={'25px'} />
                        </Flex>
                        <Flex bgColor={'white'} h={'60px'} w={'100%'} mt={'10px'} rounded={'lg'} boxShadow={'xl'} p={'10px'} align={'center'}>
                            <Avatar size='sm' src='https://bit.ly/dan-abramov' />
                            <Box overflow={'hidden'} mr={'10px'} ml={'15px'} w={'150px'} ><Text>Fahmi Ardiansyah</Text></Box>
                            <IoPersonAdd size={'25px'} />
                        </Flex>
                        <Flex mt={'15px'} align={'center'} justify={'center'}>
                            <Text color={'whiteAlpha.700'}>See more</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </LayoutTimeline>
    </>
};

export default TimelinePage;