import React from 'react'
import { 
	BtnPrimary, 
	Section, 
	SectionSubtitle, 
	SectionTitle, 
	Text, 
	Wrapper 
} from '../../globalStyles'
import { 
	AboutBanner, 
	AboutContent, 
	AboutGrid, 
	AboutList, 
	AboutListItem 
} from './AboutStyles'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Link, Typography } from '@mui/material';
import { AboutItems } from '../../Data';
import image from '../../assets/about.jpg'

const About = () => {
	return (
		<Section id='about'>
			<Wrapper>
				<AboutGrid>
					<AboutBanner>
						<img src={image} alt="image" />
					</AboutBanner>

					<AboutContent>
						<SectionSubtitle variant='subtitle1'>
							About us
						</SectionSubtitle>

						<SectionTitle 
							variant='h2'
							sx={(theme) => ({
								color: theme.palette.primary.main
							})}
						>
							Preserving Relationships Are The Basis Of Success.
						</SectionTitle>
						
						<Text variant='body1'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus maxime corporis commodi amet, fuga quaerat ratione adipisci unde quia!
						</Text>

						<AboutList>
							{AboutItems.map(({id, text}) => (
								<AboutListItem key={id}>
									<CheckRoundedIcon 
										sx={(theme) => ({
											fontSize: '1.2rem',
											color: theme.palette.secondary.main
										})}
									/>
									<Typography 
										variant='body2'
										sx={(theme) => ({
											fontWeight: 500,
											color: theme.palette.primary.main,
										})}
									>
										{text}
									</Typography>
								</AboutListItem>
							))}
						</AboutList>

						<Text 
							variant='body2'
							py={2}
						>
							Blanditiis, quae mollitia? Eius hic iusto pariatur, voluptatibus aliquam, cum inventore asperiores, aut laboriosam tempore vitae molestias esse itaque eligendi!
						</Text>

						<Link href='#'>
							<BtnPrimary
								sx={{
									marginBlock: '.5rem 0'
								}}
							>
								More About us
							</BtnPrimary>
						</Link>
					</AboutContent>
				</AboutGrid>
			</Wrapper>
		</Section>
	)
}

export default About