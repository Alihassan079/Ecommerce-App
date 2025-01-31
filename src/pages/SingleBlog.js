import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
     <Meta title={"Dynamic Blog Name"}/>
    <BreadCrumb title="Dynamic Blog Name" />
    <Container class1='blog-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                <HiOutlineArrowLeft className='fs-4' />
                    Go back to Blogs </Link>
              <h3 className='title'>
                A Beautiful Sunday Morning Renaissance</h3> 
                <img src={blog-1}
                className='img-fluid w-100 my-4' alt="blog"/> 
        <p>You are only as good as your last collection,
        which is an enormous pressure. I think there is somthing about luxury-
      its not somthing people need. but its what they want.
       it really pulls at their heart. 
       I have fantastic relationdhip with money. 
       Scelerisque ullamcorper urna nis mollis pertium commando 
       inceptos cum condimentum placerat diamenenatis blandit hac
        eget dis lacus a parturient a accumsan nisl ante vestibulum.
                </p>
            </div>
            </div> 
        </div>  
    </Container>
    </>
  )
}

export default SingleBlog
