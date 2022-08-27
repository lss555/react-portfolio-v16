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
import StudioWebsite from '../../assets/recentprojects/studio-website.png';
// import Lacalle from '../../assets/recentprojects/lacalle.png';

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
      title: 'A film studio website',
      description: `A website built for a startup film studio. Built with React, Styled Components, React bootstrap, EmailJS, and more. Click anywhere in this box to see the live site.`,
      alter: 'Soveriegn Studios',
      image: `${StudioWebsite}`,
      link: 'https://tourmaline-donut-0bc732.netlify.app/',
    },
    {
      id: 3,
      title: 'E-commerce Website',
      description: `Developed a functional React and Redux ecommerce website with users that have the ability to sign up, sign in, sign-out and checkout. Uses Firebase/Firestore for inventory and product data. Click anywhere in this box to see the live site.`,
      alter: 'E-commerce Project',
      image: `${Ecom}`,
      link: 'https://ephemeral-fox-9068d2.netlify.app/',
    },
    {
      id: 4,
      title: 'Street Spots Project',
      description: `An application to create spots that other users and yourself can access. Built with Django, PostgresSQL, ReactJS, and HTML/CSS. Click anywhere in this box to see the live site.`,
      alter: 'Street Spots Project',
      image: `${StreetSpots}`,
      link: 'https://lss555.github.io/street-spots-client/#/',
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
