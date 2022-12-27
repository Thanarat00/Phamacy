import React from 'react';
import { Table } from 'antd';
import Addsupplier from '../componnet/Add/Addsupplier';
import Editsupplier from '../componnet/Edit/Editsuppiler';
import Deletesuppiler from '../componnet/Delete/Deletesuppiler';
const columns = [
  {
    title: '#',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'รูปภาพ',
    dataIndex: 'image',
    width: 150,
  },
  {
    title: 'ชื่อผู้ผลิต',
    dataIndex: 'nsupplier',
    width: 150,
  },
  {
    title: 'เบอร์ศัพท์',
    dataIndex: 'telephone',
    width: 150,
  },
  {
    title: 'เบอร์ติดต่อ',
    dataIndex: 'contact',
    width: 150,
  },

  {
    title: 'อีเมล',
    dataIndex: 'email',
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
    image : 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    email : 'mon9819@gmail.com',
    nsupplier: `Edward  ${i}`,
    telephone : '0951252898',
    contact : "151321231231",
    edit: <Editsupplier />,
    delete : <Deletesuppiler />
  });
}
const Supplier = () => (
<>
<div className='Add'>
    <Addsupplier />
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
export default Supplier;