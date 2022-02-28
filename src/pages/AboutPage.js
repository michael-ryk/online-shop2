import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/forest.JPG';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About'/>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='' />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
          </div>
          <p>
          Pariatur enim consectetur eu laborum consequat nulla in fugiat veniam id eiusmod cupidatat magna sunt. Eiusmod dolore sint veniam incididunt sunt proident. Dolore aute cillum aliquip irure magna in commodo occaecat aliqua consequat ex quis. Veniam laboris quis esse proident et mollit ex magna adipisicing elit elit reprehenderit commodo anim. Incididunt proident in aliquip ut elit reprehenderit quis velit ex aute ex nisi et.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
