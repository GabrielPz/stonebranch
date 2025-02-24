'use client';

import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { PartnersImages } from './components/partners-images/partners-images';
import { ServicesCard } from './components/services-card/services-card';
import { servicesCardData } from '@/utils/home/services-card-data';
import { ProvenExperience } from './components/proven-experience/proven-experience';
import { PlanetCards } from './components/planet-cards/plannet-cards';
import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

export function Home() {
  const theme = useTheme();
  const isBiggerThanXLarge = useMediaQuery(theme.breakpoints.up('xl'));
  const { scrollY } = useScroll();

  const [scroll, setScroll] = useState(0);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScroll(latest);
  });
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScroll(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <Box>
      <Container maxWidth={isBiggerThanXLarge ? 'xl' : 'lg'}>
        <Box
          position="absolute"
          width={!isBiggerThanXLarge ? 450 : 750}
          height={!isBiggerThanXLarge ? 350 : 550}
          top={0}
          right={0}
          zIndex={-1}
        >
          <Image src="/assets/inicio-lateral.svg" alt="logo" fill />
        </Box>
        <Typography
          variant="h3"
          fontWeight={700}
          fontSize={46}
          mt={6}
          mb={3}
          fontFamily={fontFamilyBoldVar}
        >
          <Typography
            component="span"
            color="secondary.main"
            fontFamily={fontFamilyBoldVar}
            variant="h3"
            fontSize={46}
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
        <Grid2 container spacing={3} justifyContent="center" mb={7}>
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
      <ProvenExperience />
      <Box bgcolor={'#E7F1FE'}>
        <Container>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="start"
            gap={10}
          >
            <PlanetCards
              items={[
                'Analytics & Observality',
                'Event-Driver Automation',
                'asdasd',
                'asdasd',
                'asdasd',
                'asdasd',
              ]}
              rotation={scroll / 8}
              radius={200}
            />
            <Stack maxWidth={400} gap={2}>
              <Typography
                variant="h4"
                fontFamily={fontFamilyBoldVar}
                fontWeight={900}
                mb={1}
                mt={8}
                color="secondary.main"
              >
                <Typography
                  component="span"
                  variant="h4"
                  fontFamily={fontFamilyBoldVar}
                  fontWeight={700}
                  mb={20}
                  color="primary"
                >
                  Universal Automation <br />
                  Center -
                </Typography>{' '}
                The Platform
              </Typography>
              <Typography fontFamily={'sans-serif'}>
                A service orchestration and automation platform (SOAP) built for
                today … and tomorrow.
              </Typography>
              <Typography fontFamily={'sans-serif'}>
                Click on the hexagons to learn about the core pillars required
                to automate, manage, and orchestrate. Break down automation
                silos and gain centralized control and visibility across your
                entire hybrid IT environment.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  maxWidth: 200,
                  letterSpacing: 2,
                  mt: 4,
                }}
              >
                Explore UAC Now
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
