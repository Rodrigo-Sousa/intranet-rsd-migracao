import { useState } from "react";
import { sendConfidentialMessage } from "../../services/api";

export function useConfidentialForm(){
    const [loading, setLoading] = useState(false);

    async function submit(data){
        setLoading(true)
        await sendConfidentialMessage(data)
        setLoading(false)
    }
    return {submit, loading}
}