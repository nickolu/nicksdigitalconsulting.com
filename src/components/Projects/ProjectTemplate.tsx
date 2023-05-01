import {Box, Typography} from '@mui/material';

const ProjectTemplate = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: JSX.Element;
}) => {
  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      <Box>{image}</Box>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default ProjectTemplate;
