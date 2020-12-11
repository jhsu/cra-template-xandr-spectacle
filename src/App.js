import React from "react";
import {
  Deck,
  Slide,
  Heading,
  FlexBox,
  UnorderedList,
  ListItem,
  Box,
} from "spectacle";
import ArrowHalf from "./Templates/ArrowHalf";
import HalfStack from "./Templates/HalfStack";

import theme from "./theme";

function App() {
  return (
    <Deck theme={theme} backgroundColor="primary">
      <Slide backgroundColor="backgroundColor">
        <ArrowHalf>
          <>hello</>
          <Box>Hello</Box>
        </ArrowHalf>
      </Slide>
      <Slide>
        <HalfStack>
          <Box>hello</Box>
          <Box>Hello</Box>
        </HalfStack>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <FlexBox
          flexDirection="row"
          alignContent="center"
          justifyContent="center"
          flex="1"
        >
          <FlexBox flex="1" paddingLeft={4}>
            <Heading textAlign="left" fontFamily="heading">
              Insert opening text here insert opening text here
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
            <Box>
              <UnorderedList>
                <ListItem color="textLight">
                  <strong>this is a title</strong>
                  <br />
                  First thing
                </ListItem>
                <ListItem color="textLight">Second Thing</ListItem>
                <ListItem color="textLight">
                  Third thing sdkljf sdklfj sdklfj sdklfj sdlfjsdl flsdk sdklfj
                  lsdk dklf
                </ListItem>
              </UnorderedList>
            </Box>
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>Welcome to Spectacle</Heading>
      </Slide>
    </Deck>
  );
}
export default App;
