import { DocumentCard, DocumentTitleSearch } from '@/components'
import { Box, Typography } from '@mui/material'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { useTranslationData } from '@/hooks/useTranslationData'
import { DocumentCardAdaptation } from '@/components/DocumentCard/styles'
import { DocumentCardProps } from '@/components/DocumentCard/DocumentCardInterface'

interface ContactItem {
	type: string
	value: string
}

interface BlockData {
	title?: string
	link?: string
	date?: string
	value?: string
	type?: string
	data?: DocumentCardProps[] | ContactItem[]
}

interface SpecializedCouncilBlock {
	type: 'text' | 'smalltext' | 'document' | 'documents' | 'contacts'
	content?: string
	data?: BlockData
}

interface SpecializedCouncilData {
	title: string
	blocks: SpecializedCouncilBlock[]
}

const SpecializedCouncilPage = () => {
	const { data } =
		useTranslationData<SpecializedCouncilData>('specializedcouncil')

	if (!data) {
		return null
	}

	return (
		<Box sx={{ pl: { xxs: '0px', sm: '50px' }, pb: '30px' }}>
			<DocumentTitleSearch title={data.title} search={false} />
			<Box>
				{data.blocks.map((block, index) => (
					<Box key={index}>
						{block.type === 'text' && (
							<Typography
								sx={{ mb: '14px', fontSize: '16px', fontWeight: 400 }}
							>
								{block.content}
							</Typography>
						)}
						{block.type === 'smalltext' && (
							<Typography
								sx={{
									mb: '14px',
									fontSize: '13px',
									fontWeight: 400,
									lineHeight: 1.8,
									color: '#666666',
								}}
							>
								{block.content}
							</Typography>
						)}
						{block.type === 'contacts' &&
							block.data &&
							Array.isArray(block.data) && (
								<Box
									sx={{
										maxWidth: '600px',
										width: '100%',
										m: '28px auto',
										py: '10px',
										display: 'flex',
										justifyContent: 'space-around',
										border: '1px solid #DFDFDFDF',
										'@media (max-width: 480px)': {
											flexDirection: 'column',
											gap: '10px',
											alignItems: 'center',
										},
									}}
								>
									{block.data.map(contact => (
										<Box
											sx={{
												display: 'flex',
												gap: '8px',
												alignItems: 'center',
											}}
										>
											{contact.type === 'Phone' ||
											contact.type === 'Телефон' ? (
												<PhoneOutlinedIcon sx={{ color: '#2D7A84' }} />
											) : (
												<EmailOutlinedIcon sx={{ color: '#2D7A84' }} />
											)}
											<Typography sx={{ fontSize: '15px', fontWeight: 600 }}>
												{contact.value}
											</Typography>
										</Box>
									))}
								</Box>
							)}
						{block.type === 'document' && block.data && (
							<Box sx={{ mt: '28px', mb: '28px', mx: 'auto' }}>
								<DocumentCard
									title={block.data.title || ''}
									link={block.data.link || ''}
									date={block.data.date}
								/>
							</Box>
						)}
						{block.type === 'documents' && (
							<Box sx={{ maxWidth: '1220px', mt: '28px', mx: 'auto' }}>
								<Box sx={DocumentCardAdaptation}>
									{(block.data as DocumentCardProps[]).map((item, idx) => (
										<DocumentCard
											key={idx}
											title={item.title}
											link={item.link}
											date={item.date}
										/>
									))}
								</Box>
							</Box>
						)}
					</Box>
				))}
			</Box>
		</Box>
	)
}

export default SpecializedCouncilPage
