import Link from "next/link";
import AppearingTextWithComponents from "../util/AppearingTextWithComponents";

const AboutSection: React.FC = () => {
  return (
      <AppearingTextWithComponents
        template="Nick is a a software engineer from San Diego. He
        has over a decade of experience helping businesses optimize their
        processes with custom software solutions. As a father of three, he also
        enjoys spending time with his family, playing Dungeons & Dragons, and
        sharing music on his {link}.
        
        As your consultant, he'll work closely with you to understand your
        goals and challenges, and provide tailored solutions to enhance your
        workflow and drive growth. If you're interested in optimizing your
        business processes, chat with Nick to start working together to
        achieve your goals."
        components={{
          link: (
            <Link key="tikTokLink" href="https://tiktok.com/@cunning_jams">TikTok</Link>
          ),
        }}
      />
  );
};
export default AboutSection;
