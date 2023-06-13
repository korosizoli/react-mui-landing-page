import React from 'react'
import { 
	FooterBtn, 
	FooterCol, 
	FooterGrid, 
	FooterHeading, 
	FooterInput, 
	FooterLink, 
	FooterList, 
	FooterMuiLink, 
	FooterSection, 
	FooterSocialList, 
	LogoHolder, 
	SocialBtn 
} from './FooterStyles'
import { Wrapper } from '../../globalStyles'
import { 
	Box, 
	FormControl, 
	Typography 
} from '@mui/material'
import { 
	ServiceItems, 
	SocialLinks, 
	navLinks 
} from '../../Data'
import { Link } from 'react-scroll'
import logo from '../../assets/logo-white.png'

const Footer = () => {
	return (
		<FooterSection>
			<Wrapper>
				<FooterGrid>
					{/* 
						<<<<<<<<<<<<<<< Footer Col 1 / Logo, Social Links >>>>>>>>>>>>>>>
					*/}
					<FooterCol
						sx={(theme) => ({
							'@media screen and (min-width: 576px)': {
								gridColumn: '1 / 3',
							},

							'@media screen and (min-width: 768px)': {
								gridColumn: 'auto',
							},
						})}
					>
						<LogoHolder>
							<img src={logo} alt="logo" />
						</LogoHolder>

						<Typography
							variant='body3'
							sx={(theme) => ({
								color: theme.palette.neutralLight.main,
							})}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut dolore illum molestias nam soluta.
						</Typography>

						<FooterSocialList>
							{SocialLinks.map(({id, href, icon, color}) => (
								<SocialBtn
									key={id}
									href={href}
									target="_blank"
									sx={(theme) => ({
										'&:hover': {
											color: {color},
										},
									})}
								>
									{icon}
								</SocialBtn>
							))}
						</FooterSocialList>
					</FooterCol>
				
					{/* 
						<<<<<<<<<<<<<<< Footer Col 2 / Links >>>>>>>>>>>>>>>
					*/}
					<FooterCol>
						<FooterHeading
							variant='h5'
							sx={(theme) => ({
								color:theme.palette.neutralLight.light,
							})}
						>
							Company
						</FooterHeading>

						<FooterList>
							{navLinks.map(({id, href, link}) => (
								<FooterLink
									key={id} 
									variant='body3'
								>
									<Link
										to={href}
										spy={true}
										smooth={true}
										duration={500}
										offset={-50}
									>
										{link}
									</Link>
								</FooterLink>
							))}
						</FooterList>
					</FooterCol>

					{/* 
						<<<<<<<<<<<<<<< Footer Col 3 / other links >>>>>>>>>>>>>>>
					*/}
					<FooterCol>
						<FooterHeading
							variant='h5'
							sx={(theme) => ({
								color:theme.palette.neutralLight.light,
							})}
						>
							Practice area
						</FooterHeading>

						<FooterList>
							{ServiceItems.map(({id, title}) => (
								<FooterLink 
									key={id} 
									variant='body3'
								>
									<FooterMuiLink  
										href='#'
									>
										{title}
									</FooterMuiLink>
								</FooterLink>
							))}
						</FooterList>
					</FooterCol>

					{/* 
						<<<<<<<<<<<<<<< Footer Col 4 / Form >>>>>>>>>>>>>>>
					*/}
					<FooterCol
						sx={(theme) => ({
							backgroundColor: theme.palette.primary.light,

							'@media screen and (min-width: 576px)': {
								gridColumn: '1 / 3',
							},

							'@media screen and (min-width: 768px)': {
								gridColumn: 'auto',
							},
						})}
					>
						<Box
							component='form'
						>
							<FooterHeading
								variant='h5'
								sx={(theme) => ({
									color:theme.palette.secondary.main,
								})}
							>
								Newsletter
							</FooterHeading>

							<Typography
								variant='body3'
								sx={(theme) => ({
									color: theme.palette.neutralLight.main,

									'& span': {
										color: theme.palette.neutralLight.light,
										fontWeight: 500,
									}
								})}
							>
								Sign up for industry alerts, our latest news, thoughts, and insights from <span>Attorney & Lawyer</span>.
							</Typography>

							<FormControl fullWidth>
								<FooterInput 
									fullWidth
									size='small'
									type='email'
									placeholder='Your email address'
								/>

								<FooterBtn type='submit'>
									Subscribe
								</FooterBtn>
							</FormControl>
						</Box>
					</FooterCol>
				</FooterGrid>
			</Wrapper>
		</FooterSection>
	)
}

export default Footer