import React from "react";
import { FlexBox, Heading, Text } from "spectacle";
import theme from "../theme";

const ArrowHalf = ({ children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <FlexBox
      flexDirection="row"
      alignContent="center"
      justifyContent="center"
      flex="1"
    >
      <FlexBox flex="1" paddingLeft={4}>
        <Heading textAlign="left" fontFamily="heading">
          {left}
        </Heading>
      </FlexBox>
      <FlexBox height="100%">
        <svg
          style={{ overflow: "visible" }}
          height="100%"
          width="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="-100,0 101,0 101,100 -100,100 100, 50"
            style={{ fill: theme.colors.primary }}
          />
        </svg>
      </FlexBox>
      <FlexBox
        flex="1"
        backgroundColor="primary"
        color="textLight"
        height="100%"
        padding={5}
      >
        <Text color="textLight">{right}</Text>
      </FlexBox>
    </FlexBox>
  );
};
export default ArrowHalf;
