import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import withWidth from "@material-ui/core/withWidth";
import Img_anne from "../Assets/image-anne.jpg";
import Img_irene from "../Assets/image-irene.jpg";
import Img_colton from "../Assets/image-colton.jpg";

const Users = (props) => {
  console.log("aprops.width", props.width);
  return (
    <Box>
      <Grid container spacing={2} justify="center" alignItems="center">
        {[
          {
            name: "Colton Smith ",
            photo: Img_colton,
            verfieid: "Verified Buyer",
            details: `"We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"`
          },

          {
            name: "Irene Roberts ",
            photo: Img_irene,
            verfieid: "Verified Buyer",
            details: `"Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."`
          },

          {
            name: "Anne Wallace ",
            photo: Img_anne,
            verfieid: "Verified Buyer",
            details: `"Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"`
          }
        ].map(({ name, verfieid, details, photo }, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Box
              bgcolor="primary.main"
              p={2}
              borderRadius={5}
              marginTop={
                props.width === "sm" || props.width === "xs" ? 0 : i * 5
              }
            >
              <CardHeader
                avatar={<Avatar aria-label={name} src={photo} />}
                title={name}
                subheader={verfieid}
              />
              <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                  {details}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default withWidth()(Users);
