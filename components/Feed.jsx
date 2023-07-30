"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data,handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post)=>(
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}
const Feed = () => {
  const [searchTest, setSearchTest] = useState("");
  const [post, setPost] = useState([]);
  const handleSearchChange = (e) => {};
  useEffect(() => {
    const fetchPosts = async ()=>{
      const response = await fetch('/api/prompt');
      const data = await response.json();
      if(data.length > 0){
        setPost(data);
      }else{
        setPost([]);
      }
    }
    fetchPosts();
  },[]);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search for a tag or a user name here..."
          value={searchTest}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
