import { Typography } from "@mui/material";
import AppearingTextWithComponents from "../util/AppearingTextWithComponents";
import Link from "next/link";
import AppearingText from "../util/AppearingText";

const ContactSection: React.FC = () => {
  return (
    <AppearingTextWithComponents
      AppearingTextProps={{ initialDelayInMs: 500, intervalInMs: 80 }}
      template="{bodyText} {email} {phone} {linkedIn}"
      components={{
        bodyText: (
          <Typography component="div" key="0">
            <AppearingText text="Here's how to get in touch with Nick" />
          </Typography>
        ),
        email: (
          <Typography component="div" key="1">
            Email: nicksdigitalconsulting@gmail.com
          </Typography>
        ),
        phone: (
          <Typography component="div" key="2">
            Phone: (619) 784-1806
          </Typography>
        ),
        linkedIn: (
          <Typography component="div" key="3">
            LinkedIn:{" "}
            <Link href="https://www.linkedin.com/in/nickoluscunningham/">
              linkedin.com/in/nickoluscunningham/
            </Link>
          </Typography>
        ),
      }}
    />
  );
};

export default ContactSection;
