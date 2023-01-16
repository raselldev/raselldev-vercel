import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import CompanyLogo from './company';
import { CheckIcon } from '../icons/CheckIcon';
import Image from 'next/image'

export const Experience = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
                  Experience
               </Text>
               <Text h3>My Experience</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  From Digital Marketing to Programmer.
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <CheckIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Honda Indonesia (2021 - Now)
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Run monolith development with .NET stack,
                        maintenance & migrate apps, and
                        data processing with SQL Server.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <CheckIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        GIJOEFIX (2019 - 2021)
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Here i created a service where everyone can service
                        their gadgets anywhere and anytime.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <CheckIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Traders Family (2017 - 2019)
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        This my first time to work in my life. In Here
                        i learned so many skill like Social Media Marketing, 
                        Digital Marketing, and Programming.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
            <img src="experience.svg"></img>
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
