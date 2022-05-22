import React, { useState } from 'react'
import { AddCategory } from './components/addCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertapp = props => {

   const [categories, setCategories] =useState(['One Punch']);
   
  //  const handleAdd = () =>{
  //   setCategories([...categories, 'HunterxHunter']);
  
  //  }

  return (
      <>

      <h2>GifEcperApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>


      <ol>
        {
          categories.map( category => (
          <GifGrid 
            key={ category }
            category= { category } 
          />
          ))
        }
      </ol>


      </>
  )
}

