import React from 'react';
import Main from './main';

export default function Home({ open, match: { url } }){  
  return(
    <Main open={open}/>
  );
}
