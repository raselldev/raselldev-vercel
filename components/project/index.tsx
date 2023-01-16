import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
// import {FeatureIcon} from '../icons/FeatureIcon';
import {Flex} from '../styles/flex';
import Link from 'next/link';

export const Project = () => {
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
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            <Flex direction="column" align={'center'}>
               <Text span css={{color: '$blue600'}}>
                  Projects
               </Text>
               <Text h3>Lastest Published Project</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  From 2016, i created my YouTube channel. But until now 
                  i don&lsquo;t have nichie to make my channel growing. The second is Medium,
                  this for me learn how to write a post.
               </Text>

               <Flex
                  justify={'center'}
                  wrap={'wrap'}
                  css={{
                     py: '$10',
                  }}
               >
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           YouTube
                        </Text>
                        <Link href="https://www.youtube.com/rakarasell">
                           <Button>Go To YouTube</Button>
                        </Link>
                     </Flex>
                  </Flex>
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Medium
                        </Text>
                        <Link href="https://medium.com/@rakarasell">
                           <Button>Go To Medium</Button>
                        </Link>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
