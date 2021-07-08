import React from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { deleteContribution } from '../Redux/TestActions';


export const CrowdCard = (props)=> {

    const dispatch = useDispatch();

    return (

        <View style={{padding:10, backgroundColor:'white', borderWidth:1, width:'100%', marginBottom:20}}>


            <View style={{padding:10}}>
                <Text style={{fontSize:20}}>{props.singleProject.totalContributions}</Text>
            </View>

            {/* withdraw button  */}
            <TouchableOpacity style={{padding:10, backgroundColor:'orange'}} onPress={()=>{

                    props.setDisplayNumState(props.displayNum+1);

                    //execute the dispatch 
                    let updatedProject = dispatch(deleteContribution());
                    console.log('updatedProject', updatedProject);

                    //current search results (array of objs)
                    const prevSearchResults = props.searchResults; 


                    //replace and splice prev search results
                    for(let index in prevSearchResults){
                        let singleProject = prevSearchResults[index];

                        if(singleProject.projectId === updatedProject.projectId){
                            prevSearchResults.splice(index, 1, updatedProject);
                        }
                    }
                    
                    let newSearchResults = prevSearchResults; 



                    /*
                    let newSearchResults = [{
                            projectId:3, 
                            contributors:[{userId:103, userAmount:100}, {userId:101, userAmount:4}],
                            totalContributions:104
                    }]; //must be an array of objects
                    */



                    //set the new search results (doesn't do anything)
                    //splicing doesn't result in an update for some reason, but filter and push does
                    //splice does work if you set an extra data set instead of the search results set, you could update both
                    //you want the search results updated as well even though it doesn't re render with splice because you reference it in other parts
                    props.setExtraDataState(newSearchResults);
                    props.setSearchResultsState(newSearchResults);


            }}>
                <Text> withdraw </Text>
            </TouchableOpacity>
        </View>
    )

   
}

