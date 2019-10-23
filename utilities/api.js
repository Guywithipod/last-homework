import Axios from "axios";

export default  {

    get: () => {
        return Axios.get("api/books")
    },
}
// export default from api
// axios.get (url)
// update and delete
// this is actually the front end.