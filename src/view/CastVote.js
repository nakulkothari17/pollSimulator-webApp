import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import Candidate from '../model/Candidate';
import {castVote} from '../app/action/CastVoteAction';
import './css/Header.css';

const CastVote = () => {
    const candidates = useSelector((state) => state.candidate.candidates);
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const [voterId, setVoterId] = useState('');
    const candidatesArray = [];
    const dispatch = useDispatch();
    for(const key in candidates)
    {
        candidatesArray.push(new Candidate(candidates[key].name, candidates[key].id, candidates[key].vote));
    }
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
                <h1>Cast Vote</h1>
                <div className="inputBoxContainer">
                    <div className="inputFieldContainer">
                        <input type="text" value={voterId} onChange={(e) => setVoterId(e.target.value)}/>    
                    </div>
                    
                    <div className="inputLabelContainer">
                        <h4>Voter Id</h4>
                    </div>
                </div>
                {
                    candidatesArray.length !== 0 ? 
                    <div className="voteNamesContainer">
                        {
                            candidatesArray.map((canObj) => <div key={canObj.id}><label>{canObj.name}</label><input type="radio" value={canObj.name} checked={selectedCandidate === canObj.id} onChange={() => setSelectedCandidate(canObj.id)}/> </div>)
                        }
                    </div> : null
                }
                
                <div>
                    <button className="submitBtn" onClick={() => {if(voterId !== '' && selectedCandidate !== ''){dispatch(castVote(voterId, selectedCandidate)); setVoterId(''); setSelectedCandidate('');}else{alert('Please fill in the details first before proceeding');}}}>Submit</button>
                </div>
            </div>
            </div>
        </div>
    )
};

export default CastVote;