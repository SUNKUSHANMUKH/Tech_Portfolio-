import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="November 16, 2024"
            subTitle="T-HUB sessions about trending technologies"
            category="Travel"
          />
          <BlogCard
            image={blogImgTwo}
            title="July 15, 2024"
            subTitle="Patents and Copyrights in the Indian IT industry  for industial design"
            category="Patents"
          />
          <BlogCard
            image={blogImgThree}
            title="March 14, 2024"
            subTitle="Funding from State and Central Government for startups"
            category="Funding"
          />
          
        </div>
        
      </div>
  );
};

export default Blog;
