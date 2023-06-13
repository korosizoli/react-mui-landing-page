import React from 'react'
import { 
	Section, 
	SectionHeader, 
	SectionSubtitle, 
	SectionTitle, 
	Text, 
	Wrapper 
} from '../../globalStyles'
import { 
	BlogCard, 
	BlogCardBanner, 
	BlogCardContent, 
	BlogGrid, 
	CardBtn, 
	CardTag, 
	CardTitle, 
	TagLink 
} from './BlogStyles'
import { Link } from '@mui/material'
import { BlogItems } from '../../Data'

const Blog = () => {
	return (
		<Section id='blog'>
			<Wrapper>
				<SectionHeader>
					<SectionSubtitle variant='subtitle1'>
						Blog
					</SectionSubtitle>

					<SectionTitle 
						variant='h2'
						sx={(theme) => ({
							color: theme.palette.primary.main,
						})}
					>
						Our latest news
					</SectionTitle>
					
					<Text variant='body1'>
						Decision Are A Professional Attorney & Lawyers Services Provider Institutions. Suitable For Law Firm, Injury Law, Traffic Ticket Attorney, Legacy And More.
					</Text>
				</SectionHeader>

				<BlogGrid>
					{BlogItems.map(({id, image, title, description, date, tag}) => (
						<BlogCard key={id}>
							<BlogCardBanner>
								{image}

								<CardTag>
									<TagLink href='#'>
										{tag}
									</TagLink>
								</CardTag>
							</BlogCardBanner>

							<BlogCardContent>
								<Text 
									variant='body3'
								>
									{date}
								</Text>

								<Link 
									href='#'
									underline='none'
								>
									<CardTitle variant='h4'>
										{title}
									</CardTitle>
								</Link>

								<Text variant='body3'>
									{description}
								</Text>

								<CardBtn
									href='#'
									mt={1}
									sx={{
										display: 'block'
									}}
								>
									Read more
								</CardBtn>
							</BlogCardContent>
						</BlogCard>
					))}
				</BlogGrid>
			</Wrapper>
		</Section>
	)
}

export default Blog