import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCandidate } from '../app/action/CandidateAction';
import { NavLink } from 'react-router-dom';
import './css/Header.css';

const BecomeCandidate = () => {
    const dispatch = useDispatch();
    const [candidateName, setCandidateName] = useState('');
    const [candidateId, setCandidateId] = useState('');
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
            <div className= "pageLayout">
            <div className="candidateInputContainer">
                <h1>Candidate Details</h1>
                <div className="inputBoxContainer">
                    <div className="inputFieldContainer">
                        <input type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} />    
                    </div>
                    <div className="inputLabelContainer">
                        <h4>Candidate Name</h4>
                    </div>
                </div>
                <div className="inputBoxContainer">
                    <div className="inputFieldContainer">
                        <input type="text" value={candidateId} onChange={(e) => setCandidateId(e.target.value)} />    
                    </div>
                    <div className="inputLabelContainer">
                        <h4>Candidate Id</h4>
                    </div>
                </div>
                <div>
                    <button className="submitBtn" onClick={() => {if(candidateName !== '' && candidateId !== ''){dispatch(addCandidate(candidateName, candidateId));setCandidateName(''); setCandidateId('');} else{ alert('Please fill in the details before proceeding');}} }>Submit</button>
                </div>
            </div>
            </div>
        </div>
    )
};

export default BecomeCandidate;