import axios from "axios";

export const getData = async () => {
    const fetch = await axios.get("http://127.0.0.1:8000/api/about/")
    return fetch?.data?.data?.content
}
