import { FC, useState, ChangeEvent, useEffect } from 'react'
import {
	TextField,
	Button,
	Snackbar,
	Alert,
	Slide,
	SlideProps,
	MenuItem,
	InputAdornment,
	CircularProgress,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import SendIcon from '@mui/icons-material/Send'
import { useTranslationData } from '@/hooks/useTranslationData'
import emailjs from '@emailjs/browser'

interface ModalTranslation {
	// lastName: string
	firstName: string
	// middleName: string
	phone: string
	email: string
	question: string
	otherQuestion: string
	submit: string
	submitting: string
	success: string
	successNotification: string
	errorNotification: string
	questions: string[]
	validation: {
		// lastName: string
		firstName: string
		// middleName: string
		phone: string
		email: string
		question: string
		otherQuestion: string
	}
}

const phoneRegex = /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/
const allowedPrefixes = [
	'039',
	'067',
	'068',
	'096',
	'097',
	'098',
	'050',
	'066',
	'095',
	'099',
	'063',
	'073',
	'093',
	'091',
	'092',
	'089',
	'094',
]
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidName = (val: string) => /^[A-Za-zА-Яа-яЁёІіЇїЄє\s-]+$/.test(val)

const Form = styled('form')({
	display: 'flex',
	flexDirection: 'column',
	// rowGap: '12px',
})

const SlideTransition = (props: SlideProps) => (
	<Slide {...props} direction='down' />
)

interface FeedbackFormProps {
	onClose: () => void
}

export const FeedbackForm: FC<FeedbackFormProps> = ({ onClose }) => {
	const { data: t, loading } = useTranslationData<ModalTranslation>('modal')

	const [formData, setFormData] = useState({
		// lastName: '',
		firstName: '',
		// middleName: '',
		phone: '+38 (0',
		email: '',
		question: '',
		otherQuestion: '',
	})

	const [errors, setErrors] = useState({
		// lastName: false,
		firstName: false,
		// middleName: false,
		phone: false,
		email: false,
		question: false,
		otherQuestion: false,
	})

	const [successOpen, setSuccessOpen] = useState(false)
	const [errorOpen, setErrorOpen] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	// Инициализация EmailJS
	useEffect(() => {
		emailjs.init('kgqDklkUvrKoYkgYW')
	}, [])

	const formatPhoneNumber = (input: string): string => {
		const digits = input.replace(/\D/g, '')
		const limitedDigits = digits.slice(0, 12)

		const countryCode = '+38'
		const operator = limitedDigits.substring(2, 5)
		const part1 = limitedDigits.substring(5, 8)
		const part2 = limitedDigits.substring(8, 10)
		const part3 = limitedDigits.substring(10, 12)

		let formatted = `${countryCode}`
		if (operator) formatted += ` (${operator}`
		if (part1) formatted += `) ${part1}`
		if (part2) formatted += `-${part2}`
		if (part3) formatted += `-${part3}`

		return formatted
	}

	const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value
		if (!value.startsWith('+38 (0')) {
			value = '+38 (0' + value.substring(5)
		}
		const formattedPhone = formatPhoneNumber(value)
		setFormData({ ...formData, phone: formattedPhone })
	}

	const validate = () => {
		const phoneDigits = formData.phone.replace(/\D/g, '')
		const operator = phoneDigits.substring(2, 5)
		const validOperator = allowedPrefixes.includes(operator)

		const errs = {
			// lastName: !isValidName(formData.lastName.trim()),
			firstName: !isValidName(formData.firstName.trim()),
			// middleName: !isValidName(formData.middleName.trim()),
			phone: phoneDigits.length !== 12 || !validOperator,
			email: !emailRegex.test(formData.email),
			question: !formData.question,
			otherQuestion:
				formData.question === 'other' && !formData.otherQuestion.trim(),
		}
		setErrors(errs)
		return !Object.values(errs).some(Boolean)
	}

	const handleChange = (field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted')
		
		if (!validate()) {
			console.log('Validation failed')
			return
		}
		
		setIsSubmitting(true)
		console.log('Sending email via Web3Forms...')

		const submitData = new FormData()
		submitData.append('access_key', '5e16d64e-2df9-4da9-b887-491e6a6713b9') // ключ Web3Forms
		submitData.append('name', formData.firstName)
		submitData.append('phone', formData.phone)
		submitData.append('email', formData.email)
		submitData.append('message', formData.question === 'other' ? formData.otherQuestion : formData.question)

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: submitData
			})
			
			const result = await response.json()
			
			if (result.success) {
				console.log('Email sent successfully via Web3Forms')
			setSuccessOpen(true)
			setFormData({
				firstName: '',
				phone: '+38 (0',
				email: '',
				question: '',
				otherQuestion: '',
			})
				// Закрыть модальное окно через 3 секунды, чтобы пользователь увидел уведомление
				setTimeout(() => {
			onClose()
				}, 3000)
			} else {
				throw new Error('Web3Forms failed: ' + result.message)
			}
		} catch (error) {
			console.error('Email sending failed:', error)
			setErrorOpen(true)
		} finally {
			setIsSubmitting(false)
		}
	}

	if (!t || loading) return null

	return (
		<>
			<Form onSubmit={handleSubmit}>
				{/* <TextField
					label={t.lastName}
					value={formData.lastName}
					onChange={e => handleChange('lastName', e.target.value)}
					error={errors.lastName}
					helperText={errors.lastName ? t.validation.lastName : ' '}
					fullWidth
				/> */}
				<TextField
					label={t.firstName}
					value={formData.firstName}
					onChange={e => handleChange('firstName', e.target.value)}
					error={errors.firstName}
					helperText={errors.firstName ? t.validation.firstName : ' '}
					fullWidth
				/>
				{/* <TextField
					label={t.middleName}
					value={formData.middleName}
					onChange={e => handleChange('middleName', e.target.value)}
					error={errors.middleName}
					helperText={errors.middleName ? t.validation.middleName : ' '}
					fullWidth
				/> */}
				<TextField
					label={t.phone}
					value={formData.phone}
					onChange={handlePhoneChange}
					error={errors.phone}
					helperText={errors.phone ? t.validation.phone : ' '}
					fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<img
									alt='flag'
									src='http://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg'
									style={{ width: '24px', height: '16px', marginRight: '8px' }}
								/>
							</InputAdornment>
						),
					}}
				/>
				<TextField
					label={t.email}
					value={formData.email}
					onChange={e => handleChange('email', e.target.value)}
					error={errors.email}
					helperText={errors.email ? t.validation.email : ' '}
					fullWidth
				/>
				<TextField
					select
					label={t.question}
					value={formData.question}
					onChange={e => handleChange('question', e.target.value)}
					error={errors.question}
					helperText={errors.question ? t.validation.question : ' '}
					fullWidth
				>
					{t.questions?.map((q, idx) => (
						<MenuItem key={idx} value={q}>
							{q}
						</MenuItem>
					))}
					<MenuItem value='other'>{t.otherQuestion}</MenuItem>
				</TextField>
				{formData.question === 'other' && (
					<TextField
						multiline
						maxRows={3}
						rows={3}
						label={t.otherQuestion}
						value={formData.otherQuestion}
						onChange={e => handleChange('otherQuestion', e.target.value)}
						error={errors.otherQuestion}
						helperText={errors.otherQuestion ? t.validation.otherQuestion : ' '}
						fullWidth
					/>
				)}
				<Button
					type='submit'
					variant='contained'
					startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
					endIcon={!isSubmitting ? <SendIcon /> : null}
					disabled={isSubmitting}
					sx={{ 
						height: '56px',
						borderRadius: 0
					}}
				>
					{isSubmitting ? t.submitting : t.submit}
				</Button>
			</Form>

			<Snackbar
				open={successOpen}
				autoHideDuration={4000}
				onClose={() => setSuccessOpen(false)}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				TransitionComponent={SlideTransition}
			>
				<Alert 
					severity='success' 
					icon={<CheckCircleOutlineIcon />}
					sx={{
						borderRadius: 0,
						backgroundColor: '#2D7A84',
						color: '#fff',
						fontSize: '1rem',
						fontWeight: 500,
						minWidth: '320px',
						boxShadow: '0 4px 20px rgba(45, 122, 132, 0.25)',
						border: 'none',
						'& .MuiAlert-icon': {
							color: '#fff',
							fontSize: '1.5rem'
						},
						'& .MuiAlert-message': {
							padding: '8px 0',
							display: 'flex',
							alignItems: 'center'
						}
					}}
				>
					{t.successNotification}
				</Alert>
			</Snackbar>

			<Snackbar
				open={errorOpen}
				autoHideDuration={6000}
				onClose={() => setErrorOpen(false)}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				TransitionComponent={SlideTransition}
			>
				<Alert 
					severity='error'
					sx={{
						borderRadius: 0,
						fontSize: '1rem',
						fontWeight: 500,
						minWidth: '320px',
						boxShadow: '0 4px 20px rgba(211, 47, 47, 0.25)',
						border: 'none',
						'& .MuiAlert-message': {
							padding: '8px 0',
							display: 'flex',
							alignItems: 'center'
						}
					}}
				>
					{t.errorNotification}
				</Alert>
			</Snackbar>
		</>
	)
}
