import { useState } from "react";
// import * as api from "../utils/api.js";
import axios from "axios";


function Voter({ votes, article_id }) {
    const [singleVote, setSingleVote] = useState(0);
    const [voteMsg, setVoteMsg] = useState('');


    function changeVote(value) {
        setSingleVote((currentVotes) => {
            return currentVotes + value;
        });
        setVoteMsg('thanks for your vote!')
        axios.patch(`https://nc-news-q2aj.onrender.com/api/articles/${article_id}`, { inc_votes: value }).catch(() => {
            setSingleVote(0);
            setVoteMsg('hmm... your vote did not register, please try again')
        })
    }


    return (
        <>
            <div className="voterContainer">
                <div className="voterBox">
                    <p className="voteHeading">Liked the article? Hated it? Have your say...</p>
                    <br />
                    <p>Current Votes: {votes + singleVote}</p>
                    <button disabled={singleVote === 1} onClick={() => { changeVote(1) }} className="voterButton">+</button>
                    <button disabled={singleVote === -1} onClick={() => {
                        changeVote(-1)
                    }} className="voterButton">-</button>
                    <br /><br />
                    <p className="voteErr">{voteMsg}</p>
                </div>
            </div>
        </>
    )
}

export default Voter