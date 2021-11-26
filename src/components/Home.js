import React from 'react'
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home">
        <h2>Dobro dosli</h2>
        <h1>Restoran braca</h1>
        <p className="head">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        <button onClick={() => {window.location.href="/App2"}} style={{ textDecoration: 'none' }}>Rezerviši</button>
        </div>
    )
}
