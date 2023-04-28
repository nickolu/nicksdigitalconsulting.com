import { PropsWithChildren } from "react";
import MainNav from "@/components/Nav/MainNav";
import { Box, Grid, Typography } from "@mui/material";

export default function BasePageTemplate({ children }: PropsWithChildren<{}>) {
  return (
    <Box>
      <Box p={1} ml={1}><Typography variant="h1">Nick&apos;s Digital Consulting</Typography></Box>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <MainNav />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box mt={1.5} component="main">{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
