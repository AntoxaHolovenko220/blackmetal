import { Box, Typography } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'

interface InstituteHistoryData {
  title: string
  firstParagraph: string
  secondParagraph: string
  thirdParagraph: string
  fourthParagraph: string
  fifthParagraph: string
  sixthParagraph: string
  seventhParagraph: string
  eighthParagraph: string
  ninthParagraph: string
  tenthParagraph: string
  eleventhParagraph: string
  twelfthParagraph: string
  thirteenthParagraph: string
  fourteenthParagraph: string
  fifteenthParagraph: string
  sixteenthParagraph: string
  seventeenthParagraph: string
  eighteenthParagraph: string
  nineteenthParagraph: string
  twentiethParagraph: string
  twentyFirstParagraph: string
  twentySecondParagraph: string
  twentyThirdParagraph: string
  twentyFourthParagraph: string
  twentyFifthParagraph: string
  twentySixthParagraph: string
  twentySeventhParagraph: string
  twentyEighthParagraph: string
  twentyNinthParagraph: string
  thirtiethParagraph: string
  imageCaption: string
  imageAlt: string
  secondImageCaption: string
  secondImageAlt: string
  thirdImageCaption: string
  thirdImageAlt: string
  fourthImageCaption: string
  fourthImageAlt: string
  fifthImageCaption: string
  fifthImageAlt: string
  sixthImageCaption: string
  sixthImageAlt: string
}

const InstituteHistoryPage = () => {
  const { data } = useTranslationData<InstituteHistoryData>('history')

  if (!data) {
    return null
  }

  const textStyle = {
    fontSize: '18px',
    color: '#333',
    mb: 3,
    textAlign: 'justify' as const,
    lineHeight: 1.6
  }

  const captionStyle = {
    fontSize: '16px',
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center' as const,
    mt: 2,
    lineHeight: 1.4,
    whiteSpace: 'pre-line' as const
  }

  return (
    <Box sx={{ pb: '30px', pl: { xs: '20px', sm: '50px' }}}>
      <DocumentTitleSearch title={data.title} search={false} />
      
      <Box>
        <Typography sx={textStyle}>
          {data.firstParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.secondParagraph}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Box sx={{ width: '100%' }}>
            <img 
              src="/blackmetal/history1.webp" 
              alt={data.imageAlt}
              style={{ 
                width: '100%', 
                height: 'auto',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <Typography sx={captionStyle}>
              {data.imageCaption}
            </Typography>
          </Box>
        </Box>

        <Typography sx={textStyle}>
          {data.thirdParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.fourthParagraph}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Box sx={{ width: '100%' }}>
            <img 
              src="/blackmetal/history2.jpg" 
              alt={data.secondImageAlt}
              style={{ 
                width: '100%', 
                height: 'auto',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <Typography sx={captionStyle}>
              {data.secondImageCaption}
            </Typography>
          </Box>
        </Box>

        <Typography sx={textStyle}>
          {data.fifthParagraph}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Box sx={{ width: '100%' }}>
            <img 
              src="/blackmetal/history3.jpg" 
              alt={data.thirdImageAlt}
              style={{ 
                width: '100%', 
                height: 'auto',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <Typography sx={captionStyle}>
              {data.thirdImageCaption}
            </Typography>
          </Box>
        </Box>

        <Typography sx={textStyle}>
          {data.sixthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.seventhParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.eighthParagraph}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Box sx={{ width: '100%' }}>
            <img 
              src="/blackmetal/history4.jpg" 
              alt={data.fourthImageAlt}
              style={{ 
                width: '100%', 
                height: 'auto',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <Typography sx={captionStyle}>
              {data.fourthImageCaption}
            </Typography>
          </Box>
        </Box>

        <Typography sx={textStyle}>
          {data.ninthParagraph}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Box sx={{ width: '100%' }}>
            <img 
              src="/blackmetal/history5.jpg" 
              alt={data.fifthImageAlt}
              style={{ 
                width: '100%', 
                height: 'auto',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <Typography sx={captionStyle}>
              {data.fifthImageCaption}
            </Typography>
          </Box>
        </Box>

        <Typography sx={textStyle}>
          {data.tenthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.eleventhParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twelfthParagraph}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Box sx={{ width: '100%' }}>
            <img 
              src="/blackmetal/history6.jpg" 
              alt={data.sixthImageAlt}
              style={{ 
                width: '100%', 
                height: 'auto',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <Typography sx={captionStyle}>
              {data.sixthImageCaption}
            </Typography>
          </Box>
        </Box>

        <Typography sx={textStyle}>
          {data.thirteenthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.fourteenthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.fifteenthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.sixteenthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.seventeenthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.eighteenthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.nineteenthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentiethParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentyFirstParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentySecondParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentyThirdParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentyFourthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentyFifthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentySixthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentySeventhParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentyEighthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.twentyNinthParagraph}
        </Typography>

        <Typography sx={textStyle}>
          {data.thirtiethParagraph}
        </Typography>
      </Box>
    </Box>
  )
}

export default InstituteHistoryPage