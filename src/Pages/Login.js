import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import Title from "antd/lib/skeleton/Title";


const Login = () => {
  let history = useHistory();

  const onFinish = values => {
    console.log("Success:", values);
    setTimeout(() => {
      if(values.username === 'admin@seac.com' && values.password === '123123') {
        history.push('/dashboard');
      } else {
        message.error('Credenciales invalidas, por favor intente de nuevo.');
      }
    },1500);
  };


  return (
      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          width: "50vw",
          height: "50vh",
          background: "white",
          borderRadius: '15px',
          padding: '3rem',
          boxShadow: '2px 10px 16px 0px rgba(0,0,0,0.25)',
        }}
      >
        <Form
          name="login"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          
        </Form>
      </div>
  );
};

export default Login;
