import React, { useState, useEffect } from "react";
import { Table, Space, Button, Modal } from "antd";
import { useHistory } from "react-router-dom";




const TableDashboard = (props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [list,setList] = useState([]);
  useEffect(() => {
    fetch("https://seac-backend.azurewebsites.net/solicitudes")
    .then(res=>res.json())
    .then(res=>{ 
      setList(res);     
    });
  },[]);
  const columns = [
    {
      title: "Numero",
      dataIndex: "id",
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
    },
    {
      title: "Direccion",
      dataIndex: "location",
    },
    {
      title: "Descripcion",
      dataIndex: "descripcion",
    },

    {
      title: "Estado",
      dataIndex: "estado",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => history.push(`/info-solicitud/${record.id}`)}>
            Ver Mas
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table dataSource={list} columns={columns} loading={list.length===0} />
      <Modal
        
        title="Informacion de solicitud"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      ></Modal>
    </>
  );
};

export default TableDashboard;
