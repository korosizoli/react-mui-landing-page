import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { TopBtn } from './TopButtonStyles';

const TopButton = () => {
	const [reveal, setReveal] = useState(null)

	useEffect(() => {
		const scrollReveal = () => {
			setReveal(window.scrollY > 200)
		}

		window.addEventListener("scroll", scrollReveal)

		return () => window.removeEventListener("scroll", scrollReveal)

	}, [reveal])

	return (
		<Box
			sx={{
				position: 'relative',
			}}
		>
			<Link
				to="home"
				spy={true}
				smooth={true}
				duration={500}
				offset={0}
			>
				<TopBtn
					zIndex={80}
					sx={(theme) => ({
						transform: `${reveal ? 'scale(1)' : 'scale(0)' }`,
						opacity: `${reveal ? 1 : 0 }`,
					})}
				>
					<ArrowCircleRightOutlinedIcon className='icon'/>
				</TopBtn>
			</Link>
		</Box>
	)
}

export default TopButton