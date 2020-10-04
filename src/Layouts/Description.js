import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";

const Description = (props) => {
  return (
    <Box
      textAlign={
        props.width === "sm" || props.width === "xs" ? "center" : "left"
      }
    >
      <Typography variant="h3" color="primary" gutterBottom>
        <b>10,000+ of our users love our products.</b>
      </Typography>

      <Typography variant="body1" color="secondary" paragraph={true}>
        <b>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </b>
      </Typography>
    </Box>
  );
};
export default withWidth()(Description);
