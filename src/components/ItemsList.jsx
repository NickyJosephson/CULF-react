import React from 'react'
import {useState, useEffect, useRef} from 'react'
import './ItemsList.css'
import getItems from '../api/ItemsAPI'
import fs from 'fs'

const demoItems = [
    {
      "item": "AirPods",
      "type": "Headphones",
      "location": "Central",
      "color": "white",
      "room": null,
      "dateFound": "2023-11-22T00:00:00.000Z",
      "claimed": false,
      "images": ["airpods.jpg"],
      "uniqueDescriptors": "Scratch on the front of the case."
    },
    {
      "item": "Hat",
      "type": "Cloths",
      "location": "North Campus",
      "color": "white",
      "room": 517,
      "dateFound": "2023-10-21T00:00:00.000Z",
      "claimed": false,
      "images": ["nike-hat.jpg"],
      "uniqueDescriptors": "Green hat with a Nike logo."
    },
    {
      "item": "Student ID Card",
      "type": "Identification",
      "location": "West Campus",
      "color": "white",
      "room": null,
      "dateFound": "2023-11-22T00:00:00.000Z",
      "claimed": false,
      "images": [],
      "uniqueDescriptors": null
    },
    {
        "item": "Student ID Card",
        "type": "Identification",
        "location": "West Campus",
        "color": "white",
        "room": null,
        "dateFound": "2023-11-22T00:00:00.000Z",
        "claimed": false,
        "images": [],
        "uniqueDescriptors": null
      },
      {
        "item": "Student ID Card",
        "type": "Identification",
        "location": "West Campus",
        "color": "white",
        "room": null,
        "dateFound": "2023-11-22T00:00:00.000Z",
        "claimed": false,
        "images": [],
        "uniqueDescriptors": null
      }
  ]  


export default function ItemsScroller() {
    // const [items, setItems] = useState(sampleData); // sampleData should be pre-defined or fetched
    const [items] = useState(demoItems)
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef(null)

  
    // Handler for search input changes
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    };
  
    // Filter items based on search term
    const filteredItems = items.filter(item =>
      item.item.toLowerCase().includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm) ||
      item.location.toLowerCase().includes(searchTerm)
    );
    return (
        <div>
            <input
                type="text"
                placeholder="Search items..."
                onChange={handleSearchChange}
                style={{ margin: '10px 0', padding: '8px', width: '95%' }}
            />
            <div className="scrollable-container">
                {filteredItems.map((item, index) => (
                    <div key={index} className="list-item">
                        <div><strong>Item:</strong> {item.item}</div>
                        <div><strong>Type:</strong> {item.type}</div>
                        <div><strong>Location:</strong> {item.location}</div>
                        <div><strong>Color:</strong> {item.color}</div>
                        <div><strong>Date Found:</strong> {item.dateFound}</div>
                        <div><strong>Claimed:</strong> {item.claimed ? 'Yes' : 'No'}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}