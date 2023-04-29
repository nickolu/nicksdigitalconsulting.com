import { Typography } from "@mui/material";
import AppearingTextWithComponents from "../util/AppearingTextWithComponents";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <AppearingTextWithComponents
      AppearingTextProps={{ initialDelayInMs: 500, intervalInMs: 80 }}
      template="{email} {phone} {linkedIn}"
      components={{
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
          <Typography component="div" key="2">
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
