import { PropsWithChildren } from "react";
import MainNav from "@/components/Nav/MainNav";
import { Box, Grid, Typography } from "@mui/material";
import "@/components/PageTemplates/BasePageTemplate.module.scss";

export default function BasePageTemplate({ children }: PropsWithChildren<{}>) {
  return (
    <Box>
      <Box p={1} ml={1}><Typography variant="h1">Nick&apos;s Digital Consulting</Typography></Box>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <MainNav />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box mt={1.5} className="main" component="main" sx={
            {
              '@media screen and (max-width: 599px)': {
                padding: '0px 16px'
              }
            }
          }>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
