import { SxProps } from '@mui/material'

export const PersonCardAdaptation: SxProps = {
	display: 'grid',
	gap: '25px',
	justifyContent: 'center',
	gridTemplateColumns: 'repeat(auto-fit, 589px)',
	'@media (max-width: 768px)': {
		gridTemplateColumns: '1fr',
	},
}

export const PersonCardWrapper: SxProps = {
	pl: { xxs: '0px', xs: '50px' },
	pb: '30px',
	// display: 'flex',
	// flexDirection: 'column',
	// alignItems: 'center',
}
