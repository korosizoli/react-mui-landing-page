import React from 'react'
import { 
	ContactBox, 
	ContactContainer, 
	FlexBox, 
	Header, 
	SocialBtn 
} from './TopbarStyles'
import { 
	Box, 
	Link, 
	Typography 
} from '@mui/material'
import { Wrapper } from '../../globalStyles'
import { SocialLinks } from '../../Data';

const Topbar = () => {
	return (
		<Box
			zIndex={100}
			sx={{
				position: 'relative',
				display: 'none',

				'@media (min-width: 768px)': {
					display: 'block',
				}
			}}
		>
			<Header>
				<Wrapper>
					<FlexBox>
						{/* 
							<<<<<<<<<<<<<<<<<<< Contact >>>>>>>>>>>>>>>>>>>
						*/}
						<ContactContainer>
							{/* 
								<<<<<<<<<<<<<< Email >>>>>>>>>>>>>>
							*/}
							<ContactBox 
								pr={3}
								sx={(theme) => ({
									borderRight: '1px solid',
									borderColor: theme.palette.neutralLight.opacity10,
								})}
							>
								<Typography 
									variant='body3'
									mr={1}
								>
									E-mail:
								</Typography>

								<Link 
									href='mailto:email&email.com'
									sx={(theme) => ({
										color: theme.palette.neutralLight.main,
										textDecoration: 'none',
									})}
								>
									<Typography 
										variant='body3'
										
									>
										email@email.com
									</Typography>
								</Link>
							</ContactBox>

							{/* 
								<<<<<<<<<<<<<< Phone >>>>>>>>>>>>>>
							*/}
							<ContactBox pl={3}>
								<Typography 
									variant='body3'
									mr={1}
								>
									Phone:
								</Typography>

								<Typography variant='body3'>
									(00) 123-456-789
								</Typography>
							</ContactBox>
						</ContactContainer>

						{/* 
							<<<<<<<<<<<<<<<<<<< Social Links >>>>>>>>>>>>>>>>>>>
						*/}
						<Box
							sx={{
								display: 'flex',
							}}
						>
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
						</Box>
					</FlexBox>
				</Wrapper>
			</Header>
		</Box>
	)
}

export default Topbar