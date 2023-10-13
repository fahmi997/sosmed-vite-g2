/* eslint-disable react/no-unknown-property */
import { Avatar, Box, Container, Flex, Grid, GridItem, HStack, Image, Popover, PopoverContent, PopoverTrigger, StackDivider, Text, VStack } from "@chakra-ui/react";
import { primaryColor, secondaryColor, bgColor, secTextColor, secondBgColor } from "../../../public/color";
import { MdVerified } from "react-icons/md"
import { AiOutlineDown, AiOutlineVerified } from "react-icons/ai";
import { useDisclosure } from "@chakra-ui/react";


const TimelinePage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return <>
        <Grid
            templateAreas={`"header header header"
                            "nav main side"
                            "footer footer footer"`}
            gridTemplateRows={'65px 850px'}
            gridTemplateColumns={'150px 1fr 30px'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            bg={bgColor}
        >
            <GridItem area={'header'} >

                <Flex justify={'space-between'} align={'center'} h={'100%'}>
                    <Image src="./z.png" alt="logo" w={'50px'} />
                    <VStack>
                        <Popover>
                            <PopoverTrigger>
                                <Box display={'inline-flex'} alignItems={'center'} border={'1px'} borderColor={'blackAlpha.400'} borderRadius={'9999px'} w={'235px'} justifyContent={'space-between'} pr={'8px'} cursor={'pointer'} onClick={onOpen}>
                                    <Avatar size='md' src='https://bit.ly/dan-abramov' />
                                    <Text>Fahmi Ardiansyah</Text>
                                    <AiOutlineDown />
                                </Box>
                            </PopoverTrigger>
                            <PopoverContent bg={secondBgColor} w={'235px'} color={'whiteAlpha.900'} borderColor={secondBgColor} p={'15px 10px'}>
                            <VStack divider={<StackDivider borderColor='gray.200' />} align={'start'}>
                                <Box>
                                    <Box display={'inline-flex'} alignItems={'center'}><MdVerified /><Text as={'b'} fontStyle={'italic'}>Verified</Text></Box>
                                    <Text>fahmi@mail.com</Text>
                                </Box>
                                <Box>
                                    <Text>Dashboard</Text>
                                    <Text>Setting</Text>
                                </Box>
                                <Box>
                                    <Text>Sign Out</Text>
                                </Box>
                            </VStack>
                            </PopoverContent>
                        </Popover>
                        <Box bg={secondBgColor} w={'235px'} position={'absolute'} top={'60px'} rounded={'md'} color={'whiteAlpha.900'} p={'15px 10px'} display={'none'}>
                            <VStack divider={<StackDivider borderColor='gray.200' />} align={'start'}>
                                <Box>
                                    <Box display={'inline-flex'} alignItems={'center'}><MdVerified /><Text as={'b'} fontStyle={'italic'}>Verified</Text></Box>
                                    <Text>fahmi@mail.com</Text>
                                </Box>
                                <Box>
                                    <Text>Dashboard</Text>
                                    <Text>Setting</Text>
                                </Box>
                                <Box>
                                    <Text>Sign Out</Text>
                                </Box>
                            </VStack>
                        </Box>

                    </VStack>
                </Flex>
            </GridItem>
            <GridItem pl='2' bg='pink.300' area={'nav'}>
                Nav
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'}>
                Main
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'side'}>
                Side
            </GridItem>
        </Grid>
    </>
};

export default TimelinePage;