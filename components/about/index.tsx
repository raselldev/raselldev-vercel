import {Button, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';

export const About = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'pb': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{textAlign: 'center'}}>
               About Me
            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               Hello my name is Raka Rasell.
               You can call me Raka or Rasell. 
               Currently working on <Text b >Honda Indonesia</Text>
            </Text>
            <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
                  weight="normal"
                  size={'$lg'}>
                     I really enjoy writing code. 
                     The code I created for the first time was a website in 2015 using HTML CSS. 
                     The first time I aspired to be a network engineer, 
                     but all that changed when I entered the world of lectures.
            </Text>
            <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
                  weight="normal"
                  size={'$lg'}>
                     <Text b>Skill Interest: </Text>
                     C#, .NET, Xamarin, SQL, Python, Go, Node, Container, Typescript
            </Text>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
