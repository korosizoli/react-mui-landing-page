import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const SocialLinks = [
	{
		id: 1,
		href: 'https://www.facebook.com/',
		icon: <FacebookRoundedIcon 
						sx={(theme) => ({
							position: 'relative',
							fontSize: '1.125rem',
						})}
					/>,
		color: theme.palette.social.facebook,
	},
	{
		id: 2,
		href: 'https://twitter.com/home',
		icon: <TwitterIcon 
						sx={(theme) => ({
							position: 'relative',
							fontSize: '1.125rem',
						})}
					/>,
		color: theme.palette.social.twitter,
	},
	{
		id: 3,
		href: 'https://www.instagram.com/',
		icon: <InstagramIcon 
						sx={(theme) => ({
							position: 'relative',
							fontSize: '1.125rem',
						})}
					/>,
		color: theme.palette.social.instagram,
	},
	{
		id: 4,
		href: 'https://www.youtube.com/',
		icon: <YouTubeIcon 
						sx={(theme) => ({
							position: 'relative',
							fontSize: '1.125rem',
						})}
					/>,
		color: theme.palette.social.youtube,
	},
]

export const navLinks = [
	{
		id: 1,
		href: "home",
		link: "Home",
	},
	{
		id: 2,
		href: "about",
		link: "About Us",
	},
	{
		id: 3,
		href: "services",
		link: "Services",
	},
	{
		id: 4,
		href: "features",
		link: "Features",
	},
	{
		id: 5,
		href: "blog",
		link: "Blog",
	},
]

export const AboutItems = [
	{
		id: 1,
		text: 'Practical Trade Solutions'
	},
	{
		id: 2,
		text: 'Serving 40 Years'
	},
	{
		id: 3,
		text: 'The Largest Law Firm'
	},
	{
		id: 4,
		text: 'Practical Trade Solutions'
	},
]

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const ServiceItems = [
	{
		id: 1,
		icon: <WorkOutlineOutlinedIcon />,
		title: 'Business Law',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi explicabo corporis consectetur harum perspiciatis. Quae repellendus facere ut quisquam!',
	},
	{
		id: 2,
		icon: <Diversity2OutlinedIcon />,
		title: 'Family Law',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi explicabo corporis consectetur harum perspiciatis. Quae repellendus facere ut quisquam!',
	},
	{
		id: 3,
		icon: <HomeWorkOutlinedIcon />,
		title: 'Real Estate Law',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi explicabo corporis consectetur harum perspiciatis. Quae repellendus facere ut quisquam!',
	},
	{
		id: 4,
		icon: <BalanceOutlinedIcon />,
		title: 'Juricial Law',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi explicabo corporis consectetur harum perspiciatis. Quae repellendus facere ut quisquam!',
	},
	{
		id: 5,
		icon: <DangerousOutlinedIcon />,
		title: 'Criminal Law',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi explicabo corporis consectetur harum perspiciatis. Quae repellendus facere ut quisquam!',
	},
	{
		id: 6,
		icon: <PersonOutlineOutlinedIcon />,
		title: 'Personal Injury',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi explicabo corporis consectetur harum perspiciatis. Quae repellendus facere ut quisquam!',
	},
]


export const ChooseItemsCol1 = [
	{
		id: 1,
		icon: <BalanceOutlinedIcon
						sx={(theme) => ({
							color: theme.palette.secondary.main,
						})}
					/>,
		title: 'Our Success Cases',
		description: 'Minus unde molestias odit, doloribus temporibus aperiam! Tenetur laborum fugiat amet deserunt.',
	},
	{
		id: 2,
		icon: <HomeWorkOutlinedIcon
						sx={(theme) => ({
							color: theme.palette.secondary.main,
						})}
					/>,
		title: 'Professional Attorneys',
		description: 'Dolore atque asperiores perspiciatis, quia sunt hic molestias odit incidunt numquam quis.',
	},
	{
		id: 3,
		icon: <WorkOutlineOutlinedIcon
						sx={(theme) => ({
							color: theme.palette.secondary.main,
						})}
					/>,
		title: 'Long Experience',
		description: 'Omnis nostrum consectetur nulla veritatis consequatur aut rem sapiente eum qui obcaecati.',
	},
]

export const ChooseItemsCol2 = [
	{
		id: 1,
		icon: <HomeWorkOutlinedIcon
						sx={(theme) => ({
							color: theme.palette.secondary.main,
						})}
					/>,
		title: 'Long Experience',
		description: 'Ab explicabo expedita, ducimus quae amet ea perferendis modi qui consectetur laboriosam.',
	},
	{
		id: 2,
		icon: <WorkOutlineOutlinedIcon
						sx={(theme) => ({
							color: theme.palette.secondary.main,
						})}
					/>,
		title: 'Our Success Cases',
		description: 'Alias, possimus minus laborum voluptatem eius expedita nulla quam itaque inventore reiciendis.',
	},
	{
		id: 3,
		icon: <BalanceOutlinedIcon
						sx={(theme) => ({
							color: theme.palette.secondary.main,
						})}
					/>,
		title: 'Professional Attorneys',
		description: 'Provident maiores adipisci ex minus voluptates consequuntur illum consequatur, pariatur eos sint!',
	},
]

import image1 from './assets/blog1.jpg'
import image2 from './assets/blog2.jpg'
import image3 from './assets/blog3.jpg'
import { theme } from './theme';

export const BlogItems = [
	{
		id: 1,
		image: <img src={image1} alt="image" />,
		title: 'What you must know about financial law changes',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium atque delectus exercitationem doloremque. Accusamus, quisquam.',
		date: '30 May 2023',
		tag: 'Law',
	},
	{
		id: 2,
		image: <img src={image2} alt="image" />,
		title: 'Keep away from drugs, the penalty is 20 years',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium atque delectus exercitationem doloremque. Accusamus, quisquam.',
		date: '25 May 2023',
		tag: 'Business',
	},
	{
		id: 3,
		image: <img src={image3} alt="image" />,
		title: 'All you want to know about industrial laws',
		description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium atque delectus exercitationem doloremque. Accusamus, quisquam.',
		date: '22 May 2023',
		tag: 'Law',
	},
]