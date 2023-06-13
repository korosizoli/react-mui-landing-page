import React, { useCallback, useEffect, useState } from 'react'
import { 
	CloseButtonWrapper, 
	LogoHolder, 
	Menu, 
	MenuLink, 
	MobileMenu, 
	MobileMenuLink, 
	NavBar, 
	NavBtnWrapper, 
	NavContainer, 
	NavCta, 
	NavWrapper, 
	Overlay 
} from './TopbarStyles'
import { Box, Typography } from '@mui/material'
import logo from '../../assets/logo.png'
import logo_white from '../../assets/logo-white.png'
import { Link } from 'react-scroll'
import { navLinks } from '../../Data'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const toggleMenu = useCallback(() => setToggle(!toggle), [toggle])

	const [active, setActive] = useState(null);
	useEffect(() => {
		const scrollActive = () => {
			setActive(window.scrollY > 40);
		};

		window.addEventListener("scroll", scrollActive);

		return () => window.removeEventListener("scroll", scrollActive);
	}, [active]);

	return (
		<NavBar>
			<NavContainer
				zIndex={100}
				sx={(theme) => ({
					position: `${ active ? 'fixed' : 'absolute' }`,
					top: `${active ? '0' : '40px' }`,
					backgroundColor: `${active ? theme.palette.neutralLight.light : 'none' }`,
					boxShadow: `${active ? '0px 0px 20px 1px rgba(0,0,0,0.15);' : '0px 0px 20px 1px rgba(0,0,0,0);' }`,
					transition: 'background .3s ease',
				})}
			>
				<NavWrapper>
					{/*
						<<<<<<<<<<<<<<<<<<<< Logo >>>>>>>>>>>>>>>>>>>>  
					*/}
					<LogoHolder
						zIndex={110}
					>
						<Link
							to="home"
							spy={true}
							smooth={true}
							duration={500}
							offset={0}
						>
							<img 
								src={ active ? `${logo}` : `${logo_white}` } 
								alt="logo" 
							/>
						</Link>
					</LogoHolder>

					{/*
						<<<<<<<<<<<<<<<<<<<< Menu >>>>>>>>>>>>>>>>>>>>  
					*/}
					<Menu>
						{navLinks.map(({id, href, link}) => (
							<MenuLink 
								key={id}
								sx={(theme) => ({
									color: `${active ? theme.palette.primary.main : theme.palette.neutralLight.light }`,
								})}
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
							</MenuLink>
						))}
					</Menu>

					{/*
						<<<<<<<<<<<<<<<<<<<< Call >>>>>>>>>>>>>>>>>>>>  
					*/}
					<NavCta
						sx={(theme) => ({
							color: `${active ? theme.palette.primary.main : theme.palette.neutralLight.light }`,
						})}
					>
						<PermPhoneMsgIcon />

						<Box>
							<Typography variant='body1'>
								(00) 123-456-789
							</Typography>

							<Typography 
								variant='body3'
								sx={(theme) => ({
									color: `${active ? theme.palette.primary.light : theme.palette.	neutralLight.main }`,
								})}
							>
								Call us for consultation
							</Typography>
						</Box>
					</NavCta>

					{/*
						<<<<<<<<<<<<<<<<<<<< Menu Button >>>>>>>>>>>>>>>>>>>>  
					*/}
					<NavBtnWrapper
						sx={(theme) => ({
							color: `${active ? theme.palette.primary.main : theme.palette.neutralLight.light }`,
						})}
					>
						<MenuIcon 
							sx={{
								display: `${toggle ? 'none' : 'block' }`
							}}
							onClick={toggleMenu}
						/>

					</NavBtnWrapper>
				</NavWrapper>
			</NavContainer>

			{/*
				<<<<<<<<<<<<<<<<<<<< Mobile menu >>>>>>>>>>>>>>>>>>>>  
			*/}
			<MobileMenu
				zIndex={110}
				sx={{
					marginRight: `${toggle ? 0 : '-300px' }`,
					transition: 'margin .5s ease'
				}}
			>
				<CloseButtonWrapper>
					<CloseIcon 
						zIndex={110}
						sx={(theme) => ({
							cursor: 'pointer',
							color: theme.palette.primary.main,
							transition: 'color .2s ease',

							'&:hover': {
								color: theme.palette.secondary.main,
							},
						})}
						onClick={toggleMenu}
					/>
				</CloseButtonWrapper>

				{navLinks.map(({id, href, link}) => (
					<MobileMenuLink 
						key={id}
					>
						<Link
							to={href}
							onClick={toggleMenu}
							spy={true}
							smooth={true}
							duration={500}
							offset={0}
						>
							{link}
						</Link>
					</MobileMenuLink>
				))}
			</MobileMenu>

			<Overlay 
				onClick={toggleMenu}
				zIndex={101}
				sx={(theme) => ({
					visibility: `${ toggle ? 'visible' : 'hidden' }`,
					opacity: `${ toggle ? '.75' : 0 }`,
					transition: 'all .3s ease',
				})}
			/>
		</NavBar>
	)
}

export default Navbar