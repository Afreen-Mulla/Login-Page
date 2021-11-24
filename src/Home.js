import React, {useState} from 'react'
import {Table} from 'react-bootstrap';

const Home = () => {
    const [data,setData]=useState([])
     
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>response.json())
       .then((json)=>{
           console.log(json);
       setData(json);
    });


    
    return(
        <div>
        <Table >
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>

            </Table>
            
            <div>
                
                    {data.map((item)=>(
                        <table>
                        <td  key={item.id}>{item.userId}</td>
                        <td  key={item.id}>{item.id}</td>
                        <td  key={item.id}>{item.title}</td>
                        <td  key={item.id}>{item.body}</td>
                        </table>

                    ))}
                
            </div>
            
        </div>
  )
}

export default Home
