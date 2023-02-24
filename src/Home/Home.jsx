import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./home.css"
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const [list, setList] = useState([]);
  const [listLen, setListLen] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  const navigate = useNavigate();

  const fetchList = async() => {
    setLoading(true);
    const res = await axios.get("https://randomuser.me/api/?results=500")
    const newItems = await res.data.results;
    await setList([...list, ...newItems]);
    setListLen(newItems)
    setLoading(false);
  }

useEffect(() => {
   fetchList();
},[] )



const handleScroll =  (e) => {
  // const { scrollTop, scrollHeight, clientHeight } = e.target;
  if (!loading) {
    setLoading(true);
    setTimeout(() => {
      console.log("hey");
      setStart(end + 1);
      setEnd(end + 10);
    }, 1000);
  }
}

useEffect(() => {
  if (end < listLen.length) {
    fetchList();
  }
}, [end]);

const handleLogout = () => {
   localStorage.clear();
   window.location.reload();
   navigate.push("/focusacad")

}

  return (
    <div onScroll={handleScroll} className="mainContainer" style={{ height: '100vh', overflow:'scroll' }}>
    <div className='topbar'>
    <h4>User List</h4>
    <button onClick={handleLogout}>Logout</button>
    </div>
    {
      list.slice(0, end).map((index) => (
        <div key={index.cell} className="list" >
          <h4>{index.name.first} {index.name.last}</h4>
          <img alt='' src={index.picture.thumbnail}></img>
        </div>
      )) 
    }
    {loading && <div>Loading more items...</div>}
    </div>
  )
}
