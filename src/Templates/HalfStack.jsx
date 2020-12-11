import React from "react";
import { FlexBox, Heading, Text } from "spectacle";

const HalfStack = ({ children }) => {
  const [top, bottom] = React.Children.toArray(children);
  return (
    <FlexBox
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      flex="1"
    >
      <FlexBox flex="1" width="100%">
        <Heading textAlign="left" fontFamily="heading">
          {top}
        </Heading>
      </FlexBox>
      <FlexBox
        width="100%"
        flex="1"
        backgroundColor="primary"
        color="textLight"
        height="100%"
        padding={5}
      >
        <Text color="textLight">{bottom}</Text>
      </FlexBox>
    </FlexBox>
  );
};
export default HalfStack;
