import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
const baseURL = "https://chefjunctionapi.teceads.co.in/food/chefKitchenDetails/61581b7db048532701a3313a";
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODEwZTc4MTJiZjEwMDZkNzY3M2ExNyIsIm1vYmlsZSI6IjkwNzg0NDMwNDUiLCJ0eXBlIjoidXNlciIsImlhdCI6MTY1NjkzODkyNX0._ZyPq6LnnjJp2ddFaQHW8Je_voCYYK-dBExgiZkKRwU'
// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
export default function Resturant() {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    // const [post, setPost] = React.useState(null);
    useEffect(() => {
        axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`}})
        .then((response) => {
            setData(response.data);
            console.log(response.data);
        }).catch(error => {
            setError(error);
          });
        // axios.get(baseURL).then((response) => {
            
        //     setPost(response.data);
        //     console.log(post);
        //   });

    }  ,[]);
    // if (!data) return null;
  return (
    <div>Resturant
         <h1>{data}</h1>
    </div>
  )
}
