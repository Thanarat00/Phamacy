import React from 'react';
import { Table } from 'antd';
import Addstaff from '../componnet/Add/Addstaff';
import Editstaff from '../componnet/Edit/Editstaff';
import Deletestaff from '../componnet/Delete/Deletestaff';
const columns = [
  {
    title: '#',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'รูปภาพ',
    dataIndex: 'imageUrl',
    width: 150,
  },
  {
    title: 'อีเมล',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: 'ชื่อ',
    dataIndex: 'fname',
    width: 150,
  },
  {
    title: 'นามสกุล',
    dataIndex: 'Lname',
    width: 150,
  },
  {
    title: 'เบอร์โทรศัพท์',
    dataIndex: 'telephone',
    width: 150,
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    width: 150,
  },
  {
    title: '',
    dataIndex: 'edit',
    width: 50,
  },
  {
    dataIndex: 'delete',
    width: 50,
  },
];
const data = [];
for (let i = 1; i < 100; i++) {
  data.push({
    key: i,
    id : i,
    imageUrl : 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    email : 'mon9819@gmail.com',
    fname: `Edward  ${i}`,
    Lname: `Edward  ${i}`,
    telephone : '0951252898',
    status : "online",
    edit : <Editstaff />  ,
    delete :<Deletestaff />,
  });
}
const Staff = () => (
  <>
<div className='Add'>
     <Addstaff />
    </div>
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
  </div></>
);
export default Staff;