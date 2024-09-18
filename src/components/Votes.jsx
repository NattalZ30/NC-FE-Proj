import { useState, useEffect } from "react"
import { updateVotes } from "../../api"

export const Votes = ({article}) => {
    const [clickSwitch, setClickSwitch] = useState(0)
    const [increment, setIncrement] = useState(0)
    const [vote, setVote] = useState(article.votes)

    useEffect(() => {
        updateVotes(article.article_id, increment)
        .then((data) =>{
            setVote(data[0].votes)
        })
    },[article.article_id, clickSwitch])

    function incrementVotes(){
        setClickSwitch(!clickSwitch)
        setIncrement(1)
    }
    function decrementVotes(){
        setClickSwitch(!clickSwitch)
        setIncrement(-1)
    }

    return (
        <div className="vote">
            <p> Votes: {vote}</p>
            <button onClick={incrementVotes}>like</button>
            <button onClick={decrementVotes}>dislike</button>
        </div>
    )
}

export default Votes