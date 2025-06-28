import { Box, Typography, Link } from '@mui/material'

interface TestingCenterContactsProps {
  deputy: string
  deputyName: string
  contacts: string
  email: string
  links: {
    certificate: string
    scope1: string
    scope2: string
    price: string
    certificateDoc: string
    scope3: string
  }
}

const TestingCenterContacts = ({ deputy, deputyName, contacts, email, links }: TestingCenterContactsProps) => {
  const textStyle = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#333'
  }

  const linkStyle = {
    display: 'block',
    mb: '8px',
    color: '#2D7A84',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: '18px',
    '&:hover': {
      textDecoration: 'underline'
    }
  }

  return (
    <Box sx={{ textAlign: 'left' }}>
      <Typography sx={textStyle}>
        {deputy}
      </Typography>
      <Typography sx={{ ...textStyle, mb: 1 }}>
        {deputyName}
      </Typography>

      <Typography sx={textStyle}>
        {contacts}
      </Typography>
      <Typography sx={{ ...textStyle, mb: 1 }}>
        {email}
      </Typography>

      <Link href="#" sx={linkStyle}>
        {links.certificate}
      </Link>
      <Link href="#" sx={linkStyle}>
        {links.scope1}
      </Link>
      <Link href="#" sx={linkStyle}>
        {links.scope2}
      </Link>
      <Link href="#" sx={linkStyle}>
        {links.price}
      </Link>
      <Link href="#" sx={linkStyle}>
        {links.certificateDoc}
      </Link>
      <Link href="#" sx={{ ...linkStyle, mb: 0 }}>
        {links.scope3}
      </Link>
    </Box>
  )
}

export default TestingCenterContacts 