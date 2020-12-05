import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = "http://localhost:3000/Api/V1/";
export const Post = async (RequestUrl, Data) => {
  try {
    let Response = await axios.post(URL + RequestUrl, Data);
    if (Response.data.success) {
      //İŞLEM BAŞARILI
      toast.success(Response.data.message);
      return Response.data;
    } else {
      //İŞLEM BAŞARISIZ
      toast.error(Response.data.message);
      return Response.data;
    }
  } catch (e) {
    //İŞLEM HATALI
    console.error(e);
    toast.error(e);
    return e;
  }
};
