import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {About} from '../components/about';
import {Box} from '../components/styles/box';
import {Experience} from '../components/experience';
import {Project} from '../components/project';
import {Testimonials} from '../components/tesminonials';
import {Statistics} from '../components/statistics';
import {Plans} from '../components/plans';
import {Faq} from '../components/faq';
import {Cta} from '../components/cta';
import {Footer} from '../components/footer';
import GithubRepo from '../components/github';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <About />
            <Experience />
            <Project />
            <Testimonials />
            <GithubRepo />
            {/* <Statistics /> */}
            {/* <Plans /> */}
            {/* <Faq /> */}
            <Cta />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
