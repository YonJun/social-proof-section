import React from "react";
import Grid from "@material-ui/core/Grid";
import SvgIcon from "@material-ui/core/SvgIcon";
import Box from "@material-ui/core/Box";
import withWidth from "@material-ui/core/withWidth";
import { ReactComponent as StarIcon } from "../Assets/icon-star.svg";

const Rank = (props) => {
  return (
    <Box>
      <Grid container spacing={2} justify="flex-end" alignItems="center">
        {[
          {
            label: "Rated 5 Stars in Reviews",
            md: 12,
            width: 500
          },
          {
            label: "Rated 5 Stars in Report Guru",
            md: 11,
            width: 500
          },
          {
            label: "Rated 5 Stars in BestTech",
            md: 10,
            width: 500
          }
        ].map(({ label, width, md }, i) => (
          <Grid key={i} item xs={12} md={md}>
            <Box
              bgcolor="primary.light"
              width={
                props.width === "sm" || props.width === "xs" ? "100%" : width
              }
              p={2}
              borderRadius={5}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {[...new Array(5)].map((_, i) => (
                      <SvgIcon
                        key={i}
                        component={StarIcon}
                        viewBox="0 0 20 20"
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    display="flex"
                    alignItems="center"
                    color="primary.main"
                    justifyContent="center"
                  >
                    <b>{label}</b>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default withWidth()(Rank);
