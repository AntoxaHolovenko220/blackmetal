import { Box } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import {
	TestingCenterHeader,
	TestingCenterContent,
	TestingCenterContacts,
} from './components'
import { DocumentCardProps } from '@/components/DocumentCard/DocumentCardInterface'

interface ContactItem {
	type: string
	value: string
}
interface TestingCenterData {
	title: string
	subtitle: string
	institute: string
	description: string
	tests: string[]
	certification: string
	deputy: string
	deputyName: string
	contacts: ContactItem[]
	documents: DocumentCardProps[]
}

const TestingCenterPage = () => {
	const { data } = useTranslationData<TestingCenterData>('testing-center')

	if (!data) {
		return null
	}

	return (
		<Box
			sx={{
				pb: '30px',
				pl: { xxs: '0px', sm: '50px' },
			}}
		>
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
					documents={data.documents}
				/>
			</Box>
		</Box>
	)
}

export default TestingCenterPage
