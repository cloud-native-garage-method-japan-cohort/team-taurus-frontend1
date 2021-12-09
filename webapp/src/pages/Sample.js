import React from 'react'
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"

const Sample = () => {
    const data = [
      {
        "id": 1,
        "name": "ザバス ホエイプロテイン100 リッチショコラ味 1050g (約50食分)",
        "flavor": "リッチショコラ味"
      },
      {
        "id": 2,
        "name": "ザバス ホエイプロテイン200 リッチショコラ味 1050g (約50食分)",
        "flavor": "バニラ味"
      },
      {
        "id": 3,
        "name": "ザバス ホエイプロテイン300 リッチショコラ味 1050g (約50食分)",
        "flavor": "ストロベリー味"
      },    
      {
        "id": 4,
        "name": "ザバス ホエイプロテイン100 リッチショコラ味 1050g (約50食分)",
        "flavor": "リッチショコラ味"
      },
      {
        "id": 5,
        "name": "ザバス ホエイプロテイン200 リッチショコラ味 1050g (約50食分)",
        "flavor": "バニラ味"
      },
      {
        "id": 6,
        "name": "ザバス ホエイプロテイン300 リッチショコラ味 1050g (約50食分)",
        "flavor": "ストロベリー味"
      },
      {
        "id": 7,
        "name": "ザバス ホエイプロテイン200 リッチショコラ味 1050g (約50食分)",
        "flavor": "バニラ味"
      },
      {
        "id": 8,
        "name": "ザバス ホエイプロテイン300 リッチショコラ味 1050g (約50食分)",
        "flavor": "ストロベリー味"
      },
      {
        "id": 9,
        "name": "ザバス ホエイプロテイン300 リッチショコラ味 1050g (約50食分)",
        "flavor": "ストロベリー味"
      },
      {
        "id": 10,
        "name": "ザバス ホエイプロテイン200 リッチショコラ味 1050g (約50食分)",
        "flavor": "バニラ味"
      },
      {
        "id": 11,
        "name": "ザバス ホエイプロテイン300 リッチショコラ味 1050g (約50食分)",
        "flavor": "ストロベリー味"
      }        
    ];
    return (
      <div>
        <ReactFlexyTable data={data} /> 
      </div>
    )
  }

  export default Sample