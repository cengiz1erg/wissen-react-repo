import React, { useState } from 'react'

function StateSample3() {
    const [countries, setCountries] = useState(['Rize', 'Helsinki']);

    const clearCountries = () => {
        setCountries([]);
    }

  return (
    <>       
                <ul>
                    {
                        countries && countries.map((item, key) => (<li>{item}</li>))
                    }
                </ul>    
                <button onClick={() => clearCountries()}></button>  
    </>
  )
}

export default StateSample3