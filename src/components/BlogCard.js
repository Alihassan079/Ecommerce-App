import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
       
<div className='blog-card'>
 <div className='card-image'>
<img src="images/blog-1.jpg" className='img-fluid w-100'  alt="blog" />
 </div>
<div className='blog-content'>
<p className='date'>05 Feb, 2024</p>
 <h5 className='tiltle'>
 A Beautiful Sunday Morning Renaissance
 </h5>
 <p className='decs ' >
 "Excited to share my latest project showcasing my skills in HTML, CSS, JavaScript and ReactJs! 🚀 
 </p>
 <Link to="/blog/:id" className="button">
 Read More
</Link>
                </div>
            </div>
       
    )
}

export default BlogCard
