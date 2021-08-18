import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Candidate from '../model/Candidate';
import './css/Header.css';

const ElectionResult = () => {
    const electionResults = useSelector((state) => state.castVote.results);
    const candidates = useSelector((state) => state.candidate.candidates);
    const tempVotes = [];
    for(const key in candidates)
    {
        if(electionResults[key])
        {
            tempVotes.push(new Candidate(candidates[key].name, key, electionResults[key].votes));
        }
        else
        {
            tempVotes.push(new Candidate(candidates[key].name,key, candidates[key].votes));
        }
    }
    tempVotes.sort((a,b)=> {return b.votes - a.votes});
    return(
        <div>
            <div class="fixed-header">
                <div class="container">
                    <nav>
                    <NavLink className="textLink" to="/" activeClassName="textLinkActive">Poll Simulator</NavLink>
                    <NavLink className="textLink" to="/become-candidate">Become Candidate</NavLink>
                    <NavLink className="textLink" to="/cast-vote">Cast Vote</NavLink>
                    <NavLink className="textLink" to="election-result">Election Result</NavLink>
                    </nav>
                </div>
            </div>
            <div className="pageLayout">
            <div className="candidateInputContainer">
                <h1>Election Results</h1>
                {
                    tempVotes.map((cand) => <h4><div className="resultNameContainer" key={cand.id}> {cand.name} - {cand.votes} </div></h4>)
                } 
            </div>
            </div>      
        </div>
    )
};

export default ElectionResult;