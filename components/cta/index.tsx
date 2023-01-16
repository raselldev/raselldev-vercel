import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';
import Link from 'next/link';

export const Cta = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Contact Me</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
               Komunikasi tidak hanya tentang menyampaikan pesan, tetapi juga mendengarkan dengan sepenuh hati. - Senja
            </Text>

            <Link href="mailto:rakarasell@outlook.com">
               <Button>Contact</Button>
            </Link>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
