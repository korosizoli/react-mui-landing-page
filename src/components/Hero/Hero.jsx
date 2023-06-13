import { Link } from '@mui/material'
import React from 'react'
import { 
	HeroContent, 
	HeroHeading, 
	HeroSection, 
	HeroSubtitle, 
	HeroText 
} from './HeroStyles'
import { BtnPrimary, Wrapper } from '../../globalStyles'

const Hero = () => {
	return (
		<HeroSection id='home'>
			<Wrapper>
				<HeroContent>
					<HeroSubtitle variant='subtitle1'>
						Your legal Solution Start Here!
					</HeroSubtitle>

					<HeroHeading variant='h1'>
						We are expert in legal specialties
					</HeroHeading>

					<HeroText variant='body1'>
						Decision Are A Professional Attorney & Lawyers Services Provider Institutions. Suitable For Law Firm, Injury Law, Traffic Ticket Attorney, Legacy And More.
					</HeroText>
						
					<Link href='#'>
						<BtnPrimary>
							Get in touch
						</BtnPrimary>
					</Link>
				</HeroContent>
			</Wrapper>
		</HeroSection>
	)
}

export default Hero