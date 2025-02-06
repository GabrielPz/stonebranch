'use client';

import { Box, Button, Container, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { PartnersImages } from './components/partners-images/partners-images';
import { ServicesCard } from './components/services-card/services-card';
import { servicesCardData } from '@/utils/home/services-card-data';

const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

export function Home() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box>
      <Container maxWidth={isBiggerThanLarge ? 'xl' : 'lg'}>
        <Box
          position="absolute"
          width={650}
          height={450}
          top={0}
          right={0}
          zIndex={-1}
        >
          <Image src="/assets/inicio-lateral.svg" alt="logo" fill />
        </Box>
        <Typography
          variant="h3"
          fontWeight={700}
          mb={3}
          fontFamily={fontFamilyBoldVar}
        >
          <Typography
            component="span"
            color="secondary.main"
            fontFamily={fontFamilyBoldVar}
            variant="h3"
            fontWeight={900}
            mb={20}
          >
            Real-Time Hybrid IT <br /> Automation
          </Typography>{' '}
          - for Whatever <br /> Comes Next
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          mb={4}
          fontFamily={'sans-serif'}
        >
          Centralize control and break down automation silos, from on-prem{' '}
          <br /> to the cloud to containerized microservices.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'secondary.main',
            color: 'white',
            borderRadius: 0.6,
            letterSpacing: 1.6,
            fontSize: 16,
          }}
        >
          Learn More
        </Button>
        <PartnersImages />
        <Typography
          variant="h3"
          fontFamily={fontFamilyBoldVar}
          fontWeight={900}
          mb={1}
          mt={8}
          textAlign={'center'}
          color="secondary.main"
        >
          <Typography
            component="span"
            variant="h3"
            fontFamily={fontFamilyBoldVar}
            fontWeight={700}
            mb={20}
            color="primary"
          >
            Automation & Orchestration Built for <br />
          </Typography>{' '}
          Your Modern Enterprise
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          my={3}
          fontFamily={'sans-serif'}
          textAlign={'center'}
        >
          Finally, a single platform of IT automation solutions that are
          event-based, respond intelligently to <br /> business needs, minimize
          human oversight, and run on-prem and in the cloud.
        </Typography>
        <Grid2 container spacing={3} justifyContent="center">
          {servicesCardData.map((item) => (
            <Grid2
              key={item.title}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 4,
                xl: 4,
              }}
            >
              <ServicesCard {...item} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
