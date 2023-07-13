import { useEffect, useState } from 'react';
import { withTranslation } from "react-i18next";
import { Container } from "./styles";
import { Form, Col, Row, Input, Button, Tabs, TabsProps, Slider, Checkbox, Select  } from "antd";
import { SliderMarks } from "antd/lib/slider";
import MakeService from "../../services/makeService";
import YearService from '../../services/yearService';
import ModelService from '../../services/modelService';
import VersionService from '../../services/versionService';
import QuoteService from '../../services/quoteService';

const FormSale = () =>{
  const [marcas, setMarcas] = useState([]);
  const [anhos, setAnhos] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [form] = Form.useForm();
  
  useEffect(() => {
    MakeService.getAll().then((resp:any) =>{
      setMarcas(resp?.data);
    })
  }, [])

  const selectMarca = (value: any) =>{
    if(value !== ''){
      YearService.getYearByMake(parseInt(value)).then((resp: any) =>{
        setAnhos(resp?.data);
      })
    }
  }
  const selectAnho = (value: any)=>{
    if(value !== ''){
      ModelService.getModelsByYear(parseInt(value)).then((resp: any) =>{
        setModelos(resp?.data);
      })
    }
  }
  const selectModelo = (value: any)=>{
    if(value !== ''){
      VersionService.getVersionsByModel(parseInt(value)).then((resp: any) =>{
        setVersiones(resp?.data);
      })
    }
  }
  const onFinish = (values: any) => {
    console.log('Success:', values);
    let _status = "";
    switch (values.estado) {
        case 40:
            _status = "Regular";
            break;
        case 55:
            _status = "Semi Bueno";
            break;
        case 70:
            _status = "Bueno";
            break;
        case 85:
            _status = "Muy Bueno";
            break;
        case 100:
            _status = "Excelente";
            break;
    }
    
    let _marca: any = marcas.filter((x: any) => x.value === values.marca)[0];
    let _anho: any = anhos.filter((x: any) => x.value === values.anho)[0];
    let _modelo: any = modelos.filter((x: any) => x.value === values.modelo)[0];
    let _version: any = versiones.filter((x: any) => x.value === values.version)[0];
    let _data: any = {
        model: _modelo.label.toLowerCase(),
        make: _marca.label.toLowerCase(),
        version: _version.label,
        year: _anho.label,
        version_id: _version.value,
        names: values.nombres,
        email: values.correo,
        phone: values.celular,
        km: values.kilometraje,
        status: _status,
        term: values.acuerdo
    }
    QuoteService.save(_data)
      .then((resp: any) => {     
          localStorage.setItem("id_ventas", resp.id);
          form.resetFields();
          //navigate("/vender/");
          //navigate("/ventas/"+resp.id);
        }
      )
    .catch( err =>{
        console.log(err);
    })
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  const marks: SliderMarks = {
    40: 'Regular',
    55: 'Semi-bueno',
    70: 'Bueno',
    85: 'Muy bueno',
    100: 'Excelente',
  }
  // const options = [
  //   {
  //     options: [renderItem('AntDesign', '10000'), renderItem('AntDesign UI', '10600')],
  //   }
  // ];
  return(
    <Row className="bgSale">
      <Col span={12}>
        <img src="/img/sticker.webp" alt='Triplo Autos' />
        <div className="textos">
          <h1>Si quieres vender</h1>
          <p>Ingresa los datos de tu vehículo</p>
        </div>
      </Col>
      <Col span={12}>
        <div className="formVentas">
          <Form
            name="basic"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
            initialValues={{
              estado: 70,
            }}
          >
            <Form.Item
              label="Marca"
              name="marca"
              rules={[{ required: true, message: 'La marca es requerida' }]}>
              <Select
                showSearch
                placeholder="Seleccione la marca"
                optionFilterProp="children"
                onChange={selectMarca}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={marcas} />
            </Form.Item>

            <Form.Item
              label="Año"
              name="anho"
              rules={[{ required: true, message: 'El año es requerido' }]}>
              <Select
                showSearch
                placeholder="Seleccione el año"
                optionFilterProp="children"
                onChange={selectAnho}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={anhos} />
            </Form.Item>

            <Form.Item
              label="Modelo"
              name="modelo"
              rules={[{ required: true, message: 'El modelo es requerido' }]}>
              <Select
                showSearch
                placeholder="Seleccione el modelo"
                optionFilterProp="children"
                onChange={selectModelo}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={modelos} />
            </Form.Item>

            <Form.Item
              label="Versión"
              name="version"
              rules={[{ required: true, message: 'La versión es requerida' }]}>
              <Select
                showSearch
                placeholder="Seleccione la versi[on"
                optionFilterProp="children"
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={versiones} />
            </Form.Item> 

            <Form.Item
              label="Nombre(s) y Apellido(s)"
              name="nombres"
              rules={[
                { required: true, message: 'El nombre y apellido es requerido' },
                { pattern: /^(?:\b\w+\b[\s\r\n]*){2}$/i, message: "Debe ingresar al menos un nombre y un apellido"}  
              ]}>
              <Input  />
            </Form.Item>

            <Form.Item
              label="Correo electrónico"
              name="correo"
              rules={[
                { required: true, message: 'El correo electrónico es requerido' },
                { type: 'email', message: 'Ingrese un correo electrónico válido'}
              ]}>
              <Input  />
            </Form.Item>

            <Form.Item
              label="Celular"
              name="celular"
              rules={[
                { required: true, message: 'El celular es requerido' },
                { len: 10, message: 'Debe contener diez digitos'}
              ]}>
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Kilometraje"
              name="kilometraje"
              rules={[
                { required: true, message: 'El kilometraje es requerido' },
              ]}>
              <Input type="number"/>
            </Form.Item>

            <Form.Item
              label="¿Cuál es el estado de tu vehículo?"
              name="estado">
                <Slider min={40} max={100} railStyle={{ backgroundColor: '#ff860080' }} handleStyle={{ backgroundColor: '#7fc9ea', borderColor: '#7fc9ea', width:'20px', height:'20px', marginTop: '-10px'}} trackStyle={{ backgroundColor: '#ff8600'}}  marks={marks} step={15}/>
            </Form.Item>   

            <Form.Item name="acuerdo" valuePropName="checked" className="text-center" rules={[
                { required: true, message: 'Debe aceptar los términos y condiciones' },
              ]}>
              <Checkbox className="chkTerm">Estoy de acuerdo con los términos y condiciones y el aviso de privacidad</Checkbox>
            </Form.Item>        

            <Form.Item className="text-center">
              <Button type="primary" htmlType="submit" className="btn2">
                Consultar precio
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  )
}
const Sale = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Quiero vender`,
      children: <FormSale />,
    },
    {
      key: '2',
      label: `Quiero comprar`,
      children: `Content of Tab Pane 2`,
    }
  ];
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Container id="sale">
      <Row>
        <Col span={20} offset={2}>
          <Tabs
            onChange={onChange}
            type="card"
            items={items}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default withTranslation()(Sale);
