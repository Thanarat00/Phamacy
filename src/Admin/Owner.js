import React from 'react';
import { Table } from 'antd';
import Addowner from '../componnet/Add/Addowner';
import Editowner from '../componnet/Edit/Editowner';
import Deleteowner from '../componnet/Delete/Deteleowner';

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
for (let i =1; i < 100; i++) {
  data.push({
    key: i,
    id : i,
    imageUrl : "https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1",
    email : 'mon9819@gmail.com',
    fname: `Edward  ${i}`,
    Lname: `Edward  ${i}`,
    telephone : '0951252898',
    status : "online",
    edit :  <Editowner />,
    delete : <Deleteowner />
  });
}
const Owner = () => (
   <> 
     <div className='Add'>
    <Addowner />
    </div>
  <div className='table'>
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 10,
    }}
    scroll={{
      y: 415,
    }}
  />
  </div></>
);
export default Owner;