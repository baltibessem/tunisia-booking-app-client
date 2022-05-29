import React from 'react'
import  museedata from '../../data'
import Musee from '../Musee/Musee'


const Museepage = () => {

  return ( 


    <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap",marginTop:"200px"}}>

                {
                    museedata.map(item=>{
                    return    <Musee item={item}/>  
                    })


    }
             
           </div>

  )
}

export default Museepage