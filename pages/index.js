import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/LayoutWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHands,
  faHandHoldingUsd,
  faHandsHelping,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>NGO || Home</title>
      </Head>
      <section className='main-showcase d-flex flex-column justify-content-center align-items-center p-4'>
        <h2 className='showcase-heading text-white'>
          Your contribution can help achieve a solution
        </h2>
        <p className='showcase-text text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          perferendis.
        </p>
        <button className='get-started btn btn-primary'>Get Started</button>
      </section>
      <section className='container py-4'>
        <div className='row'>
          <p className='col-sm-12 col-md-4'>NonProfit Organization </p>
          <p className='col-sm-12 col-md-8'>
            We make a difference in the lives of people during a very traumatic
            time in their life. Meeting their medical transport needs eases
            their burden.
          </p>
        </div>
      </section>
      <section className='support bg-light py-4'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-sm-10 col-md-6 col-lg-4 text-center'>
              <div
                className='card p-2'
              >
                <div className='card-img-top py-3'>
                  <FontAwesomeIcon icon={faHandsHelping} />
                </div>
                <div className='card-body'>
                  <h3 className='card-title'>Volunteer</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ut, officiis.
                  </p>
                  <button className='btn btn-primary text-capitalize'>
                    learn more
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-10 col-md-6 col-lg-4'>
              <div
                className='card text-center p-2'
              >
                <div className='card-img-top py-3'>
                  <FontAwesomeIcon icon={faHands} />
                </div>
                <div className='card-body'>
                  <h3 className='card-title'>Donate</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ut, officiis.
                  </p>
                  <button className='btn btn-primary text-capitalize'>
                    learn more
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-10 col-md-6 col-lg-4 text-center'>
              <div
                className='card p-2'
              >
                <div className='card-img-top py-3'>
                  <FontAwesomeIcon icon={faHandHoldingUsd} />
                </div>
                <div className='card-body'>
                  <h3 className='card-title'>Fundraise</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ut, officiis.
                  </p>
                  <button className='btn btn-primary text-capitalize'>
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='features py-4'>
        <div className='container'>
          <h3 className='display-6 text-capitalize mb-3'>feature causes</h3>
          <div className='text-wrapper'>
            <p className='mb-1'>
              We make a difference in the lives of people during a very
              traumatic time in their life.
            </p>
            <p>Meeting their medical transport needs eases their burden.</p>
          </div>
          <div className='features-wrapper row g-3'>
            <div
              className='col-sm-12 col-md-6 col-lg-4'
            >
              <div className='content'>
                <img src='/imgs/img(1).jpg' alt='features images' />
                <div className='content-detail p-4'>
                  <p className='text-white'>
                    We make a difference in the lives of people during a very
                    traumatic time in their life.
                  </p>
                  <p className='text-white'>
                    Meeting their medical transport needs eases their burden.
                  </p>
                  <a className='btn btn-light text-success' href='#'>
                    {' '}
                    learn more
                  </a>
                </div>
              </div>
              <div className='mt-3'>
                <h3 className='mb-0'>Cash for Charity</h3>
                <p>For poor water</p>
              </div>
            </div>
            <div
              className='col-sm-12 col-md-6 col-lg-4'
            >
              <div className='content'>
                <img src='/imgs/img(2).jpg' alt='features images' />
                <div className='content-detail p-4'>
                  <p className='text-white'>
                    We make a difference in the lives of people during a very
                    traumatic time in their life.
                  </p>
                  <p className='text-white'>
                    Meeting their medical transport needs eases their burden.
                  </p>
                  <a className='btn btn-light text-success' href='#'>
                    {' '}
                    learn more
                  </a>
                </div>
              </div>
              <div className='mt-3'>
                <h3 className='mb-0'>Medical facilities</h3>
                <p>Treatment</p>
              </div>
            </div>
            <div
              className='col-sm-12 col-md-6 col-lg-4'
            >
              <div className='content'>
                <img src='/imgs/img(3).jpg' alt='features images' />
                <div className='content-detail p-4'>
                  <p className='text-white'>
                    We make a difference in the lives of people during a very
                    traumatic time in their life.
                  </p>
                  <p className='text-white'>
                    Meeting their medical transport needs eases their burden.
                  </p>
                  <a className='btn btn-light text-success' href='#'>
                    {' '}
                    learn more
                  </a>
                </div>
              </div>
              <div className='mt-3'>
                <h3 className='mb-0'>For Homeless</h3>
                <p>For safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-difference p-3 d-flex justify-content-center align-items-center'>
        <h2 className='display-5 text-white'>
          <FontAwesomeIcon icon={faQuoteLeft} className='mr-1' />
          <span> You can make a difference, so why don’t you?</span>
        </h2>
      </section>
      <section className='events-gallery-wrapper py-4'>
        <div className='container'>
          <div className='row g-3'>
            <div
              className='event col-sm-12 col-md-6 col-lg-5'
            >
              <h5 className='event-heading text-capitalize mb-3'>
                upcomming events
              </h5>
            </div>
            <div
              className='photo-gallery col-sm-12 col-md-6 col-lg-7'
            >
              <h5 className='photo-gallery-heading text-capitalize mb-3'>
                photo gallery
              </h5>
              <div className='row  g-2 m-0'>
                <div className='col-6 col-sm-6 col-md-4 col-lg-3 gallery-img'>
                  <img
                    src='/imgs/img(1).jpg'
                    alt='gallery image'
                  />
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-3 gallery-img'>
                  <img
                    src='/imgs/img(2).jpg'
                    alt='gallery image'
                  />
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-3 gallery-img'>
                  <img
                    src='/imgs/img(3).jpg'
                    alt='gallery image'
                  />
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-3 gallery-img'>
                  <img
                    src='/imgs/img(1).jpg'
                    alt='gallery image'
                  />
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-3 gallery-img'>
                  <img
                    src='/imgs/img(2).jpg'
                    alt='gallery image' />
                </div>
                <div className='col-6 col-sm-6 col-md-4 col-lg-3 gallery-img'>
                  <img
                    src='/imgs/img(3).jpg'
                    alt='gallery image'
                  />
                </div>
              </div>
              <a href='#' className='btn btn-outline-primary mt-3'>
                view more
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
