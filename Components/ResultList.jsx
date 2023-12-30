import { useEffect, useState, useContext } from "react";
import axios from "axios"
import { InputContext } from "../App";
import MeaningList from "./MeaningList";
import Exemples from "./Exemples";

axios.defaults.baseURL =  'https://api.dictionaryapi.dev/api/v2/entries/en';

const ResultList = () => {

    const {inputValue} = useContext(InputContext);

    const [response, setResponse] = useState(""); 
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (param)=>  {

        try {
            setLoading(true)

            const res = await axios(`/${param}`)
            setResponse(res.data);
            setError(null); 

        } catch(erro) {

            setError(erro)

        }finally{
            setLoading(false)
        }

    }

    // rodar a função no useefefct 

    useEffect(()=> {

        if(inputValue.length){
            fetchData(inputValue)
        }

    }, [inputValue ])

    if (loading === true){

        return <h1>Loading...</h1>
    }

    if (error){
        return <h1 className="text-center mt-10 font-semibold text-gray-500">No Result Found!</h1>
    }

  return (

    <div className="camtainer mx-auto p-4 max-w-2xl">

        {
            response && (

             <div>
                  <h3 className=" text-2xl font-bold mt-4">Meaning & Definitions:</h3>
                  <MeaningList mean={response} />
                  <h3 className=" text-2xl font-bold mt-4">Example:</h3>
                  <Exemples mean={response} />
              </div>
            )
        }

    </div>
  )
}

export default ResultList; 
