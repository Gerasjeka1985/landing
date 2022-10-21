// import {defineStore} from "pinia";
// import axios from "axios";
// import {ResponseData, ResponseDataPicture} from "~/types/responseData";
//
// interface State {
//     test: ResponseData
//     pic: ResponseDataPicture
// }
//
// export const useDataStore = defineStore({
//     id: 'dataStore',
//     state: function (){
//         return {
//             test: "",
//             pict: ""
//         }
//     },
//     getters: {
//         getState : (state) => state.test
//     },
//     actions: {
//         async getData(){
//             try {
//                 this.$state.test = await axios.get("http://localhost:9100/api/test")
//                     .then(resp => resp.data);
//             }catch (err){
//                 console.log(err);
//             }
//         },
//         async getTestImg(){
//             try {
//                 this.$state.pict = await axios.get("http://localhost:9100/static/img.jpg")
//                     .then(resp => resp.data);
//             }catch (err){
//                 console.log(err);
//             }
//         }
//     }
// })

