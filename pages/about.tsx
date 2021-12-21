import Image from 'next/image';
import Layout from '../components/Layout';
import aboutMeImg from '../public/images/about/Headshot.jpg';

const About = () => {
  return (
    <Layout>
      <div className="container flex flex-col sm:flex-row">
        <div className="flex items-center">
          <div className="image-cropper rounded-none sm:rounded-full">
            <Image className="about-img" src={aboutMeImg} />
          </div>
        </div>
        <div className="mx-5 about-container">
          <h2 className="my-2">About Me</h2>
          <div className="divider"></div>
          <p className="my-2">
            My name is Travis Cashion. I was born and raised in the beautiful
            state of Colorado. I am a family man, a programmer, a writer, and an
            adventurer. I love to build things, learn new skills and
            technologies, and spend time in nature.
          </p>
          <p>
            <br />
          </p>
          <p>Thanks for visiting my web page! Talk to me about:</p>
          <p>
            <br />
          </p>
          <ul className="list-disc list-inside">
            <li>Web development</li>
            <li>Programming</li>
            <li>Writing</li>
            <li>Business</li>
            <li>Hunting, fishing, wildlife, nature & the outdoors</li>
            <li>Cooking</li>
            <li>Fitness: endurance training, lifting, kettlebells</li>
            <li>Travelling</li>
            <li>Dogs</li>
            <li>Spanish</li>
            <li>Or anything else!</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
