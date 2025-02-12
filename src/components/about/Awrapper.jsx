import React from "react"
import { awrapper } from "../../dummydata"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          
          {awrapper.map((val) => {
            return (
             
              <div className='box '>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h5>{val.title}</h5>
                </div>
              </div>
              
            )
          
          })}
        </div>
        
      </section>
    </>
  )
}

export default Awrapper;
