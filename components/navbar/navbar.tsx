import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {icons} from './icons';
import Head from "next/head";
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';


interface Meta{
   title: string,
   description: string,
   type: string,
}

const Meta = ({title, description, type}: Meta) => {
   return(
      <div>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:site_name" content="Raka Rasell" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
      </Head>
      </div>
   )
}

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];
   return (
      <>
      <Meta
         title='Raka Rasell | Personal Portfolio'
         description='Raka Rasell Personal Portfolio'
         type='website'
      />
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <Text b color="inherit" hideIn="xs">
               Raka Rasell
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon/>
                  <Text>See Lastest Code</Text>
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/raselldev"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
      </>
   )
}
