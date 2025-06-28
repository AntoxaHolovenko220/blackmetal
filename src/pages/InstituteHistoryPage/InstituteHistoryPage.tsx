import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import { InstituteHistoryData } from './types'

interface HistoryImageProps {
  src: string
  alt: string
  caption: string
}

const HistoryImage = ({ src, alt, caption }: HistoryImageProps) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isLargeScreen = useMediaQuery('(min-width: 1648px)')

  const imageStyle = {
    width: '100%',
    height: isDesktop && isLargeScreen ? '800px' : 'auto',
    objectFit: 'contain' as const
  }

  const captionStyle = {
    fontSize: '16px',
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center' as const,
    mt: '16px',
    lineHeight: 1.4,
    whiteSpace: 'pre-line' as const
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: '32px' }}>
      <Box sx={{ width: '100%' }}>
        <img src={src} alt={alt} style={imageStyle} />
        <Typography sx={captionStyle}>{caption}</Typography>
      </Box>
    </Box>
  )
}

const InstituteHistoryPage = () => {
  const { data } = useTranslationData<InstituteHistoryData>('history')

  if (!data) {
    return null
  }

  const textStyle = {
    fontSize: '18px',
    color: '#333',
    mb: '24px',
    textAlign: 'justify' as const,
    lineHeight: 1.6
  }

  return (
    <Box sx={{ pb: '30px', pl: { xs: '20px', sm: '50px' }}}>
      <DocumentTitleSearch title={data.title} search={false} />
      
      <Box>
        <Typography sx={textStyle}>{data.firstParagraph}</Typography>
        <Typography sx={textStyle}>{data.secondParagraph}</Typography>

        <HistoryImage 
          src="/blackmetal/history1.webp" 
          alt={data.imageAlt}
          caption={data.imageCaption}
        />

        <Typography sx={textStyle}>{data.thirdParagraph}</Typography>
        <Typography sx={textStyle}>{data.fourthParagraph}</Typography>

        <HistoryImage 
          src="/blackmetal/history2.jpg" 
          alt={data.secondImageAlt}
          caption={data.secondImageCaption}
        />

        <Typography sx={textStyle}>{data.fifthParagraph}</Typography>

        <HistoryImage 
          src="/blackmetal/history3.jpg" 
          alt={data.thirdImageAlt}
          caption={data.thirdImageCaption}
        />

        <Typography sx={textStyle}>{data.sixthParagraph}</Typography>
        <Typography sx={textStyle}>{data.seventhParagraph}</Typography>
        <Typography sx={textStyle}>{data.eighthParagraph}</Typography>

        <HistoryImage 
          src="/blackmetal/history4.jpg" 
          alt={data.fourthImageAlt}
          caption={data.fourthImageCaption}
        />

        <Typography sx={textStyle}>{data.ninthParagraph}</Typography>

        <HistoryImage 
          src="/blackmetal/history5.jpg" 
          alt={data.fifthImageAlt}
          caption={data.fifthImageCaption}
        />

        <Typography sx={textStyle}>{data.tenthParagraph}</Typography>
        <Typography sx={textStyle}>{data.eleventhParagraph}</Typography>
        <Typography sx={textStyle}>{data.twelfthParagraph}</Typography>

        <HistoryImage 
          src="/blackmetal/history6.jpg" 
          alt={data.sixthImageAlt}
          caption={data.sixthImageCaption}
        />

        <Typography sx={textStyle}>{data.thirteenthParagraph}</Typography>
        <Typography sx={textStyle}>{data.fourteenthParagraph}</Typography>
        <Typography sx={textStyle}>{data.fifteenthParagraph}</Typography>
        <Typography sx={textStyle}>{data.sixteenthParagraph}</Typography>
        <Typography sx={textStyle}>{data.seventeenthParagraph}</Typography>
        <Typography sx={textStyle}>{data.eighteenthParagraph}</Typography>
        <Typography sx={textStyle}>{data.nineteenthParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentiethParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentyFirstParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentySecondParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentyThirdParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentyFourthParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentyFifthParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentySixthParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentySeventhParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentyEighthParagraph}</Typography>
        <Typography sx={textStyle}>{data.twentyNinthParagraph}</Typography>
        <Typography sx={textStyle}>{data.thirtiethParagraph}</Typography>
      </Box>
    </Box>
  )
}

export default InstituteHistoryPage