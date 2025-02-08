import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Grid2,
} from '@mui/material';
import Image from 'next/image';
const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

const images = [
  [
    {
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/a/3/csm_WorkloadAutomation_Leader_Enterprise_2024_3961b21e36.png',
    },
    {
      url: 'https://www.stonebranch.com/fileadmin/logos/g2-badge-2024-fall.png',
    },
    {
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/5/3/csm_g2-badge-easiest-setup-2025_ed2ddecc49.png',
    },
    {
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/7/3/csm_WorkloadAutomation_MomentumLeader_2024_eefc69becb.png',
    },
    {
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/c/2/csm_SAPStore_HighPerformer_2024_291585ce0f.png',
    },
  ],
  [
    {
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/8/a/csm_hEX_ema_209b8e27b2.png',
    },
    {
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/9/1/csm_Gartner_peer_insights_badge_cc489c8862.png',
    },
    {
      url:
        'https://www.stonebranch.com/fileadmin/logos/Badges/Stonebranch_Sourceforce_Badge.svg',
    },
    {
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/9/2/csm_slashdot_badge_7bfde1c03a.png',
    },
  ],
];

export function ProvenExperience() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box
      sx={{
        backgroundImage:
          'url(/assets/home/proven-experience.svg), linear-gradient(135deg, #186cda, #6ba1e7)',
        backgroundSize: 'auto 90%, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50vw, 0 0',
        backgroundAttachment: 'fixed, scroll',
      }}
    >
      <Container maxWidth={isBiggerThanLarge ? 'lg' : 'md'}>
        <Stack gap={4} direction="row" py={6}>
          <Stack direction="column" justifyContent="flex-start" maxWidth={434}>
            <Typography
              fontFamily={fontFamilyBoldVar}
              variant="h4"
              fontWeight={900}
              color="white"
            >
              Proven Experience
            </Typography>
            <Typography
              fontFamily={'sans-serif'}
              variant="h6"
              mb={1}
              mt={2}
              fontSize="1.125rem"
              color="white"
            >
              Ranked by leading firms like Gartner and EMA, Stonebranch is your
              real-time hybrid IT automation partner – for whatever comes next.
              Download the Gartner Magic Quadrant for Service Orchestration and
              Automation Platforms (SOAP) to see why Stonebranch is recognized
              as a leader.
            </Typography>
            <Stack direction="row" alignItems="center" gap={4}>
              <Box
                position={'relative'}
                width="100%"
                maxWidth={180}
                height={180}
              >
                <Image
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  alt=""
                  src={
                    'https://www.stonebranch.com/fileadmin/_processed_/4/d/csm_magic_quadrant_2024_copy_3fd52994db.png'
                  }
                />
              </Box>
              <Button
                sx={{
                  backgroundColor: '#ff7154',
                  color: 'white',
                  letterSpacing: 2.6,
                }}
              >
                DOWNLOAD NOW
              </Button>
            </Stack>
          </Stack>
          <Stack direction="column" alignItems="flex-end" width="100%">
            {images.map((row, index) => (
              <Grid2
                container
                key={index}
                width="100%"
                justifyContent="center"
                spacing={2}
              >
                {row.map((image, index) => (
                  <Grid2
                    key={index}
                    size={{
                      xs: 6,
                      sm: 4,
                      md: 2,
                    }}
                  >
                    <Box
                      position={'relative'}
                      width="100%"
                      maxWidth={140}
                      height={140}
                    >
                      <Image
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                        alt=""
                        src={image.url}
                      />
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
