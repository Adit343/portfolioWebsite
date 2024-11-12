import React from 'react'
import Card from './Card';
import { motion } from 'framer-motion';
import smartphone from "./images/Smartphone-Specifications-Explained.webp"
import movieandseries from "./images/moviesandseries.webp";
import foodItems from "./images/foodItems.jpeg"

const Projects = () => {
    const cards = [
        {
          imageUrl: foodItems,
          altText: 'Tasty Bites',
          title: 'Tasty Bites',
          description: 'Developed TastyBites, a dynamic food ordering website built with React.js, Redux, and JavaScript, focused on delivering a seamless and interactive user experience.',
          explore:"https://github.com/Adit343/TastyBites.git"
        },
        {
          imageUrl:smartphone,
          altText: 'Phone Specification Website',
          title: 'Phone Specification Website',
          description: 'Built a dynamic and responsive Phone Specification website using HTML, CSS, Bootstrap 5, Node.js, and MongoDB, showcasing my full-stack development skills and attention to user-friendly design.',
          explore:"https://github.com/Adit343/phone-specification-website.git"

        },
        {
          imageUrl: movieandseries,
          altText: 'Movies & Series App',
          title: 'Movies & Series App',
          description: "Built a comprehensive Movie and Series app with React.js, enabling users to explore movies by genre, view ratings, watch trailers, and access detailed cast and content information.",
          explore:"https://github.com/Adit343/movies-and-series-react-app.git"
        }
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
