import { Typography } from "@mui/material";
import Link from "next/link";

const ServicesSection: React.FC = () => {
  return (
    <>
     <Typography>
        My primary goal is to help businesses adapt to the changing world as
        AI becomes more prevalent. But beyond that, I can use AI and software
        to solve just about any problem.
      </Typography>
      <Typography>
        Some of the most common things I do for clients are as follows:
      </Typography>
      <Typography component="ul">
        <li>
          Train how to use tools like ChatGPT and other AI tools effectively
        </li>
        <li>
          Create custom software to solve unique problems, automate workflows,
          or improve existing services (<Link style={{display: 'inline'}} href="#">examples</Link>)
        </li>
        <li>
          Create, host, and maintain websites and web applications
        </li>
        <li>
          Advise on any technology related decisions
        </li>
      </Typography>
    </>
  );
};
export default ServicesSection