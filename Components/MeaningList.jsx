
const MeaningList = ({mean}) => {

  return (
    
    <div>

       {mean.map(val => val.meanings.map(mean=>mean.definitions.map(def=>(
        <di key={def.definition}>

            <li>{def.definition}</li>
            <hr />

        </di>
       ))))}

    </div>
  )
}

export default MeaningList; 
