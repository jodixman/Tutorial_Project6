import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from '../../assets'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      {/*----- Top[Text] -----*/}
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happerning, <br /> We are blogging about it.</h1>
      </div>

      {/*----- Bottom[Grop] -----*/}
      <div className='gpt3__blog-container'>
        
        {/*-- GropA --*/}
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        
        {/*-- GropB --*/}
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog