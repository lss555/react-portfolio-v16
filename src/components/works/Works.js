/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link } from 'react-router-dom'

import './Works.css';

// Import ../../assets/recentprojects/
import Soar from '../../assets/recentprojects/soar.png';
import Ecom from '../../assets/recentprojects/e-com.png';
import StreetSpots from '../../assets/recentprojects/street-spots.png';
import StudioWebsite from '../../assets/recentprojects/studio.png';
import DevSpot from '../../assets/recentprojects/Dev-users.png';
import ShredMtns from '../../assets/recentprojects/shred-mtns.png';
import SanityFilm from '../../assets/recentprojects/sanity-film.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Soar Counseling Services Inc.',
      description: `Designed and developed a ReactJS application to boost a small business's online traffic. Click anywhere in this box to see the live site.`,
      alter: 'Soar Counseling Services Inc.',
      image: `${Soar}`,
      link: 'https://soarcounselingnow.com/',
    },
    {
      id: 2,
      title: 'Film Studio',
      description: `A full stack film studio website built with Sanity headless CMS. The headless CMS gives the owners of the website the abilty to change 95% of the content through a simple UI. Built with React, Framer motion, CSS, GROQ, and Sanity. This projects is the second iteration of the film studio website found below. Click anywhere in this box to see the live site.`,
      alter: 'Film',
      image: `${SanityFilm}`,
      link: 'https://tourmaline-cobbler-6b313c.netlify.app/',
    },
    {
      id: 3,
      title: 'Ski/Snowboard Blog Concept',
      description: `A full stack blog made with mostly React and styled components in the front end. GROQ for the back end. Sanity as a headless CMS so the blog owner can CRUD blog posts and CRUD authors with a simple UI. The authors are dynamically shown on the about page so if a new author writes a post they will automatically added to the about page with their bio. Click anywhere in this box to see the live site.`,
      alter: 'Blog',
      image: `${ShredMtns}`,
      link: 'https://dulcet-eclair-e1df93.netlify.app/',
    },
    {
      id: 4,
      title: 'Film Studio mock up',
      description: `A mockup website built for a startup film studio. Built as a visualization for the client. Built with React, Styled Components, React bootstrap, EmailJS, and more. Click anywhere in this box to see the live site.`,
      alter: 'Soveriegn Studios',
      image: `${StudioWebsite}`,
      link: 'https://tourmaline-donut-0bc732.netlify.app/',
    },
    {
      id: 5,
      title: 'Street Spots Project',
      description: `An application to create spots that other users and yourself can access. Built with Django, PostgresSQL, ReactJS, and HTML/CSS. Click anywhere in this box to see the live site.`,
      alter: 'Street Spots Project',
      image: `${StreetSpots}`,
      link: 'https://github.com/lss555/street-spots-client',
    },
    {
      id: 6,
      title: 'Dev Spot',
      description: `Social media application for developers. Has user profiles with image upload for profile pictures, descriptions and more. Live feed where users can post "tweets" that other users can see. These "tweets" can be edited by the owner of the tweet and deleted. Built with React in the front-end and Express, MongoDB, and Mongoose in the back-end. Built on a team of 3 other developers and myself in one week.`,
      alter: 'Dev Spot',
      image: `${DevSpot}`,
      link: 'https://github.com/Team-StuckOverflow',
    },
    {
      id: 7,
      title: 'E-commerce Website',
      description: `Developed a functional React and Redux ecommerce website with users that have the ability to sign up, sign in, sign-out and checkout. Uses Firebase/Firestore for inventory and product data. Click anywhere in this box to see the live site.`,
      alter: 'E-commerce Project',
      image: `${Ecom}`,
      link: 'https://ephemeral-fox-9068d2.netlify.app/',
    },

    // {
    //   id: 5,
    //   title: 'LaCalle Cafe',
    //   description: `A website project for the La Calle Cafe business
    //   built using Wordpress and PHP with integrated SEO tools to help
    //   the business ramp up its prospects and lead generation.`,
    //   alter: 'Startup Project',
    //   image: `${Lacalle}`,
    // },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <a href={project.link} target="_blank" className='work-link' rel="noreferrer">
                <h3 className="title">
                  <TextDecrypt text={ project.id + '. ' + project.title } />
                </h3>
                <p className="description">
                  { project.description }
                </p>
              </a>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
