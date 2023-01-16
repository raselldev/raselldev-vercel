import {Card, Divider, Text} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Link from 'next/link';



interface Repository {
   id: number,
   name: string,
   html_url: string,
   description: string;
}

const GithubRepo: React.FunctionComponent = () => {

   const [repositories, setRepositories] = useState<Repository[]>([])

   useEffect(() => {
      fetch('https://api.github.com/users/raselldev/repos')
      .then(res => res.json())
      .then((data: any) => {
         if(Array.isArray(data)) setRepositories(data)
         else console.error("Data is not array")
      })
      .catch(err => console.error(err))
   }, [])

   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               <Text span css={{color: '$blue600'}}>
                  GitHub Repository
               </Text>
               <Text h3>Lastest Code</Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  All personal project uploaded to GitHub
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               {repositories.map((repo, index) => (
                  index < 4  && (
                     <Link href={repo.html_url} key={repo.id}>
                        <Card css={
                           {
                              minHeight: '120px',
                              maxHeight: '150px'

                           }
                           }>
                           <Card.Body>
                              <Flex css={{gap: '0.5rem'}}>
                                 <BoxIcon />
                                 <Flex direction={'column'}>
                                    <Text h5>
                                       {repo.name}
                                    </Text>
                                    <Text span>
                                       {repo.description}
                                    </Text>
                                 </Flex>
                              </Flex>
                           </Card.Body>
                        </Card>
                     </Link>
               )))}
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};

export default GithubRepo