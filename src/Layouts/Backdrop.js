import React from "react";
import Box from "@material-ui/core/Box";
import withWidth from "@material-ui/core/withWidth";
// import { ReactComponent as BgBottomDesktop } from "../Assets/bg-pattern-bottom-desktop.svg";
import BgBottomDesktop from "../Assets/bg-pattern-bottom-desktop.svg";
import BgTopDesktop from "../Assets/bg-pattern-top-desktop.svg";

import BgBottommobile from "../Assets/bg-pattern-bottom-mobile.svg";
import BgTopmobile from "../Assets/bg-pattern-top-mobile.svg";

const Backdrop = ({ width }) => {
  let componentReturn = null;
  if (width === "xs") {
    componentReturn = (
      <>
        <Box position="fixed" top={0} left={0} width="100vw" height="30vh">
          <img
            src={BgTopmobile}
            alt="bg-top-mobile"
            width="100%"
            height="100%"
          />
        </Box>
        <Box position="fixed" bottom={0} right={0} width="100vw" height="100vh">
          <img
            src={BgBottommobile}
            alt="bg-bottom-mobile"
            width="100%"
            height="100%"
          />
        </Box>
      </>
    );
  } else {
    componentReturn = (
      <>
        <Box position="absolute" top={0} left={0}>
          <img
            src={BgTopDesktop}
            alt="bg-top-desktop"
            width="100%"
            height="auto"
          />
        </Box>
        <Box position="absolute" bottom={0} right={0}>
          <img
            src={BgBottomDesktop}
            alt="bg-bottom-desktop"
            width="100%"
            height="auto"
          />
        </Box>
      </>
    );
  }
  return componentReturn;
};

export default withWidth()(Backdrop);
