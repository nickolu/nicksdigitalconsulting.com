import { Link, Typography } from "@mui/material";

const AboutSection: React.FC = () => {
  return (
    <>
      <Typography>
        Hi, I&apos;m Nick Cunningham, a software engineer from San Diego. I
        have over a decade of experience helping businesses optimize their
        processes with custom software solutions. As a father of three, I also
        enjoy spending time with my family, playing Dungeons & Dragons, and
        sharing music on my {" "}
        <Link href="https://tiktok.com/@cunning_jams" target="_blank">TikTok</Link>.
      </Typography>

      <Typography>
        As your consultant, I&apos;ll work closely with you to understand your
        goals and challenges, and provide tailored solutions to enhance your
        workflow and drive growth. If you&apos;re interested in optimizing
        your business processes, let&apos;s chat and start working together to
        achieve your goals.
      </Typography>
    </>
  );
};
export default AboutSection