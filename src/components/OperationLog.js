import React from 'react'

function OperationLog({ operationLog }) {
  return (
    <React.Fragment>
      <tr>
        <td>{operationLog.description}</td>
        <td>{operationLog.operatedAt}</td>
      </tr>
    </React.Fragment>
  )
}

export default OperationLog
