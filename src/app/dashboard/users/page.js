"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem('cachedData');

        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const res = await fetch('https://jsonplaceholder.typicode.com/users');

          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }

          const jsonData = await res.json();
          setData(jsonData);
          localStorage.setItem('cachedData', JSON.stringify(jsonData));
          setLoading(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>City: {user.address.city}</li>
                <br></br>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;

