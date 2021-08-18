export const CAST_VOTE = 'CAST_VOTE';

export const castVote = (doneById, toId) => {
    return{
        type: CAST_VOTE,
        voteDetails:{
            doneById: doneById,
            toId: toId,
        }
    }
}