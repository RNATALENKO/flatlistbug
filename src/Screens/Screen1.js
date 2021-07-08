import React, {useState} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native'
import { useEffect } from 'react/cjs/react.development';
import { CrowdCard } from '../Components/Card';


//parent component
export const Screen1 = () =>{

    //search results
    const [searchResults, setSearchResults] = useState([
        {
            projectId:1, 
            contributors:[{userId:101, userAmount:1}, {userId:101, userAmount:4}],
            totalContributions:5
        },
        {
            projectId:2, 
            contributors:[{userId:102, userAmount:1}],
            totalContributions:1
        }
    ]);

    const [extraData, setExtraData] = useState([]);

    //test
    const [displayNum, setDisplayNum] = useState(0);



    //method to update search results state from child
    const setSearchResultsState = (newResults)=>{
        setSearchResults(newResults);
    }

    
    const setDisplayNumState = (newNum) =>{
        setDisplayNum(newNum);
    }

    const setExtraDataState = (newData)=>{
        setExtraData(newData);
    }

    /*extra data should be working to rerender flat list */
    /* but the problem is new results aren't in */

    return(
        <View style={{width:'100%', padding:30}}>
                <View>
                    <Text>{displayNum}</Text>
                </View>
                <FlatList data={searchResults} extraData={extraData} keyExtractor={(item, index)=>'key:' + index} renderItem={(item,index)=>{
                

                   return( 
                       /* cards that need the updated search results */
                        <CrowdCard singleProject={item.item} 
                        searchResults={searchResults} 
                        setSearchResultsState={setSearchResultsState} 
                        displayNum={displayNum} 
                        setDisplayNumState={setDisplayNumState}
                        setExtraDataState={setExtraDataState}/>
                    )
                }}></FlatList>
        </View>   
    )
}