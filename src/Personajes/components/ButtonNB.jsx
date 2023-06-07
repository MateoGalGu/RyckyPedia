


export const ButtonNB = ({ onBack, onNext }) => {

 


  return (
    <div className="d-flex justify-content-center p-4 m-3 align-items-center">
      <button className="btn btn-primary" onClick={ onBack }>
        Back
      </button>
      <button className="btn btn-primary" onClick={ onNext }>
        Next
      </button>
    </div>
  )
}
