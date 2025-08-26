import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import SchoolIcon from '@mui/icons-material/School'
import PublicIcon from '@mui/icons-material/Public'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import ContactsIcon from '@mui/icons-material/Contacts'
import LanguageIcon from '@mui/icons-material/Language'
import ScienceIcon from '@mui/icons-material/Science'

interface ContactIconProps {
	contactType: string
}

export const ContactIcon = ({ contactType }: ContactIconProps) => {
	const type = contactType.toLowerCase()
	const normalized = type.replace(/\s+/g, '')
	
	if (type === 'phone' || type === 'телефон') {
		return <PhoneOutlinedIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
	} else if (type === 'email' || type === 'e-mail' || type === 'пошта') {
		return <EmailOutlinedIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
	} else if (type === 'google scholar') {
		return <SchoolIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
	} else if (type === 'orcid id') {
		return <PublicIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
	} else if (type === 'scopus author id') {
		return <LibraryBooksIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
	} else if (normalized === 'webofscience' || normalized === 'webofscienceid' || normalized === 'researcherid') {
		return <ContactsIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
	} else if (type === 'encyclopedia' || type === 'енциклопедія') {
		return <ScienceIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
	} else {
		return <EmailOutlinedIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
	}
} 