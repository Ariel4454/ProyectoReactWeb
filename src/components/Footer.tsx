import React from 'react';
import '../assets/styles/Footer.css';
import { Typography, Box } from "@mui/material";

interface FooterProps {
  options: string[]; 
}

const Footer: React.FC<FooterProps> = ({ options }) => {
  return (
    <footer className="footer">
      <Box className="footer-content">
        <Typography variant="body2" color="textSecondary">
          {options.map((option, index) => (
            <a key={index} href="#">{option}</a>
          ))}
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
