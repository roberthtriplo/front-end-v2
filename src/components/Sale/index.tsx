import { useEffect, useState } from 'react';
import { withTranslation } from "react-i18next";
import { Container } from "./styles";
import { Form, Col, Row, Input, Button, Tabs, TabsProps, Slider, Checkbox, Select, Modal  } from "antd";
import { SliderMarks } from "antd/lib/slider";
import MakeService from "../../services/makeService";
import YearService from '../../services/yearService';
import ModelService from '../../services/modelService';
import VersionService from '../../services/versionService';
import QuoteService from '../../services/quoteService';
import { useNavigate } from 'react-router-dom';

const FormSale = () =>{
  const [marcas, setMarcas] = useState([]);
  const [anhos, setAnhos] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenAviso, setIsModalOpenAviso] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalAviso = () => {
    setIsModalOpenAviso(true);
  };
  const handleCancelAviso = () => {
    setIsModalOpenAviso(false);
  };
  
  useEffect(() => {
    MakeService.getAll().then((resp:any) =>{
      let marcas: any = [];
      resp.data.forEach((element: any) => {
        marcas.push({
          value: element.id,
          label: element.name
        })
      });
      setMarcas(marcas);
    })
  }, [])

  const selectMarca = (value: any) =>{
    if(value !== ''){
      YearService.getYearByMake(parseInt(value)).then((resp: any) =>{
        let years: any = [];
        resp.data.forEach((element: any) => {
          years.push({
            value: element.id,
            label: element.name
          })
        });
        setAnhos(years);
      })
    }
  }
  const selectAnho = (value: any)=>{
    if(value !== ''){
      ModelService.getModelsByYear(parseInt(value)).then((resp: any) =>{
        let models: any = [];
        resp.data.forEach((element: any) => {
          models.push({
            value: element.id,
            label: element.name
          })
        });
        setModelos(models);
      })
    }
  }
  const selectModelo = (value: any)=>{
    if(value !== ''){
      VersionService.getVersionsByModel(parseInt(value)).then((resp: any) =>{
        let versions: any = [];
        resp.data.forEach((element: any) => {
          versions.push({
            value: element.id,
            label: element.name
          })
        });
        setVersiones(versions);
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
          navigate("/ventas/"+resp.id);
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
              <Checkbox className="chkTerm">Estoy de acuerdo con los <strong onClick={ showModal }>términos y condiciones</strong> y el <strong onClick={ showModalAviso }>aviso de privacidad</strong></Checkbox>
            </Form.Item>        

            <Form.Item className="text-center">
              <Button type="primary" htmlType="submit" className="btn2">
                Consultar precio
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Modal title="Aviso de privacidad" open={isModalOpenAviso} onCancel={handleCancelAviso} width={1000} className="body-modal" footer={null}>
        <Row className="body-modal">
          <Col span={24}>
            <ul className='ul-decimal'>
                <li>Sus datos personales son muy importantes para nosotros y serán tratados con base en los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad, responsabilidad, en términos de la legislación aplicable y se utilizarán solamente para las finalidades señaladas a continuación. </li>
                <li>Los datos personales que recibimos de usted serán utilizados para:(a) Adelantar la gestión administrativa que <b>TRIPLO</b> requiera respecto de sus clientes, aliados, proveedores, empleados y demás grupos de interés.(b) Proporcionarle una valoración preliminar, informativa y gratuita sobre su vehículo.(c) Programar una cita presencial para llevar a cabo una valoración de su vehículo.(d) Gestionar la documentación contractual necesaria relacionada con la compra de su vehículo, si fuere el caso.(e) Desarrollar estudios internos sobre los intereses de los titulares de quien almacena y trata sus Datos Personales, con el objetivo de comprender mejor sus necesidades e intereses, para brindar un mejor servicio.(f) Enviar correspondencia, correos electrónicos o contactar telefónicamente a los titulares de los Datos Personales, en desarrollo de actividades publicitarias, promocionales y de mercadeo enfocados a su actividad.(g) Compartirlos o enviarlos a terceros con quienes realice alianzas o contratos, para fines comerciales relacionados con la ejecución de las actividades comprendidas dentro de su objeto social.(h) Transferencia y trasmisión de los Datos Personales a terceros con quienes realice alianzas relacionadas con su objeto social, contrate estudios o les encargue el tratamiento de datos. </li>
                <li><b>DATOS PERSONALES QUE UTILIZAMOS</b> Para llevar a cabo las finalidades descritas en el presente aviso, utilizaremos los siguientes datos personales de los cuales usted es titular:• Identificación• Nombre completo• Correo electrónico• Edad• Teléfono fijo o teléfono celular• Datos de su vehículo: marca, modelo, versión, año, kilometraje.Le informamos que no recogemos datos personales sensibles al utilizar los Medios Electrónicos.</li>
                <li><b>TRANSFERENCIAS</b>: <b>TRIPLO</b> transfiere sus Datos Personales en los siguientes casos
                    <ul>
                        <li>A autoridades que requieren la misma en términos de legislación aplicable. </li>
                        <li>A autoridades que nos la soliciten como parte de un proceso judicial o administrativo donde sea necesario revelar su información.</li>
                        <li>A herramientas contratadas por <b>TRIPLO</b> para comunicación y marketing con sus consumidores.</li>
                    </ul>
                </li>
                <li><b>CONFIDENCIALIDAD Y MEDIDAS DE SEGURIDAD</b>: La confidencialidad y protección de sus datos personales es una prioridad para <b>TRIPLO</b>, por lo que hemos establecido y mantenemos medidas de seguridad administrativas, técnicas y físicas para evitar su daño, pérdida, alteración, destrucción, así como su uso, acceso o divulgación indebida. </li>
            </ul>
          </Col>
        </Row>
      </Modal>
      <Modal title="Términos y condiciones" open={isModalOpen} onCancel={handleCancel} width={1000} className="body-modal" footer={null}>
          <Row className="body-modal">
            <Col span={24}>
                <p id="parent-modal-description">
                    Este documento (los "Términos y Condiciones") regulan la relación entre TRIPLO AUTOS S.A.S (en adelante "TRIPLO") y los usuarios (en adelante el "Usuario" o los "Usuarios") del sitio web <a href="https://triplo.com.co">www.triplo.com.co</a> (en adelante el "Sitio Web") o cualquier otro medio que pongamos a su disposición, como formularios de contacto en línea, avisos publicitarios con hipervínculos, aplicaciones móviles, entre otros (los "Medios Electrónicos").
                    TRIPLO analiza la información que el Usuario de los Medios Electrónicos proporciona sobre su(s) vehículo(s) (los "Datos del Vehículo"), con la finalidad de:
                    (I) Suministrarle un precio preliminar, informativo y gratuito sobre su vehículo (el "Precio Preliminar") 
                    (II) Determinar si, en su caso, los Datos del Vehículo pueden cumplir con los criterios establecidos por parte de TRIPLO para llevar a cabo una revisión presencial (el "Proceso de Selección"), y 
                    (III) En caso de cumplir con los criterios establecidos en el inciso (II) anterior, programar una cita presencial con la finalidad de llevar a cabo una revisión física de su vehículo. 
                    Sugerimos leer cuidadosamente este documento para que conozca los Términos y Condiciones que rigen nuestra relación con Usted. Estos Términos y Condiciones pueden ser actualizados en cualquier momento, por lo que es necesario revisarlos y aceptarlos cada vez que utilicen los Medios Electrónicos. Al hacer uso de los Medios Electrónicos y de seguir con el proceso de selección y revisión física del vehículo, el Usuario acepta y está de acuerdo en adherirse a estos Términos y Condiciones.
                </p>
            </Col>
              <Col span={24}>
                  <h4>GENERALIDADES</h4>
                  <p>Por medio del Sitio Web y los presentes Términos y Condiciones, informamos a los Usuarios las condiciones que regirán el proceso de oferta y negociación de los vehículos, la posterior venta de los mismos por parte de los Usuarios a triplo y el proceso general aplicable</p>
                  <ul>
                      <li>El Sitio Web les permite a los usuarios introducir determinada información sobre un vehículo en nuestro formulario de evaluación para obtener una valoración preliminar, la cual es gratuita, no constituye una oferta y, por tanto, consiste únicamente en la etapa previa al proceso de venta del automóvil. El proceso de venta únicamente ocurre, a discreción de TRIPLO, cuando la oferta de compra presentada por TRIPLO es aceptada por el Usuario, luego de la evaluación previa de las características declaradas del carro y una posterior inspección del vehículo de manera presencial. En cualquier caso, TRIPLO se reserva el derecho de presentar o no una oferta, la cual puede variar frente al precio preliminar, dependiendo de las condiciones reales del vehículo y la cual no será definitiva ni vinculante, hasta que así se presente expresamente por parte de TRIPLO. Finalmente, es importante que el Usuario entienda que la venta del vehículo ocurre cuando la oferta presentada por parte de TRIPLO es aceptada por el Usuario, de conformidad con lo señalado en estos Términos y Condiciones y en la ley.</li>
                      <li>Estos Términos y Condiciones se aplican al utilizar los Medios Electrónicos, el Proceso de Selección, la revisión física del vehículo y todas las etapas en las que haya una interacción entre TRIPLO y los Usuarios. Interactuar con TRIPLO y su Sitio Web implica la aceptación de estos Términos y Condiciones. TRIPLO puede actualizar los presentes Términos y Condiciones en cualquier momento, para lo cual bastará la actualización del presente texto, el cual es de acceso público a todos los Usuarios a través de los Medios Electrónicos.</li>
                  </ul>
              </Col>
              <Col span={24}>
                  <h4>DERECHOS DE USO</h4>
                  <p>En el marco de estas condiciones de uso, los Usuarios tienen el derecho de utilizar el formulario de precio preliminar, ver los datos individuales en su propia pantalla y hacer una copia de la pantalla para guardar la información de forma duradera. El uso de esta información es permitido para uso personal y no comercial. El Usuario no puede utilizar, total ni parcialmente ni en forma de resumen los datos obtenidos vía correo para crear su propia base de datos en cualquier medio de comunicación. El uso comercial de los datos, así como su difusión están prohibidas. Las actividades de los Usuarios que tengan como propósito alterar/hackear/congestionar el funcionamiento del Sitio Web o dificultarlo está prohibido. El Usuario no puede, sin nuestro consentimiento expreso por escrito, extraer y/o reutilizar sistemáticamente el contenido total o parcial del Sitio Web o los Medios Electrónicos, en particular, los Usuarios no pueden, sin el consentimiento expreso y por escrito de TRIPLO, usar datamining, robots o programas de recopilación y extracción de datos con el fin de obtener partes esenciales de los Medios Electrónicos o de la información alojada o que por estos medios se suministre para su reutilización. No se permite la integración o la vinculación de los Medios Electrónicos con otros medios, sin el consentimiento expreso y por escrito de TRIPLO. La presentación y el funcionamiento de los Medios Electrónicos puede variar según el tipo de acceso, por ejemplo, a través de internet o de sus aplicaciones móviles. El derecho de uso de los Medios Electrónicos y de sus funciones solo es posible en el marco del actual estado de la tecnología. El usuario concede gratuitamente a TRIPLO a nivel temporal, geográfico y de contenido el siguiente derecho ilimitado y transferible: el derecho de reutilizar online y offline el contenido que ha sido transmitido a TRIPLO a través de los Medios Electrónicos, así como los datos del vehículo y las fotos relacionadas con la valoración del vehículo efectuadas en la Página Web, en los formularios respectivos o en los centros de atención de TRIPLO como cualquier otro medio similar.</p>
              </Col>
              <Col span={24}>
                  <h4>RESPONSABILIDAD</h4>
                  <p>TRIPLO no asume ninguna responsabilidad por los errores técnicos, en particular por la disponibilidad constante e interrumpida de la Página Web o por la correcta reproducción de los contenidos introducidos por el usuario. En caso de no disponibilidad de un precio preliminar, puede comunicarse con el servicio de atención al cliente a la dirección de correo electrónico: Daniel.espana@triplo.com.co o a través de Whatsapp o celular al +57 3143781090. </p>
              </Col>
              <Col>
                  <h4>PROTECCIÓN DE DATOS </h4>
                  <p>La protección de datos personales y la privacidad de los usuarios es algo prioritario para TRIPLO. Al aceptar los Términos y Condiciones, el usuario acepta incluir sus datos ingresados a un repositorio automatizado, para recibir informaciones, ofertas y promociones relacionadas con triplo.com.co y sus marcas asociadas. Estos datos, incluyendo su email, serán almacenados con el fin de que TRIPLO a través de los Medios Electrónicos ofrezca mejores funcionalidades y servicios, que se adecúen a las necesidades de cada uno de los Usuarios, cuya información jamás será vendida o compartida con terceros a menos que se informe y se autorice de manera previa. En caso de que el Usuario no desee seguir recibiendo informaciones o promociones vía email debe darse de baja desde el mismo correo haciendo clic en “DESUSCRIBIRSE” o pedir la eliminación completa de sus datos ingresados, escribiendo al correo Carlos.duarte@triplo.com.co. Para más información sobre este aspecto, lo invitamos a revisar nuestra política de tratamiento de datos que podrá consultar.</p>
              </Col>
              <Col span={24}>
                  <h4>PRECIO PRELIMINAR</h4>
                  <p>TRIPLO permite a los Usuarios introducir determinada información sobre un vehículo en el formulario para obtener un precio preliminar el cual no constituye una oferta de compra y, por tanto, no es vinculante para TRIPLO ni hace parte de la etapa de venta del vehículo. El precio preliminar se otorga de manera de referencia sobre una base estimativa, según los datos previstos que determinará un posible precio de compra del vehículo, el precio final estará sujeto a cambios y a ajustes dependiendo de diferentes factores aplicados por TRIPLO. Este precio estimado en todo caso, estará sujeto a revisión, actualización y cambios. El precio preliminar es una simple referencia que no es vinculante para ninguna de las partes ni hace parte de la etapa de venta del vehículo. El precio preliminar está basado en información entregada en el formulario. La compra del vehículo por parte de TRIPLO sólo puede hacerse después de una inspección física, técnica y jurídica del vehículo por parte de nuestros peritos, llevada a cabo en los centros de atención de TRIPLO, de la cual podrán resultar modificaciones al precio preliminar de acuerdo a los resultados de la inspección del vehículo en el centro de atención, donde posteriormente se le comunicará al cliente si TRIPLO está dispuesto a presentar una oferta, el precio de la misma y demás condiciones de compra. En este sentido, la venta del vehículo por parte del Usuario a TRIPLO únicamente ocurre cuando ACG presenta la oferta de compra y la misma es aceptada por el Usuario. Es discreción del Usuario aceptar la oferta hecha por TRIPLO, sin embargo, la oferta de TRIPLO está vigente únicamente para su aceptación inmediata, toda vez que una vez se retire el Usuario y el Vehículo del punto donde se realiza la inspección física esta oferta caduca. En este sentido, al realizarse la oferta con una vigencia inmediata y requerirse de la aceptación en el mismo día de la inspección, la venta del vehículo se entiende realizada en un (1) día, de conformidad con lo anunciado en la publicidad de TRIPLO. En caso de que la oferta sea rechazada y habiendo salido el vehículo de las instalaciones de TRIPLO, el Usuario podrá regresar o agendar una nueva inspección, pero será necesario realizar una nueva inspección. TRIPLO en todo caso se reserva el derecho de realizar o no una oferta, la cual en caso de proceder podrá mantener, retirar o modificar el precio o alguna de las condiciones ofrecidas. </p>
              </Col>
              <Col span={24}>
                  <h4>OFERTA DE COMPRA</h4>
                  <p>TRIPLO podrá hacer una oferta de compra después de realizar la revisión del vehículo. Esta oferta de compra puede variar respecto del precio preliminar obtenido en el Sitio Web al momento de diligenciar el formulario. En la revisión del vehículo se revisará el estado físico, estético y mecánico para fijar el precio de oferta. Se verificará todas las afectaciones que tenga el vehículo, así como accesorios y piezas faltantes o desgastes de estas, adicionalmente TRIPLO revisará información general del vehículo, registros públicos, tributarios, legales, entre otros. TRIPLO se reserva el derecho de presentar o no una oferta de compra, de igual manera TRIPLO podrá cancelar o abstenerse de agendar una inspección. TRIPLO no deberá proveer justificación alguna en el caso en que se abstenga de presentar una oferta o de agendar o realizar una inspección. Actualmente nos abstenemos de presentar ofertas sobre vehículos que cumplan con alguna de estas situaciones:</p>
                  <ul>
                      <li>Vehículos que tengan adaptaciones NO originales a la marca.</li>
                      <li>Que hayan sido declarados pérdida total por daño (PTD) o pérdida total por hurto (PDH).</li>
                      <li>Los de servicio público que requiera seguro contractual, diplomáticos o clásicos</li>
                      <li>Vehículos de carga de capacidad superior a 1 tonelada.</li>
                      <li>Vehículos a gas, a nitrógeno.</li>
                      <li>Vehículo actualmente con contrato de leasing.</li>
                      <li>Vehículos que hayan sido importados directamente, con responsabilidad civil superior a $40.000.000 de pesos colombianos.</li>
                      <li>Vehículos inmunizados</li>
                      <li>Vehículos vinculados a procesos judiciales civiles activos o limitaciones a la propiedad.</li>
                      <li>Vehículos blindados, oficiales o que lo hayan sido, o con sistemas de identificación adulterados.</li>
                      <li>Vehículos que se encuentren registrados en algún municipio o jurisdicción en los que no contemos con disponibilidad para realizar los trámites de traspaso. *Ver listado no taxativo abajo.</li>
                  </ul>
                  <p>Los vehículos con pignoraciones, deudas o prendas asociadas podrán recibir una oferta de TRIPLO siempre y cuando la deuda no supere el 70% del precio preliminar dado en el Sitio Web. Actualmente TRIPLO está en la capacidad de hacer ofertas a vehículos registrados en: Bogotá, Chía, Cota, Funza, Mosquera, Cajicá, La, Calera, Rosal, Soacha, Fusagasugá, Madrid, Zipaquirá, Facatativá, Girardot, Ricaurte, Sibaté, Cali, Palmira, Bucaramanga, Florida, Blanca, Barrancabermeja, Girón, Cúcuta, Villa, Del, Rosario, Los, Patios, Tunja, Duitama, Sogamoso, Combita, Pereira, Armenia, Circasia, Manizales, Santa, Rosa, De, Cabal, La, Dorada, Medellín, Sabaneta, Bello, Itagüí, Rio, Negro, Neiva, Rivera, Villavicencio, Acacias, Restrepo.Si el lugar donde esta registrado su vehículo no está en este listado, le pedimos que se comunique con nosotros al Daniel.espana@triplo.com.co o a través de Whatsapp al +57 314378109, antes de agendar su cita, para revisar el caso. El Usuario que realice o pretenda realizar el agendamiento de un vehículo para posterior revisión y eventual oferta de compra por arte de TRIPLO, declara y asegura que a su real saber y entender el vehículo que pretende vender no cumple con ninguno de los supuestos o situaciones arriba indicadas y que en caso que alguna de dichas situaciones se evidencie o se conozca con posterioridad a la realización de oferta definitiva por parte de TRIPLO dicha situación tendrá un efecto resolutorio sobre la negociación o negocios jurídicos realizados respecto a dicho vehículo.</p>
              </Col>
              <Col span={24}>
                  <h4>PROCESO DE PAGO DE LA OFERTA, DESCUENTOS Y HONORARIOS</h4>
                  <p>Una vez realizada y aceptada debidamente una oferta, se entiende que existe una venta entre TRIPLO y el Usuario y se procederá con la firma de la documentación legal respectiva y la ejecución de las obligaciones adquiridas respectivamente. Una vez aceptada la oferta, intentaremos realizar el pago de la forma más ágil posible. El ideal es pagar el total del valor ofertado en un solo contado, luego de retenciones, con excepción de los casos en los que el vehículo tenga alguna limitación como se especifica más adelante.Lea cuidadosamente lo establecido a continuación. Los pagos estarán sujetos a los descuentos de ley y otros según se acuerden con el vendedor, tales como el costo de trámite de traspaso, la retención en la fuente (1% del avalúo de comercial), los gastos inherentes a la expedición del certificado de tradición, honorarios de tramitadores, costos de levantamiento de prenda si aplica, IVA de honorarios u otros gastos por seguros (SOAT), impuestos o Revisión Técnico-Mecánica.Los pagos se realizan a través de transferencia bancaria a la cuenta suministrada por el vendedor. Esta deberá estar a su propio nombre, lo cual se soporta únicamente con la certificación bancaria respectiva. Si el vendedor determina y solicita que el pago se realice a un tercero, deberá adjuntar la certificación bancaria, carta de autorización de pago a tercero, el tercero deberá entregar la carta de aceptación del pago a su cuenta bancaria y adjuntar copia del documento de identidad. Este giro se ordenará el mismo día de que se firmen los documentos de venta respectivos y se reciba el vehículo, o, a más tardar el día hábil siguiente, con excepción de los casos especiales en los cuales existirán distintos momentos de pago.La disponibilidad de los recursos en la cuenta del vendedor dependerá y estará sujeta a los tiempos de ciclos bancarios. Tenga en cuenta que normalmente, esto tarda aproximadamente 12 horas hábiles.Los casos en los que el pago del precio ofertado se realiza en varios contados o en maneras diferentes pueden ser:Vehículo con prenda o deuda asociada: Dependiendo del valor de la deuda, TRIPLO podrá descontar del pago de la oferta de compra los valores correspondientes para proceder con el pago de las obligaciones pendientes ante las entidades respectivas y podrá dejar pendiente el pago del saldo del precio pendiente condicionado y sujeto a la realización efectiva del traspaso a nombre de TRIPLO o el tercero que este último indique. El saldo restante se pagará, previo levantamiento de la prenda, con el registro del traspaso efectivo del vehículo a nombre de TRIPLO o el tercero que TRIPLO designe.Debe tenerse en cuenta que los trámites de levantamiento de prenda están sujetos a los trámites y normas de las entidades encargadas y financieras, y no dependen directamente de TRIPLO.Vehículo con impuestos y/o multas pendientes: TRIPLO podrá descontar del pago de la oferta de compra los valores correspondientes para proceder con el pago de las obligaciones pendientes ante las entidades respectivas y podrá dejar pendiente el pago del saldo del precio pendiente condicionado y sujeto a la realización efectiva del traspaso a nombre de TRIPLO o el tercero que este último indique. Tenga presente que la actualización del estado de la deuda dependerá de las autoridades o entes relacionados. Puede solicitar el comprobante de pago en Angie.angel@triplo.com.co. El trámite de traspaso a nombre de TRIPLO dependerá de la actualización de la deuda en los sistemas de control de las entidades respectivas.Vehículo registrado en jurisdicciones con inconvenientes en el proceso de registro de traspaso: TRIPLO podrá dejar pendiente el pago del saldo del precio pendiente condicionado y sujeto a la realización efectiva del traspaso a nombre de TRIPLO o el tercero que este último indique. En todo caso, los términos, momentos y condiciones de pago se acordarán con el vendedor al momento de presentación de la oferta y se plasmarán en el contrato de compraventa o acuerdo respectivo que se firme al momento de la confirmación de venta (inspección física o verificación presencial).</p>
              </Col>
              <Col span={24}>
                  <h4>TRAMITE DE TRASPASO Y ENTREGA DE PAGARÉ</h4>
                  <p>
                  Trámite de traspaso: los tiempos de traspaso dependerán de los organizamos de tránsito de cada ciudad. El vendedor puede consultar el estado del trámite ante la autoridad competente, en este caso el Registro Único Nacional de Tránsito (RUNT). Firma y entrega del pagaré: el pagaré es un tipo de título valor que se encuentra consagrado en el artículo 709 Código de Comercio de Colombia. Este documento permite cubrir alguna eventualidad (embargos, impuestos no saldados en su totalidad, actos administrativos mal realizados, pendientes judiciales, información desactualizada en las bases de datos de entidades oficiales, entre otras), que TRIPLO no pueda identificar, que no haya podido identificar o que no sea informada por el vendedor, durante o después del proceso de negociación y traspaso. El vendedor podrá solicitar la anulación y destrucción o devolución del pagaré una vez hayan transcurrido 90 días hábiles desde la fecha de suscripción de la respectiva carta de instrucciones o 45 días hábiles después de registrado el proceso de traspaso del vehículo a nombre de TRIPLO o a nombre del tercero que TRIPLO haya indicado. Esta solicitud se podrá realizar en nuestros centros de atención o a través de nuestras líneas del servicio al cliente. 
                  </p>
                  <p>
                  SOBRE LA VENTA DEL VEHÍCULO EN UN (1) DÍAEL USUARIO DECLARA, RECONOCE Y ACEPTA QUE LA VENTA DEL VEHÍCULO OCURRE ÚNICAMENTE CUANDO LA OFERTA PRESENTADA POR TRIPLO ES ACEPTADA POR EL USUARIO. ES EN ESTE MOMENTO CUANDO EL USUARIO SE OBLIGA A HACER LA TRADICIÓN DEL VEHÍCULO A TRIPLO O AL TERCERO QUE ESTE INDIQUE A CAMBIO DE UN PRECIO QUE SE PAGARÁ EN LOS TERMINOS ACORDADOS ENTRE LAS PARTES EN EL CONTRATO DE COMPRAVENTA RESPECTIVO Y EN CONCORDANCIA CON LO SEÑALADO EN EL APARTE “PROCESO DE PAGO DE LA OFERTA, DESCUENTOS Y HONORARIOS”. EN CUMPLIMIENTO DE LA INFORMACIÓN PUBLICITARIA SUMINISTRADA POR TRIPLO EN TODOS LOS MEDIOS ELECTRÓNICOS, LA VENTA DEL VEHÍCULO OCURRE EN EL TRANSCURSO DEL DÍA, A DISCRECIÓN DEL USUARIO, CUANDO LA OFERTA ES ACEPTADA DE MANERA INMEDIATA A SU PRESENTACIÓN.
                  </p>
                  <p>La revisión presencial está condicionada a los lineamientos sanitarios y restricciones de movilidad decretados por las autoridades del orden nacional y local. Se comunicará mayor información en los canales de contacto de TRIPLO.  </p>
              </Col>
          </Row>
      </Modal>
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
