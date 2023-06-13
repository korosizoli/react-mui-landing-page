import React from 'react'
import { 
	ChooseCard, 
	ChooseGrid, 
	ChooseSection, 
	Column, 
	ColumnContainer 
} from './ChooseStyles'
import { 
	SectionHeader, 
	SectionSubtitle, 
	SectionTitle, 
	Wrapper 
} from '../../globalStyles'
import { Box, Typography } from '@mui/material';
import { ChooseItemsCol1, ChooseItemsCol2 } from '../../Data';

const Choose = () => {
	return (
		<ChooseSection id='features'>
			<Wrapper>
				<SectionHeader>
					<SectionSubtitle variant='subtitle1'>
						Why choose us
					</SectionSubtitle>

					<SectionTitle
						variant='h2'
						sx={(theme) => ({
							color: theme.palette.neutralLight.light
						})}
					>
						We are top lawyers with 40 years os experience
					</SectionTitle>

					<Typography
						variant='body1'
						sx={(theme) => ({
							color: theme.palette.neutralLight.main,
						})}
					>
						Decision Are A Professional Attorney & Lawyers Services Provider Institutions. Suitable For Law Firm, Injury Law, Traffic Ticket Attorney, Legacy And More.
					</Typography>
				</SectionHeader>
			</Wrapper>

			<ChooseGrid>
				<Column>
					<ColumnContainer
						sx={{
							'@media screen and (min-width: 992px)': {
								marginInline: 'auto 0'
							}
						}}
					>
						{ChooseItemsCol1.map(({id, icon, title, description}) => (
							<ChooseCard key={id}>
								{icon}

								<Box>
									<Typography 
										variant='h4'
										mb={1}
										sx={(theme) => ({
											color: theme.palette.neutralLight.light,
										})}
									>
										{title}
									</Typography>

									<Typography
										variant='body2'
										sx={(theme) => ({
											color: theme.palette.neutralLight.main,
										})}
									>
										{description}
									</Typography>
								</Box>
							</ChooseCard>
						))}
					</ColumnContainer>
				</Column>

				<Column
					sx={(theme) => ({
						backgroundColor: theme.palette.primary.light,
						paddingBlockEnd: '100px',
					})}
				>
					<ColumnContainer
						sx={{
							'@media screen and (min-width: 992px)': {
								marginInline: '0 auto'
							}
						}}
					>
						{ChooseItemsCol2.map(({id, icon, title, description}) => (
							<ChooseCard key={id}>
								{icon}

								<Box>
									<Typography 
										variant='h4'
										mb={1}
										sx={(theme) => ({
											color: theme.palette.neutralLight.light,
										})}
									>
										{title}
									</Typography>

									<Typography
										variant='body2'
										sx={(theme) => ({
											color: theme.palette.neutralLight.main,
										})}
									>
										{description}
									</Typography>
								</Box>
							</ChooseCard>
						))}
					</ColumnContainer>
				</Column>

			</ChooseGrid>
		</ChooseSection>
	)
}

export default Choose