import axios from "axios";
// const token = localStorage.getItem('userToken');
export default axios.create({
        baseURL: "https://backend-itourgo.onrender.com/",
});
