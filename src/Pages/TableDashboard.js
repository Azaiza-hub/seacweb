import React, { useState, useEffect } from "react";
import { Table, Space, Button, Modal } from "antd";
import moment from "moment";
import { useHistory } from "react-router-dom";

const editFecha = (solicitud) => {
  return {
    ...solicitud,
    fecha: moment(solicitud.fecha).format("DD-MM-YYYY"),
  };
};

const TableDashboard = (props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://seac-backend.azurewebsites.net/solicitudes")
      .then((res) => res.json())
      .then((data) => data.map((i) => editFecha(i)))
      .then((dt) => {
        setList(dt);
      });
  }, []);

  const columns = [
    {
      title: "Numero",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      //sorter: (a, b) => a.fecha - b.fecha,
      //sortDirections: ["descend", "ascend"],
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
      title: "Tipo",
      dataIndex: "clasificacion",
    },
    {
      title: "Sentimentalismo",
      dataIndex: "sentimentalismo",
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
      <Table dataSource={list} columns={columns} loading={list.length === 0} />
      <Modal
        title="Informacion de solicitud"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      ></Modal>
      <Button style={{top:'-50px',borderColor:'#3A9FF1'}}><a href="https://app.powerbi.com/reportEmbed?reportId=df7906e7-054f-43b6-b926-cedbbe56a720&groupId=b1857c0f-e9df-41ed-b878-499c05a0ce1d&autoAuth=true&ctid=843d9746-0674-48bf-a402-a45cd06f541a&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D">Reporte</a></Button>
    </>
  );
};


export default TableDashboard;
