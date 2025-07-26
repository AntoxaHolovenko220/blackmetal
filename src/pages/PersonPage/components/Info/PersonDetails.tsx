import { Typography } from '@mui/material'

interface PersonDetailsProps {
	researchDirection?: string
	teachingSubjects?: string
	biography?: string
	specialization?: string
	labels: {
		researchDirection: string
		teachingSubjects: string
		biography: string
		specialization?: string
	}
}

export const PersonDetails = ({ 
	researchDirection, 
	teachingSubjects, 
	biography, 
	specialization,
	labels 
}: PersonDetailsProps) => {
	return (
		<>
			{researchDirection && (
				<>
					<Typography
						sx={{
							fontSize: '18px',
							fontWeight: 600,
							color: '#2D7A84',
							marginBottom: '15px',
						}}
					>
						{labels.researchDirection}
					</Typography>

					<Typography
						sx={{
							fontSize: '18px',
							color: '#333',
							lineHeight: 1.6,
							marginBottom: '25px',
							textAlign: 'left',
						}}
					>
						{researchDirection}
					</Typography>
				</>
			)}

			{specialization && (
				<>
					<Typography
						sx={{
							fontSize: '18px',
							fontWeight: 600,
							color: '#2D7A84',
							marginBottom: '15px',
						}}
					>
						{labels.specialization}
					</Typography>

					<Typography
						sx={{
							fontSize: '18px',
							color: '#333',
							lineHeight: 1.6,
							marginBottom: '25px',
							textAlign: 'left',
						}}
					>
						{specialization}
					</Typography>
				</>
			)}

			{teachingSubjects && (
				<>
					<Typography
						sx={{
							fontSize: '18px',
							fontWeight: 600,
							color: '#2D7A84',
							marginBottom: '15px',
						}}
					>
						{labels.teachingSubjects}
					</Typography>

					<Typography
						sx={{
							fontSize: '18px',
							color: '#333',
							lineHeight: 1.6,
							marginBottom: '25px',
							textAlign: 'justify',
						}}
					>
						{teachingSubjects}
					</Typography>
				</>
			)}

			{biography && (
				<>
					<Typography
						sx={{
							fontSize: '18px',
							fontWeight: 600,
							color: '#2D7A84',
							marginBottom: '15px',
						}}
					>
						{labels.biography}
					</Typography>
					<Typography
						sx={{
							fontSize: '18px',
							color: '#333',
							lineHeight: 1.6,
							marginBottom: '25px',
							textAlign: 'justify',
						}}
					>
						{biography}
					</Typography>
				</>
			)}
		</>
	)
} 