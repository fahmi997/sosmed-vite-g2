import { Flex } from "@chakra-ui/react";

const LayoutTimeline = (props) =>{
    return <>
        <Flex w={'100vw'} bgColor={'whitesmoke'} flexDirection={'column'} >
            {props.children}
        </Flex>
    </>
}

export default LayoutTimeline;