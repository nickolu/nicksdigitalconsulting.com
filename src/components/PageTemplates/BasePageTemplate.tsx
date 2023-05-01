import {PropsWithChildren} from 'react';
import MainNav from '@/components/Nav/MainNav';
import {Box, Grid, Typography} from '@mui/material';
import '@/components/PageTemplates/BasePageTemplate.module.scss';

export default function BasePageTemplate({
  children,
  onHomeClick,
}: PropsWithChildren<{onHomeClick?: () => void}>) {
  return (
    <Box>
      <Grid container display={'flex'} justifyContent={'center'}>
        <Grid item sm={6} xs={12}>
          <Box
            p={1}
            ml={1}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Typography variant="h1">Nick&apos;s Digital Consulting</Typography>
            <MainNav onHomeClick={onHomeClick} />
          </Box>
          <Box
            mt={1.5}
            className="main"
            component="main"
            sx={{
              '@media screen and (max-width: 599px)': {
                padding: '0px 16px',
              },
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
