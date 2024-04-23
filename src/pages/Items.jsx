import clocktowerImage from '../assets/Tower.png'; // Adjust the path as necessary
import React, {useState, useRef} from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import './Items.css';

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
export default function ItemsPage() {
    const columns = [
        {name: 'item', header: 'Item', minWidth: 150, defaultFlex: 1},
        {name: 'type', header: 'Type', minWidth: 150, defaultFlex: 1},
        {name: 'location', header: 'Location', minWidth: 150, defaultFlex: 1},
        {name: 'color', header: 'Color', minWidth: 100, defaultFlex: 1},
        {name: 'room', header: 'Room', minWidth: 100, defaultFlex: 1},
        {name: 'dateFound', header: 'Date Found', minWidth: 100, defaultFlex: 1},
        {name: 'claimed', header: 'Claimed?', minWidth: 100, defaultFlex: 1},

    ]
    const filterValue = [
        {name: 'item', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'location', type: 'string'},
        {name: 'color', type: 'string'},
        {name: 'room', type: 'string'},
        {name: 'dateFound', type: 'string'},
        {name: 'claimed', type: 'boolean'},

      ]
    const gridStyle = { 
    }
    return (
        <div>
            <h2>Find your lost items</h2>
            <div class="page-container">
                <div class="other-content">
                    <img src={clocktowerImage} alt="Cornell Clocktower" className="clocktower"/>
                </div>
                <div class="scrollable-container-wrapper">
                    <ReactDataGrid 
                        class="scrollable-container"
                        idProperty="id"
                        columns={columns}
                        style={gridStyle}
                        dataSource={demoItems}
                        defaultFilterValue={filterValue}
                        pagination={true}
                    />
                </div>
            </div>
        </div>
    )
}