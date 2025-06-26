import React from 'react'
import { Button, MenuItem, Typography, Box, Fade } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { NavItem as NavItemType } from '../../interface'
import { DropdownMenu, NestedDropdownMenu, LineDivider } from '../'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTranslation } from 'react-i18next' // Добавляем импорт
import { useNavigate } from 'react-router-dom'

interface NavItemProps {
	item: NavItemType
	level?: number
	hoveredItem: string | null
	hoveredSubItem: string | null
	onMouseEnter: (id: string) => void
	onMouseLeave: () => void
	onSubItemMouseEnter: (id: string) => void
	onSubItemMouseLeave: () => void
}

export const NavItem = ({
	item,
	level = 0,
	hoveredItem,
	hoveredSubItem,
	onMouseEnter,
	onMouseLeave,
	onSubItemMouseEnter,
	onSubItemMouseLeave,
}: NavItemProps) => {
	const navigate = useNavigate()
	const { t } = useTranslation() // Добавляем хук перевода
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	// Функция для получения переведенного текста
	const getLabel = () => {
		// Если есть labelKey, используем перевод
		if ('label' in item) {
			return t(item.label)
		}
	}

	if (item.href) {
		return (
			<Button
				key={item.id}
				sx={{
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					maxWidth: '100%',
					color: '#373737',
					textTransform: 'none',
					fontSize: { xs: '0.7rem', sm: '0.7rem', md: '1rem' },
					fontWeight: 'bold',
					borderRadius: 0,
					px: { xs: 1, sm: 1.5, md: 2 },
					py: { xs: 1.5, md: 0 },
					width: { xs: '100%', sm: 'auto' },
					justifyContent: { xs: 'flex-start', sm: 'center' },
					'&:hover': {
						color: '#2D7A84',
						backgroundColor: { xs: 'rgba(0,0,0,0.05)', sm: 'transparent' },
					},
				}}
				onClick={() => navigate(`${item.href}`)}
			>
				{getLabel()} {/* Используем функцию getLabel вместо item.label */}
			</Button>
		)
	}

	if (item.items?.length) {
		const isOpen = hoveredItem === item.id

		if (isMobile) {
			return (
				<Box key={item.id} sx={{ width: '100%' }}>
					<Button
						sx={{
							color: '#373737',
							textTransform: 'none',
							fontSize: '1.2rem',
							fontWeight: 'bold',
							borderRadius: 0,
							px: 0,
							py: 1.5,
							width: '100%',
							justifyContent: 'flex-start',
							'&:hover': {
								color: '#2D7A84',
								backgroundColor: 'rgba(0,0,0,0.05)',
							},
						}}
					>
						{getLabel()} {/* Используем функцию getLabel вместо item.label */}
					</Button>

					<Box sx={{ pl: 2, mt: 1 }}>
						{item.items.map(subItem => (
							<NavItem
								key={subItem.id}
								item={subItem}
								level={level + 1}
								hoveredItem={hoveredItem}
								hoveredSubItem={hoveredSubItem}
								onMouseEnter={onMouseEnter}
								onMouseLeave={onMouseLeave}
								onSubItemMouseEnter={onSubItemMouseEnter}
								onSubItemMouseLeave={onSubItemMouseLeave}
							/>
						))}
					</Box>
				</Box>
			)
		}

		return (
			<Box
				key={item.id}
				sx={{ position: 'relative' }}
				onMouseEnter={() => onMouseEnter(item.id)}
				onMouseLeave={onMouseLeave}
			>
				<Button
					sx={{
						color: isOpen ? '#2D7A84' : '#373737',
						textTransform: 'none',
						fontSize: { xs: '0.7rem', md: '1rem' },
						fontWeight: 'bold',
						borderRadius: 0,
						px: { xs: 1, md: 2 },
						'&:hover': {
							color: '#2D7A84',
							backgroundColor: 'transparent',
						},
					}}
				>
					{getLabel()} {/* Используем функцию getLabel вместо item.label */}
				</Button>

				<Fade in={isOpen} timeout={300}>
					<DropdownMenu>
						{item.items.map((subItem, index, arr) => (
							<React.Fragment key={subItem.id}>
								{subItem.items?.length ? (
									<Box
										sx={{
											position: 'relative',
											minHeight: '50px',
											height: 'auto',
											py: 1,
											display: 'flex',
											alignItems: 'center',
											'&:hover': {
												backgroundColor: '#2D7A84',
												color: '#fff',
											},
										}}
										onMouseEnter={() => onSubItemMouseEnter(subItem.id)}
										onMouseLeave={onSubItemMouseLeave}
									>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center',
												width: '100%',
												height: '100%',
												px: 2,
											}}
										>
											<Typography
												fontWeight='bold'
												sx={{
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													whiteSpace: 'normal',
													maxWidth: '100%',
												}}
											>
												{'labelKey' in subItem
													? t(subItem.label)
													: subItem.label}
											</Typography>
											<KeyboardArrowRightIcon fontSize='small' />
										</Box>

										<Fade in={hoveredSubItem === subItem.id} timeout={300}>
											<NestedDropdownMenu>
												{subItem.items.map(
													(nestedItem, nestedIndex, nestedArr) => (
														<React.Fragment key={nestedItem.id}>
															<MenuItem
																component='a'
																{...(nestedItem.label ===
																	'Collection of Scientific Works' ||
																nestedItem.label === 'Збірник наукових праць'
																	? { href: 'https://jrn.isi.gov.ua/' }
																	: {
																			onClick: () =>
																				navigate(`${nestedItem.href}`),
																	  })}
																sx={{
																	minHeight: '50px',
																	height: 'auto',
																	py: 1,
																	color: '#373737',
																	'&:hover': {
																		backgroundColor: '#2D7A84',
																		color: '#fff',
																	},
																}}
															>
																<Typography
																	fontWeight='bold'
																	sx={{
																		overflow: 'hidden',
																		textOverflow: 'ellipsis',
																		whiteSpace: 'normal',
																		maxWidth: '100%',
																	}}
																>
																	{'labelKey' in nestedItem
																		? t(nestedItem.label)
																		: nestedItem.label}
																</Typography>
															</MenuItem>
															{nestedIndex < nestedArr.length - 1 && (
																<LineDivider />
															)}
														</React.Fragment>
													)
												)}
											</NestedDropdownMenu>
										</Fade>
									</Box>
								) : (
									<MenuItem
										component='a'
										sx={{
											minHeight: '50px',
											height: 'auto',
											py: 1,
											color: '#373737',
											'&:hover': {
												backgroundColor: '#2D7A84',
												color: '#fff',
											},
										}}
										{...(subItem.label === 'Collection of Scientific Works' ||
										subItem.label === 'Збірник наукових праць'
											? { href: 'https://jrn.isi.gov.ua/' }
											: {
													onClick: () => navigate(`${subItem.href}`),
											  })}
									>
										<Typography
											fontWeight='bold'
											sx={{
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												whiteSpace: 'normal',
												maxWidth: '100%',
											}}
										>
											{t(subItem.label)}
										</Typography>
									</MenuItem>
								)}
								{index < arr.length - 1 && <LineDivider />}
							</React.Fragment>
						))}
					</DropdownMenu>
				</Fade>
			</Box>
		)
	}

	return null
}
