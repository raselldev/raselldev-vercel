import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Flex
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Text span css={{color: '$accents8'}}>
                     © Copyright 2021 - {new Date().getFullYear()} Raka Rasell
                  </Text>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
