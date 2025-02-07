 
'use client';

import { Box, Card, Container, Divider, Grid2, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ContactUsForm } from '../../components/contact-us-form';

const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

export function ContactUs() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box>
      <Container maxWidth={isBiggerThanLarge ? 'xl' : 'lg'}>
        <Grid2 container mt={8} spacing={8} mb={8}>
          <Grid2
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 6,
            }}
          >
            <Card
              elevation={6}
              sx={{
                padding: '1.5rem'
              }}
            >

              <Typography
                color="primary.main"
                fontFamily={fontFamilyBoldVar}
                variant="h4"
                fontWeight={500}
                mb={4}
              >
                Contact Us
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                Please complete the form below.
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                A member of the Stonebranch team will be in touch with you shortly.
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={700}
                mb={4}
              >
                Contact Us
              </Typography>
              <ContactUsForm />
            </Card>
            <Card
              elevation={6}
              sx={{
                marginTop: '2rem',
                padding: '1.5rem'
              }}
            >

              <Typography
                color="primary.main"
                fontFamily={fontFamilyBoldVar}
                variant="h4"
                fontWeight={500}
                mb={4}
              >
                Stonebranch Support
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                If you are experiencing a problem with an installed product<br/>
                please call support at the following numbers.
              </Typography>
              <Divider
                variant='fullWidth'
              />
              <Grid2 container mt={4} spacing={4}>
                <Grid2  
                  size={{
                    xs: 12,
                    sm: 12,
                    md: 6,
                    lg: 6,
                  }}
                >
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h5"
                    fontWeight={500}
                    mb={6}
                  >
                    For Europe, call:
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={fontFamilyBoldVar}
                    variant="h4"
                    fontWeight={700}
                    mb={6}
                  >
                    +49 69 967 583 70
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h6"
                    fontWeight={400}
                  >
                    Or email Stonebranch support at <br/>
                    <Link
                      href="mailto:support@stonebranch.com"
                      sx={{
                        color: 'blue', // Define a cor azul
                        textDecoration: 'none', // Remove o sublinhado padrão
                        fontWeight: 600,
                        '&:hover': {
                          color: 'darkblue', // Cor mais escura no hover
                          textDecoration: 'underline', // Adiciona sublinhado ao passar o mouse
                        }
                      }}
                    >
                      support@stonebranch.com
                    </Link>
                  </Typography>
                </Grid2>
                <Grid2  
                  size={{
                    xs: 12,
                    sm: 12,
                    md: 6,
                    lg: 6,
                  }}
                >
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h5"
                    fontWeight={500}
                    mb={6}
                  >
                    For North America, call:
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={fontFamilyBoldVar}
                    variant="h4"
                    fontWeight={700}
                    mb={6}
                  >
                    +1-877-366-7887
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h6"
                    fontWeight={400}
                    mb={6}
                  >
                    and select option 6 or
                  </Typography>
                  
                  <Typography
                    color="primary.main"
                    fontFamily={fontFamilyBoldVar}
                    variant="h4"
                    fontWeight={700}
                    mb={6}
                  >
                    +1-678-366-7887
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h6"
                    fontWeight={400}
                  >
                    and select option 6
                  </Typography>
                </Grid2>
              </Grid2>
              
            </Card>
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 6,
            }}
          >

          </Grid2>
          
        </Grid2>

      </Container>
    </Box>
  );
}
