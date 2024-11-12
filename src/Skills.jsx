import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h3 className='heading2'>Skills</h3>
      <div className="contents">
        <div className="flex">
        <SemiDonutChart percentage={80} fill="#03B0FD" txt="HTML"/>
          <SemiDonutChart percentage={45} fill="#03B0FD" txt="CSS"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="JavaScript"/>
        </div>
        <div className="flex">
        <SemiDonutChart percentage={85} fill="#03B0FD" txt="React JS"/>
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="C++"/>
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="Bootstrap5"/>
        </div>
        <div className="flex">
        <SemiDonutChart percentage={50} fill="#03B0FD" txt="NodeJS"/>
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="ExpressJS"/>
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="MongoDB"/>
          <SemiDonutChart percentage={45} fill="#03B0FD" txt="MySQL"/>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
      </motion.div>
    </motion.div>
  );
}

export default Skills;

