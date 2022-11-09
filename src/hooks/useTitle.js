import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title=`${title}-new-wave-trainer`
    },[title])
}
export default useTitle;