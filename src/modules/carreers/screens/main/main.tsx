 
'use client';

import { directorsData, leadershipTeamData } from '@/utils/about-us/cards-data';
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { CardsGrid } from './components/cards-grid/cards-grid';
import { PerkList } from './components/perk-list/perk-list';

const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

export function Carreers() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box>
      <Container maxWidth={isBiggerThanLarge ? 'xl' : 'lg'}>
        <Box
          position="absolute"
          width={!isBiggerThanLarge ? 450 : 750}
          height={!isBiggerThanLarge ? 350 : 550}
          top={0}
          right={0}
          zIndex={-1}
        >
          <Image src="/assets/inicio-lateral.svg" alt="logo" fill />
        </Box>
        <Box width="50%" mt={8}>
          <Typography
            variant="h3"
            fontWeight={600}
            mb={3}
            fontFamily={fontFamilyBoldVar}
          >
            <Typography
              component="span"
              color="primary.main"
              variant="h4"
              fontWeight={600}
              mb={20}
            >
              Join Our Team!
            </Typography>
          </Typography>
          <Typography
            fontWeight={500}
            sx={{
              fontSize: '1rem',
              lineHeight: '1.75rem',
            }}
            mb={4}
            fontFamily={'sans-serif'}
          >
            <strong>Shape the future of IT automation –</strong> from on-premises to cloud to containerized microservices. Our vision is to orchestrate the universe. Having a great vision is one thing. Doing it on a worldwide scale is another. We have team members working on every continent. Whether from one of our seven global locations or remote, we are unified by passion, success, and winning as one team. Are you game?
          </Typography>
          <Button
            variant='contained'
            sx={{
              bgcolor: 'secondary.main',
              width: "206px",
              height: '41px'
            }}
          >
            VIEW JOB OPENINGS
          </Button>
        </Box>
        <Stack
          direction="row"
          justifyContent={'space-around'}
          mt={8}
        >
            <Image
              width="600"
              height="490"
              src={'/assets/carreers/Careers_Page__5_.gif'}
              alt="Careers Page"
            />
            <Box maxWidth={500}>
              <Typography variant="h4" fontWeight={600} color="#0B3876" mb={2}>
                Life at Stonebranch
              </Typography>
              <Typography variant="h6" fontWeight={400} mb={2}>
                We are a team in the truest sense.
              </Typography>

              <Box component="ul" sx={{ pl: 2, mb: 2, listStyle: 'none' }}>
                {[
                  'We WORK together!',
                  'We RUN together!',
                  'We PLAY together!',
                  'We WIN together!',
                  'We CELEBRATE together!'
                ].map((text, index) => (
                  <Box
                    key={index}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: '#f4a261', // Cor laranja apenas no bullet
                        display: 'inline-block'
                      }}
                    />
                    <Typography variant="h6" fontWeight={400}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h6" fontWeight={400}>
                Start your journey today. Join our team to help shape the future of IT automation.
              </Typography>
            </Box>
        </Stack>
      </Container>
      <Box
        position="relative"
        left={0}
        right={0}
        width="100%"
        display={'flex'}
        height={248}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        sx={{
          bgcolor: '#f4f4f4',
        }}
      >
        <Typography
          variant="h4"
          fontWeight={400}
          mt={4}
          align="center"
          color="#0B3876"
          fontFamily={fontFamilyBoldVar}
        >
          The Perks:  Flexibility, Health, and Respect
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          mt={3}
          mb={4}
          align="center"
          fontFamily={'sans-serif'}
        >
          These three words represent the philosophy by which we thrive. Learn how Stonebranch invests in our team to help each of us achieve personal balance.
        </Typography>
      </Box>
      <PerkList/>
      <Box
        position="relative"
        left={0}
        right={0}
        width="100%"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={216}
        flexDirection={'column'}
        sx={{
          background: `linear-gradient(
            130deg,
            #186cda 30%, 
            #186cda 50%, 
            #05b8d8 100%
          )`,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={400}
          mt={4}
          align="center"
          color="white"
          fontFamily={fontFamilyBoldVar}
        >
          Stonebranch Leadership Team
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          mb={4}
          mt={4}
          align="center"
          color="white"
          fontFamily={'sans-serif'}
        >
          The Stonebranch leadership team is comprised of savvy entrepreneurs
          and seasoned industry experts, bringing years of <br /> experience and
          innovation to an established company recognized by analysts for its
          vision and value leadership.
        </Typography>
      </Box>
      <CardsGrid
        data={leadershipTeamData}
        isBiggerThanLarge={isBiggerThanLarge}
      />
      <Box
        position="relative"
        left={0}
        right={0}
        width="100%"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={216}
        flexDirection={'column'}
        sx={{
          background: `linear-gradient(
            130deg,
            #186cda 30%, 
            #186cda 50%, 
            #05b8d8 100%
          )`,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={400}
          mt={4}
          align="center"
          color="white"
          fontFamily={fontFamilyBoldVar}
        >
          Board of Directors
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          mb={4}
          mt={4}
          align="center"
          color="white"
          fontFamily={'sans-serif'}
        >
          Stonebranch&apos;s board of directors have a wealth of experience
          across the information technology, finance,
          <br /> and business sectors.
        </Typography>
      </Box>
      <CardsGrid
        data={directorsData}
        isBiggerThanLarge={isBiggerThanLarge}
        props={{
          size: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 4,
          },
        }}
      />
    </Box>
  );
}
