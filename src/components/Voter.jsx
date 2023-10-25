import { useState } from "react"

function Voter({ votes }) {
    const [singleVote, setSingleVote] = useState(0);


    function changeVote(value) {
        setSingleVote((currentVotes) => {
            return currentVotes + value;
        });

    }


    return (
        <>
            <div className="voterContainer">
                <div className="voterBox">
                    <p>Votes: {votes + singleVote}</p>

                    <button disabled={singleVote === 1} onClick={() => { changeVote(1) }} className="voterButton">+</button>
                    <button disabled={singleVote === -1} onClick={() => {
                        changeVote(-1)
                    }} className="voterButton">-</button>
                </div>
            </div>
        </>
    )
}

export default Voter