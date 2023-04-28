import { Box, Typography } from "@mui/material";
import BasePageTemplate from "./BasePageTemplate";
import { PropsWithChildren } from "react";

export default function InnerPageTemplate({
  children,
  title,
}: PropsWithChildren<{title: string}>) {
  return (
    <BasePageTemplate>
      <Typography variant="h1">{title}</Typography>
      <Box>{children}</Box>
    </BasePageTemplate>
  );
}
