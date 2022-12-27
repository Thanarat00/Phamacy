import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: '#',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'Image',
    dataIndex: 'imageUrl',
    width: 150,
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: 'Firstname',
    dataIndex: 'fname',
    width: 150,
  },
  {
    title: 'Lastname',
    dataIndex: 'Lname',
    width: 150,
  },
  {
    title: 'Telephone',
    dataIndex: 'telephone',
    width: 150,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 150,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: 150,
  },
];
const data = [];
for (let i = 1; i < 100; i++) {
  data.push({
    key: i,
    id : i,
    imageUrl : "https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1",
    email : 'mon9819@gmail.com',
    fname: `Edward  ${i}`,
    Lname: `Edward  ${i}`,
    telephone : '0951252898',
    status : "online",
    action : 'detele , edit'
  });
}
const Prescription = () => (

  <div className='table'>
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 10,
    }}
    scroll={{
      y: 421,
    }}
  />
  </div>
);
export default Prescription;