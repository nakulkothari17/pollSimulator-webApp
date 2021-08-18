import { ADD_CANDIDATE } from "../action/CandidateAction";

import Candidate from '../../model/Candidate';

const initialState = {
    candidates: {},
};

const CandidateReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_CANDIDATE:
            const canName = action.candidateDetails.name;
            const canId = action.candidateDetails.id;
            if(!state.candidates[canId])
            {
                alert('Candidate added.');
                const newCandidate = new Candidate(canName, canId, 0);
                return{
                    ...state,
                    candidates: {...state.candidates, [canId]: newCandidate}
                }
            }
            else
            {
                alert('Candidate has already been added.');
            }
            /* falls through */
        default: return state;
    }
    
}

export default CandidateReducer;