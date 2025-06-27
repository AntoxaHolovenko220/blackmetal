import { Box, Typography, Link, Card, CardContent, Grid } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import { FeedbackForm } from '@/components/FeedbackForm/FeedbackForm'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BusinessIcon from '@mui/icons-material/Business'
import { useState } from 'react'

interface ContactsData {
  title: string
  instituteName: string
  phone: string
  phoneNumber: string
  email: string
  emailAddress: string
  address: string
  fullAddress: string
  feedbackTitle: string
  contactInfoTitle: string
}

const ContactsPage = () => {
  const { data } = useTranslationData<ContactsData>('contacts')
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  if (!data) {
    return null
  }

  return (
    <Box sx={{ pb: '30px', pl: { xs: '20px', sm: '50px' }, pr: { xs: '20px', sm: '50px' } }}>
      <DocumentTitleSearch title={`${data.title}`} search={false} />

      <Box sx={{ maxWidth: '1400px', mt: 4, mx: 'auto' }}>
        {/* <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <BusinessIcon sx={{ color: '#000', fontSize: '2rem' }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#000',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: 1.2
                }}
              >
                {data.instituteName}
              </Typography>
            </Box>
          </CardContent> */}

        <Grid container spacing={4}>

          <Grid item xs={12} lg={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: '#2D7A84',
                mb: 3
              }}
            >
              {data.contactInfoTitle}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

              <Card
                sx={{
                  borderRadius: 0,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{
                      minWidth: 50,
                      minHeight: 50,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(45, 122, 132, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <PhoneIcon sx={{ color: '#2D7A84', fontSize: '1.5rem' }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: '#666',
                          fontWeight: 500,
                          mb: 0.5
                        }}
                      >
                        {data.phone}
                      </Typography>
                      <Link
                        href={`tel:${data.phoneNumber.replace(/\s/g, '')}`}
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#333',
                          textDecoration: 'none',
                        }}
                      >
                        {data.phoneNumber}
                      </Link>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  borderRadius: 0,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{
                      minWidth: 50,
                      minHeight: 50,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(45, 122, 132, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <EmailIcon sx={{ color: '#2D7A84', fontSize: '1.5rem' }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: '#666',
                          fontWeight: 500,
                          mb: 0.5
                        }}
                      >
                        {data.email}
                      </Typography>
                      <Link
                        href={`mailto:${data.emailAddress}`}
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#333',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                        }}
                      >
                        {data.emailAddress}
                      </Link>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  borderRadius: 0,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{
                      minWidth: 50,
                      minHeight: 50,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(45, 122, 132, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <LocationOnIcon sx={{ color: '#2D7A84', fontSize: '1.5rem' }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: '#666',
                          fontWeight: 500,
                          mb: 0.5
                        }}
                      >
                        {data.address}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#333',
                          lineHeight: 1.4,
                          cursor: 'pointer',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {data.fullAddress}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

            </Box>
          </Grid>

          <Grid 
            item 
            xs={12} 
            lg={6}
            sx={{
              width: { xxs: '100%' }
            }}
          >
            <Card
              sx={{
                borderRadius: 0,
                boxShadow: '0 4px 20px rgba(45, 122, 132, 0.1)',
                border: `1px solid rgba(45, 122, 132, 0.2)`,
                height: 'fit-content'
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#2D7A84',
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  {data.feedbackTitle}
                </Typography>

                <FeedbackForm onClose={() => setShowFeedbackForm(false)} />
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Box>
  )
}

export default ContactsPage