import { Box } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import { 
  TestingCenterHeader, 
  TestingCenterContent, 
  TestingCenterContacts 
} from './components'

interface TestingCenterData {
  title: string
  subtitle: string
  institute: string
  description: string
  tests: string[]
  certification: string
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

const TestingCenterPage = () => {
  const { data } = useTranslationData<TestingCenterData>('testing-center')

  if (!data) {
    return null
  }

  return (
    <Box sx={{ pb: '30px', pl: { xs: '20px', sm: '50px' }, pr: { xs: '20px', sm: '50px' } }}>
      <DocumentTitleSearch title={data.title} search={false} />
      
      <Box sx={{ mt: '32px', maxWidth: '1200px' }}>
        <TestingCenterHeader 
          subtitle={data.subtitle}
          institute={data.institute}
        />
        
        <TestingCenterContent 
          description={data.description}
          tests={data.tests}
          certification={data.certification}
        />
        
        <TestingCenterContacts 
          deputy={data.deputy}
          deputyName={data.deputyName}
          contacts={data.contacts}
          email={data.email}
          links={data.links}
        />
      </Box>
    </Box>
  )
}

export default TestingCenterPage
