import React from 'react'

import Something from '../something/somthing'

import SHOW_DATA from './anything-data'




class Anything extends React.Component{
    constructor(props){
    super(props)
    
    this.state = {
        epoche: SHOW_DATA
        }
    }



    render(){

        const {epoche} = this.state 
        return (
            <div>
            {
                epoche.map(({id, ...otherdata}) => (
                    <Something key={id} {...otherdata}/>
                ))
            }
        </div>
        )
    }


}
export default Anything