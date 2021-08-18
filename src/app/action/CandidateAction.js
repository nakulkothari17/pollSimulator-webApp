export const ADD_CANDIDATE = 'ADD_CANDIDATE';

export const addCandidate = (name, id) => {
    return{
        type: ADD_CANDIDATE,
        candidateDetails:{
            name: name,
            id: id,
        }
    }
};