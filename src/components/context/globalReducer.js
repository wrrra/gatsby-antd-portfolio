export default (state, action) => {
    switch(action.type) {
        case 'TOOGLE_FLAG_COLLAPSE':
            return {
                ...state,
                options: {
                    flagCollapse: !state.options.flagCollapse
                }
            }
        case 'SET_FLAG_COLLAPSE':
            return {
                ...state,
                options: {
                    flagCollapse: action.payload
                }
            }
        default:
            return state;
    }
}