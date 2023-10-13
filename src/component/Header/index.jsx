import { Flex, Image } from '@chakra-ui/react';

const Header = (props) => {
    return <>
        <Flex justify={'space-between'} align={'center'} h={'80px'} bg={'whitesmoke'} position={'fixed'} w={'100vw'} pl={'25px'} pr={'100px'} backdropBlur={'3xl'} zIndex={'1'}>
            <Image src="./z.png" alt="logo" w={'50px'} />
            {props.children}
        </Flex>
    </>
};

export default Header;