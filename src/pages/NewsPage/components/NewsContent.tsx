import { Box, Typography } from '@mui/material'
import { NewsContentItem } from '@/pages/HomePage/components/News/NewsTypes'

interface NewsContentProps {
  content: NewsContentItem[]
  title: string
}

const NewsContent = ({ content, title }: NewsContentProps) => {
  return (
    <Box sx={{ mb: 3 }}>
      {content.map((item: NewsContentItem, index: number) => (
        <Box key={index} sx={{ mb: 4 }}>
          {item.type === 'image' ? (
            <Box
              sx={{
                width: '100%',
                maxWidth: '600px',
                mx: 'auto',
                mb: 2,
              }}
            >
              <img
                src={item.value}
                alt={`${title} - изображение ${index + 1}`}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'contain',
                }}
              />
            </Box>
          ) : (
            <Typography
              variant='body1'
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#333',
                mb: 2,
                textAlign: 'justify',
              }}
            >
              {item.value}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default NewsContent 