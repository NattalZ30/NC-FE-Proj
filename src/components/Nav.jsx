import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import Header from "./Header";
import { Link } from "react-router-dom";

export const Nav = ({setSearchParams}) => {
    

    const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics()
         .then((data) => {
             setTopics(data)
         })}, []
     )

    const handleTopicClick = (topicName) => {
        setSearchParams({ topic: topicName });
    };
    
    return (
        <div className="navbar">
            <Header />
            <nav>
                {topics.map((topic, index) => {
                    return (                  
                    <Link to={"./?" + new URLSearchParams({ topic: topic.slug }).toString()}
                    onClick={() => handleTopicClick(topic.slug)} 
                    key={index}
                >
                    {topic.slug}
                </Link>
                )
                })}
            </nav>
        </div>
    )
}

export default Nav;