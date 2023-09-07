import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sparsh Dusad</h4>
      <h4>Copyright &copy; 2023 SD</h4>
      <div className='footerLinks'>
        <a href="https://github.com/SparshDusad" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sparsh-dusad-13b0b3170" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sparshdusad007@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/sparsh8020/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer