
import {TEST_ACTION} from '../Redux/TestActions';

const initialState = {
    testArray:[]
};

export const TestReducer = (state = initialState, action) => {

    switch(action.payload){
        case TEST_ACTION:
            return{
                ...state,
                testArray: action.paylaod
            }
    }


    return state; 
}
 