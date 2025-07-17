import { Box } from '@mui/material'
import { InstituteHistoryData } from '../types'
import HistoryText from './HistoryText'
import HistoryImage from './HistoryImage'

interface HistoryContentProps {
  data: InstituteHistoryData
}

const HistoryContent = ({ data }: HistoryContentProps) => {
  return (
    <Box>
      <HistoryText>{data.firstParagraph}</HistoryText>
      <HistoryText>{data.secondParagraph}</HistoryText>

      <HistoryImage 
        src="/blackmetal/history1.webp" 
        alt={data.imageAlt}
        caption={data.imageCaption}
      />

      <HistoryText>{data.thirdParagraph}</HistoryText>
      <HistoryText>{data.fourthParagraph}</HistoryText>

      <HistoryImage 
        src="/blackmetal/history2.jpg" 
        alt={data.secondImageAlt}
        caption={data.secondImageCaption}
      />

      <HistoryText>{data.fifthParagraph}</HistoryText>

      <HistoryImage 
        src="/blackmetal/history3.jpg" 
        alt={data.thirdImageAlt}
        caption={data.thirdImageCaption}
      />

      <HistoryText>{data.sixthParagraph}</HistoryText>
      <HistoryText>{data.seventhParagraph}</HistoryText>
      <HistoryText>{data.eighthParagraph}</HistoryText>

      <HistoryImage 
        src="/blackmetal/history4.jpg" 
        alt={data.fourthImageAlt}
        caption={data.fourthImageCaption}
      />

      <HistoryText>{data.ninthParagraph}</HistoryText>

      <HistoryImage 
        src="/blackmetal/history5.jpg" 
        alt={data.fifthImageAlt}
        caption={data.fifthImageCaption}
      />

      <HistoryText>{data.tenthParagraph}</HistoryText>
      <HistoryText>{data.eleventhParagraph}</HistoryText>
      <HistoryText>{data.twelfthParagraph}</HistoryText>

      <HistoryImage 
        src="/blackmetal/history6.jpg" 
        alt={data.sixthImageAlt}
        caption={data.sixthImageCaption}
      />

      <HistoryText>{data.thirteenthParagraph}</HistoryText>
      <HistoryText>{data.fourteenthParagraph}</HistoryText>
      <HistoryText>{data.fifteenthParagraph}</HistoryText>
      <HistoryText>{data.sixteenthParagraph}</HistoryText>
      <HistoryText>{data.seventeenthParagraph}</HistoryText>
      <HistoryText>{data.eighteenthParagraph}</HistoryText>
      <HistoryText>{data.nineteenthParagraph}</HistoryText>
      <HistoryText>{data.twentiethParagraph}</HistoryText>
      <HistoryText>{data.twentyFirstParagraph}</HistoryText>
      <HistoryText>{data.twentySecondParagraph}</HistoryText>
      <HistoryText>{data.twentyThirdParagraph}</HistoryText>
      <HistoryText>{data.twentyFourthParagraph}</HistoryText>
      <HistoryText>{data.twentyFifthParagraph}</HistoryText>
      <HistoryText>{data.twentySixthParagraph}</HistoryText>
      <HistoryText>{data.twentySeventhParagraph}</HistoryText>
      <HistoryText>{data.twentyEighthParagraph}</HistoryText>
      <HistoryText>{data.twentyNinthParagraph}</HistoryText>
      <HistoryText>{data.thirtiethParagraph}</HistoryText>
    </Box>
  )
}

export default HistoryContent 