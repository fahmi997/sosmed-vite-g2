import { Avatar, Box, Button, Flex, Heading, Textarea } from "@chakra-ui/react";
import { secondaryColor, primaryColor } from "../../../public/color";
import { BsCardImage, BsMic, BsEmojiSmile } from "react-icons/bs"

const PostInput = () => {
    return <>
        <Box display={'inline-flex'} w={'100%'}>
            <Avatar size='lg' src='https://bit.ly/dan-abramov' />
            <Textarea ml={'15px'} placeholder="What happend today?" resize={'none'} h={'150px'} variant={'unstyled'}></Textarea>
        </Box>
        <Flex h={'80px'} align={'center'} justify={'space-between'} p={'10px 15px'}>
            <Flex w={'200px'} color={secondaryColor} justify={'space-between'}>
                <BsCardImage size={'35px'} />
                <BsMic size={'35px'} />
                <BsEmojiSmile size={'35px'} />
            </Flex>
            <Button bgColor={primaryColor} rounded={'9999px'} color={'white'} w={'100px'}>POST</Button>
        </Flex>
        <Flex align={'center'} justify={'start'} pl={'30px'} mb={'25px'}>
            <Heading color={'blackAlpha.300'} size={'3xl'}>What's Happening</Heading>
        </Flex>
    </>
};

export default PostInput;