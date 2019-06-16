import React from 'react'

function NameList() {
    const names = ['aaaa','bbbb','cccc','dddd']
    const nameList = names.map((name,index) => <h2>{index} {name}</h2>)
    return (
        //Normal List
        // <div>
        //     <h2><u>List</u></h2>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        //     <h2>{names[3]}</h2>
        // </div>
        
        <div>
        {
      // names.map(name => <h2>{name}</h2>)
      nameList
        }
        </div>

    )
}

export default NameList
