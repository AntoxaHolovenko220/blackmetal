type LogoType = 'icon' | 'icon-text'

export interface UniversalLogoProps {
	size?: number // размер в пикселях (работает только для type="icon")
	type?: LogoType
	className?: string
}
