import React from 'react'
import { 
	ServiceCard, 
	ServiceCardContent, 
	ServiceGrid, 
	ServiceSection 
} from './ServiceStyles'
import { 
	BtnText, 
	SectionHeader, 
	SectionSubtitle, 
	SectionTitle, 
	Text, 
	Wrapper 
} from '../../globalStyles'
import { Typography } from '@mui/material';
import { ServiceItems } from '../../Data';

const Services = () => {
	return (
		<ServiceSection id='services'>
			<Wrapper>
				<SectionHeader>
					<SectionSubtitle variant='subtitle1'>
						Practice area
					</SectionSubtitle>

					<SectionTitle 
						variant='h2'
						sx={(theme) => ({
							color: theme.palette.primary.main
						})}
					>
						What we cover
					</SectionTitle>

					<Text variant='body1'>
						Dignissimos earum illo, iste obcaecati expedita esse et veniam consequatur consectetur quia. Consectetur, adipisci voluptates.
					</Text>
				</SectionHeader>

				<ServiceGrid>
						{ServiceItems.map(({id, icon, title, description}) => (
							<ServiceCard key={id}>
								{icon}
								<ServiceCardContent>
									<Typography
										variant='h4'
										mb={2}
										sx={(theme) => ({
											color: theme.palette.primary.main,
										})}
									>
										{title}
									</Typography>

									<Typography 
										variant='body3'
										sx={(theme) => ({
											marginBlock: '1rem',
										})}
									>
										{description}
									</Typography>

									<BtnText 
										href='#'
										mt={2}
									>
										Read more
									</BtnText>
								</ServiceCardContent>
							</ServiceCard>
						))}
				</ServiceGrid>
			</Wrapper>
		</ServiceSection>
	)
}

export default Services