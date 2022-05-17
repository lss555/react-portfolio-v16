/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Soar from '../../assets/recentprojects/soar.png';
import Ecom from '../../assets/recentprojects/e-com.png';
// import Lofo from '../../assets/recentprojects/lofo.png';
// import Startup from '../../assets/recentprojects/startup.png';
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
      description: `Designed and developed a ReactJS application to boost a small business's online traffic.`,
      alter: 'React Portfolio',
      image: `${Soar}`,
    },
    {
      id: 2,
      title: 'E-commerce Project',
      description: `Developed a functional and easy to use e-commerce website with Firestore to hold inventory and product data.`,
      alter: 'VeriTru Project',
      image: `${Ecom}`,
    },
    // {
    //   id: 3,
    //   title: 'LoFo Project',
    //   description: `Logistics and Forwarding website built using
    //   ReactJS to design and develop its front-end.`,
    //   alter: 'LoFo Project',
    //   image: `${Lofo}`,
    // },
    // {
    //   id: 4,
    //   title: 'Startup Project',
    //   description: `A website portfolio project for the Startup Dev Team
    //   built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
    //   alter: 'Startup Project',
    //   image: `${Startup}`,
    // },
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
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
