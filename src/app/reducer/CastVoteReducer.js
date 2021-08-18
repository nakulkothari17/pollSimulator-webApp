import { CAST_VOTE } from "../action/CastVoteAction";
import Poll from '../../model/Poll';
import Vote from '../../model/Vote';

const initialState = {
    votes: {},
    results: {},
}

const CastVoteReducer = (state = initialState,action) => {
    switch(action.type){
        case CAST_VOTE:
            const doneById = action.voteDetails.doneById;
            const toId = action.voteDetails.toId;
            if(!state.votes[doneById])
            {
                const newVote = new Poll(doneById, toId);
                let newScore = {};
                if(state.results[toId])
                {
                    newScore = new Vote(toId, state.results[toId].votes + 1);
                }
                else
                {
                    newScore = new Vote(toId, 1);
                }

                alert('Vote counted');

                return{
                    ...state,
                    votes: {...state.votes, [doneById]: newVote},
                    results: {...state.results, [toId]: newScore},
                }
                
                
            }
            else
            {
                alert("You've already given the vote");
            }
            /* falls through */
        default: return state;
    }
}

export default CastVoteReducer;