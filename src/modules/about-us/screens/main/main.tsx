/* eslint-disable @next/next/no-img-element */
'use client';

import { directorsData, leadershipTeamData } from '@/utils/about-us/cards-data';
import {
  Box,
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { CardsGrid } from './components/cards-grid/cards-grid';

const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

export function AboutUs() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box>
      <Container maxWidth={isBiggerThanLarge ? 'lg' : 'md'}>
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
              Orchestrate the Universe
            </Typography>
          </Typography>
          <Typography variant="h5" fontWeight={600} mb={4}>
            About Stonebranch
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            mb={4}
            fontFamily={'sans-serif'}
          >
            With decades of experience, Stonebranch set out to change the IT
            automation market for the better. To develop the right purpose-built
            solutions with user experience and accessibility in mind. To provide
            a true orchestration engine that empowers our customers to automate
            any on-prem or cloud solution. To ultimately enable you with the
            centralized control needed to better manage and scale with your
            expanding hybrid IT ecosystem.
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            mb={4}
            fontFamily={'sans-serif'}
          >
            Stonebranch is a force to be reckoned with in the IT orchestration
            and automation platform space. We shoot past the point where others
            have stopped, challenging the status quo, and exceeding
            expectations. We do this with the personalized service and
            leading-edge technology that is lacking with other providers.
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            mb={4}
            fontFamily={'sans-serif'}
          >
            We invite you to{' '}
            <Link
              href="/explore-platform"
              style={{ color: '#1976d2', textDecoration: 'none' }}
            >
              <a>explore our platform</a>
            </Link>
            , learn about the{' '}
            <Link
              href="/customer-successes"
              style={{ color: '#1976d2', textDecoration: 'none' }}
            >
              <a>successes of our customers</a>
            </Link>
            , and{' '}
            <Link
              href="/contact"
              style={{ color: '#1976d2', textDecoration: 'none' }}
            >
              <a>contact us</a>
            </Link>{' '}
            to learn more. We are here to orchestrate the IT world. Let&apos;s
            do it together.
          </Typography>
        </Box>

        <Box
          width="100%" // Definindo uma largura fixa
          height={535} // Definindo uma altura fixa
          position="relative" // Importante para uso correto do Next Image sem 'fill'
          display={'flex'}
          mt={8}
          mb={8}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src={'/assets/about-us/sb-stonebranch-in-facts-opt.svg'}
            alt="About Us Image"
            width={960}
            height={535} // Altura ajustada
            style={{
              objectFit: 'fill', // Garante que a imagem não estoure os limites
            }}
          />
        </Box>
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
          Our Values are Part of our DNA <br />
          and a Commitment to Our Working Culture
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          mt={3}
          mb={4}
          align="center"
          color="white"
          fontFamily={'sans-serif'}
        >
          Together, these values set the stage for our service and promises to
          our clients, as well as our relationships with one another.
        </Typography>
      </Box>
      <Box position="relative" left={0} right={0} width="100%">
        <img
          src={'/assets/about-us/stonebranch_about.jpg'}
          alt="About Us Image"
          width="100%"
          style={{
            objectFit: 'fill', // Garante que a imagem não estoure os limites
          }}
        />
      </Box>
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
