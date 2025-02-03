'use client';

import {
  Box,
  Button,
  Container,
  Grid2,
  Grid2Props,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
type DataProps = {
  firts: Array<{
    id: number;
    url: string;
    props?: Grid2Props;
  }>;
};

const data: DataProps = {
  firts: [
    {
      id: 1,
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/3/9/csm_stonebranch-Expedia_Group_00dae74e82.png',
      props: {
        size: {
          xs: 2.4,
          sm: 2.4,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },
    },
    {
      id: 2,
      props: {
        size: {
          xs: 2.4,
          sm: 2.4,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/1/b/csm_stonebranch-nissan_7c3099073b.png',
    },
    {
      id: 3,
      props: {
        size: {
          xs: 2.4,
          sm: 2.4,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/0/9/csm_stonebranch-ING_d1d531b3ab.png',
    },
    {
      id: 4,
      props: {
        size: {
          xs: 2.4,
          sm: 2.4,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/e/8/csm_stonebranch-royal_bank_canada_f64f1eb396.png',
    },
    {
      id: 5,
      props: {
        size: {
          xs: 2.4,
          sm: 2.4,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/8/b/csm_stonebranch-BASF_ece32803f6.png',
    },
    {
      id: 6,
      props: {
        size: {
          xs: 2.6,
          sm: 2.6,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
        justifyContent: 'flex-end',
      },
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/e/1/csm_stonebranch-SeattleChildrens_f54b3f04a5.png',
    },
    {
      id: 7,
      props: {
        size: {
          xs: 2.6,
          sm: 2.6,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
        justifyContent: 'center',
      },
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/6/2/csm_stonebranch-bmw-group_65e8290b73.png',
    },
    {
      id: 8,
      props: {
        size: {
          xs: 2.6,
          sm: 2.6,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
        justifyContent: 'center',
      },
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/f/7/csm_stonebranch-ntt_data_5d17eee91b.png',
    },
    {
      id: 9,
      props: {
        size: {
          xs: 2.6,
          sm: 2.6,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
        justifyContent: 'flex-start',
      },
      url:
        'https://www.stonebranch.com/fileadmin/_processed_/9/c/csm_stonebranch-albertsons_bc1dfa83e7.png',
    },
    {
      id: 10,
      props: {
        size: {
          xs: 2,
          sm: 2,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },

      url:
        'https://www.stonebranch.com/fileadmin/_processed_/7/0/csm_stonebranch-Mercy_health_c7d835ace7.png',
    },
    {
      id: 11,
      props: {
        size: {
          xs: 2,
          sm: 2,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },

      url:
        'https://www.stonebranch.com/fileadmin/_processed_/4/d/csm_stonebranch-randstad_47d2dfd6a6.png',
    },
    {
      id: 12,
      props: {
        size: {
          xs: 2,
          sm: 2,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },

      url:
        'https://www.stonebranch.com/fileadmin/_processed_/3/e/csm_stonebranch-bp_ece0387e21.png',
    },
    {
      id: 13,
      props: {
        size: {
          xs: 2,
          sm: 2,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },

      url:
        'https://www.stonebranch.com/fileadmin/_processed_/3/a/csm_stonebranch-Logitech_424a511779.png',
    },
    {
      id: 14,
      props: {
        size: {
          xs: 2,
          sm: 2,
          md: 1.6,
          lg: 1.6,
          xl: 1.6,
        },
      },

      url:
        'https://www.stonebranch.com/fileadmin/_processed_/a/d/csm_stonebranch-HCA_Healthcare_a4fffadaea.png',
    },
  ],
};

export function Home() {
  const [number, setNumber] = useState(0);

  return (
    <Box>
      <Container maxWidth="lg">
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
        <Typography variant="h3" fontWeight={700} mb={20}>
          <Typography
            component="span"
            color="secondary.main"
            variant="h3"
            fontWeight={900}
            mb={20}
          >
            Real-Time Hybrid IT <br /> Automation
          </Typography>{' '}
          – for Whatever <br /> Comes Next
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'secondary.main',
            color: 'white',
            borderRadius: 0.6,
          }}
        >
          Learn More
        </Button>
        <Grid2 container spacing={2} justifyContent="center">
          {data.firts.map((item) => (
            <Grid2
              display={'flex'}
              justifyContent={item.id > 7 ? 'flex-end' : 'flex-start'}
              key={item.id}
              {...item.props}
            >
              <Box position={'relative'} width={120} height={120}>
                <Image
                  src={item.url}
                  alt="logo"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>
        <Grid2 container spacing={2} justifyContent="center">
          {data.firts.map((item) => (
            <Grid2
              display={'flex'}
              justifyContent={item.id > 7 ? 'flex-end' : 'flex-start'}
              key={item.id}
              {...item.props}
            >
              <Box position={'relative'} width={120} height={120}>
                <Image
                  src={item.url}
                  alt="logo"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>
        <Grid2 container spacing={2} justifyContent="center">
          {data.firts.map((item) => (
            <Grid2
              display={'flex'}
              justifyContent={item.id > 7 ? 'flex-end' : 'flex-start'}
              key={item.id}
              {...item.props}
            >
              <Box position={'relative'} width={120} height={120}>
                <Image
                  src={item.url}
                  alt="logo"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>
        <Grid2 container spacing={2} justifyContent="center">
          {data.firts.map((item) => (
            <Grid2
              display={'flex'}
              justifyContent={item.id > 7 ? 'flex-end' : 'flex-start'}
              key={item.id}
              {...item.props}
            >
              <Box position={'relative'} width={120} height={120}>
                <Image
                  src={item.url}
                  alt="logo"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>
        <Grid2 container spacing={2} justifyContent="center">
          {data.firts.map((item) => (
            <Grid2
              display={'flex'}
              justifyContent={item.id > 7 ? 'flex-end' : 'flex-start'}
              key={item.id}
              {...item.props}
            >
              <Box position={'relative'} width={120} height={120}>
                <Image
                  src={item.url}
                  alt="logo"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
