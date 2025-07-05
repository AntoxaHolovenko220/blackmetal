import { SxProps } from '@mui/material'

export const MonoCardAdaptation: SxProps = {
	display: 'grid',
	gap: '25px',
	gridTemplateColumns: {
		xxs: '1fr',
		md: 'repeat(auto-fit, 600px)',
	},
	justifyContent: 'center',
}

export const MonoCardWrapper: SxProps = {
	pl: { xxs: '0px', sm: '50px' },
	pb: '30px',
}
