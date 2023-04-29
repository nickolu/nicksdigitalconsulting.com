import { Typography } from "@mui/material";
import Link from "next/link";
import AppearingTextWithComponents from "../util/AppearingTextWithComponents";
import AppearingText from "../util/AppearingText";
import App from "@/pages/_app";

const ServicesSection: React.FC = () => {
  return (
    <AppearingTextWithComponents
      AppearingTextProps={{ intervalInMs: 1000 }}
      components={[
        <Typography key="1">
          <AppearingText
            text="My primary goal is to help businesses adapt to the changing world as
          AI becomes more prevalent. But beyond that, I can use AI and software
          to solve just about any problem."
          />
        </Typography>,
        <Typography key="2">
          <AppearingText text="Some of the most common things I do for clients are as follows:" />
        </Typography>,
        <Typography key="3" component="ul">
          <li>
            <AppearingText text="Train how to use tools like ChatGPT and other AI tools effectively" />
          </li>
          <li>
            Create custom software to solve unique problems, automate workflows,
            or improve existing services (
            <AppearingTextWithComponents
              components={[
                <Link key="examples-link" style={{ display: "inline" }} href="#">
                  examples
                </Link>,
              ]}
            />
            )
          </li>
          <li>
            <AppearingText text="Create, host, and maintain websites and web applications" />
          </li>
          <li>
            <AppearingText text="Advise on any technology related decisions" />
          </li>
        </Typography>,
      ]}
    />
  );
};
export default ServicesSection;
