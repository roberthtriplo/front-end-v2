import { useEffect, useState } from 'react';
import { withTranslation } from "react-i18next";
import { Container } from "./styles";
import { Col, Dropdown, Input, MenuProps, Row, Select, Slider, Space, Typography} from "antd";
import CarsService from '../../services/carsService';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { DollarOutlined } from '@ant-design/icons';
import { CloseCircleOutlined } from '@ant-design/icons';

const Buy = () => {
  const [cars, setCars] = useState([]);
  const [carsOr, setCarsOr] = useState([]);
  const [order, setOrder] = useState("");
  const [showMas, setShowMas] = useState(false);
  const moneyFormat = (value: any) => "$ "+new Intl.NumberFormat().format(value);
  const kmFormat = (value: any) => new Intl.NumberFormat().format(value)+" KM";
  const [makeFilters, setMakeFilters] = useState<MenuProps['items']>();
  const [modelFilters, setModelFilters] = useState<MenuProps['items']>();
  const [typeFilters, setTypeFilters] = useState<MenuProps['items']>();
  const [yearFilters, setYearFilters] = useState<MenuProps['items']>();
  const [colorFilters, setColorFilters] = useState<MenuProps['items']>();
  const [transFilters, setTransFilters] = useState<MenuProps['items']>();
  const [maxPrice, setMaxPrice] = useState(0);
  const [valuePrice, setValuePrice] = useState<any>([0,10000000]);
  const [maxKm, setMaxKm] = useState(0);
  const [valueKm, setValueKm] = useState<any>([0,300000]);
  const [filtros, setFiltros] = useState({
    makes: [],
    models: [],
    type:[],
    year: [],
    price: [],
    km: [],
    color: [],
    transmission: []
  })

  const [makeSelectKeys, setMakeSelectKeys] = useState([]); 
  const [modelSelectKeys, setModelSelectKeys] = useState([]);
  const [typeSelectKeys, setTypeSelectKeys] = useState([]);
  const [yearSelectKeys, setYearSelectKeys] = useState([]);
  const [colorSelectKeys, setColorSelectKeys] = useState([]);
  const [transSelectKeys, setTransSelectKeys] = useState([]);

  const verMas = () =>{
    setShowMas(!showMas);
  }
  useEffect(() => {
    getCars("");
  }, []);

  const getCars = (order: any) =>{
    CarsService.getAll(order).then((resp: any) =>{
      setCars(resp.cars);
      setCarsOr(resp.cars);
      getMakeFilter(resp.cars);
      getModelFilter(resp.cars);
      getTypeFilter(resp.cars);
      getYearFilter(resp.cars);
      getTransFilter(resp.cars);
      getColorFilter(resp.cars);
      getPriceFilter(resp.cars);
      getKmFilter(resp.cars);
    })
  }
  const getMakeFilter = (carsData: any) =>{
    let result: any = [];
    let resultFin: MenuProps['items'] = [];
    carsData.forEach((data : any) =>{ result?.push(data.make) })
    result = result.filter((item: any,index: number)=>{ return result?.indexOf(item) === index; })
    result.sort();
    result.forEach((elem: any, index: number) =>{
      resultFin?.push({
        key: index,
        label: elem
      })
    })
    setMakeFilters(resultFin)
  }
  const handleChangeMake = (event: any) =>{
    let value: any = event.selectedKeys;
    setMakeSelectKeys(value);
    let values: any = [];
    makeFilters?.forEach((ele : any) =>{
      value.forEach((element : any) => {
        if(ele.key === parseInt(element))
          values.push(ele.label)
      });
    })
    
    checkFiltros('make', values);
  }

  const handleChangeModel = (event: any) =>{
    let value: any = event.selectedKeys;
    setModelSelectKeys(value);
    let values: any = [];
    modelFilters?.forEach((ele : any) =>{
      value.forEach((element : any) => {
        if(ele.key === parseInt(element))
          values.push(ele.label)
      });
    })
    
    checkFiltros('model', values);
  }

  const handleChangeType = (event: any) =>{
    let value: any = event.selectedKeys;
    setTypeSelectKeys(value);
    let values: any = [];
    typeFilters?.forEach((ele : any) =>{
      value.forEach((element : any) => {
        if(ele.key === parseInt(element))
          values.push(ele.label)
      });
    })
    
    checkFiltros('vehicle_type', values);
  }

  const handleChangeYear = (event: any) =>{
    let value: any = event.selectedKeys;
    setYearSelectKeys(value);
    let values: any = [];
    yearFilters?.forEach((ele : any) =>{
      value.forEach((element : any) => {
        if(ele.key === parseInt(element))
          values.push(ele.label)
      });
    })
    
    checkFiltros('year', values);
  }

  const handleChangeColor = (event: any) =>{
    let value: any = event.selectedKeys;
    setColorSelectKeys(value);
    let values: any = [];
    colorFilters?.forEach((ele : any) =>{
      value.forEach((element : any) => {
        if(ele.key === parseInt(element))
          values.push(ele.label)
      });
    })
    
    checkFiltros('color', values);
  }

  const handleChangeTrans = (event: any) =>{
    let value: any = event.selectedKeys;
    setTransSelectKeys(value);
    let values: any = [];
    transFilters?.forEach((ele : any) =>{
      value.forEach((element : any) => {
        if(ele.key === parseInt(element))
          values.push(ele.label)
      });
    })
    
    checkFiltros('transmission', values);
  }

  const checkFiltros = (type: string, value: any) =>{
      let _filtros = filtros;
      if(type === 'make'){ _filtros.makes = value  }
      if(type === 'model'){ _filtros.models = value }
      if(type === 'vehicle_type'){ _filtros.type = value }
      if(type === 'year'){ _filtros.year = value }
      if(type === 'color'){ _filtros.color = value }
      if(type === 'transmission'){ _filtros.transmission = value }
      if(type === 'km'){ _filtros.km = value }
      if(type === 'price'){ _filtros.price = value }

      setFiltros(_filtros);
      localStorage.setItem("filtros", JSON.stringify(_filtros));
      filtrar(type)        
  }

  const filtrar = (type: string) =>{
    let _data = carsOr;
    var results: any = [];
    setShowMas(true);
    
    if(filtros.makes.length > 0){   
        results = [];
        _data.forEach((item: any) => {
            filtros.makes.forEach(ff =>{
                if (item.make === ff) {
                    results.push(item);
                }
            })                    
        }); 
        if(filtros.makes.length > 0) { _data = results; }                             
    }    
    if(filtros.models.length > 0){
        results = []                
        _data.forEach((item: any) => {
            filtros.models.forEach(ff =>{
                if (item.model === ff) {
                    results.push(item);
                }
            })                    
        }); 
        if(filtros.models.length > 0) { _data = results; }               
        
    }        
    if(filtros.type.length > 0){
        results = []
        _data.forEach((item: any) => {
            filtros.type.forEach(ff =>{
                if (item.vehicle_type === ff) {
                    results.push(item);
                }
            })                    
        }); 
        if(filtros.type.length > 0) { _data = results; }                
    }        
    if(filtros.year.length > 0){
        results = []
        _data.forEach((item: any) => {
            filtros.year.forEach(ff =>{
                if (item.year === ff) {
                    results.push(item);
                }
            })                    
        }); 
        if(filtros.year.length > 0) { _data = results; }
        
    }
    if(filtros.color.length > 0){
        results = []
        _data.forEach((item: any) => {
            filtros.color.forEach(ff =>{
                if (item.color === ff) {
                    results.push(item);
                }
            })                    
        }); 
        if(filtros.color.length > 0) { _data = results; }
        
    }
    if(filtros.transmission.length > 0){
        results = []
        _data.forEach((item: any) => {
            filtros.transmission.forEach(ff =>{
                if (item.transmission === ff) {
                    results.push(item);
                }
            })                    
        }); 
        if(filtros.transmission.length > 0) { _data = results; }
        
    }
    if(type === 'km'){
        results = []
        results = _data.filter((x: any) => x.kilometers >= filtros.km[0] && x.kilometers <= filtros.km[1])
        _data = results;
        getMakeFilter(_data);
        getModelFilter(_data);
        getTypeFilter(_data);
        getYearFilter(_data);
        getColorFilter(_data);
        getTransFilter(_data);
    }
    if(type === 'price'){
        results = []
        results = _data.filter((x: any) => x.price >= filtros.price[0] && x.price <= filtros.price[1])
        _data = results;
        getMakeFilter(_data);
        getModelFilter(_data);
        getTypeFilter(_data);
        getYearFilter(_data);
        getColorFilter(_data);
        getTransFilter(_data);
    }
    if(type === 'all'){
        results = carsOr
        _data = carsOr
        getMakeFilter(_data);
        getModelFilter(_data);
        getTypeFilter(_data);
        getYearFilter(_data);
        getColorFilter(_data);
        getTransFilter(_data);
    }        
    switch (type) {
        case 'make':
            getModelFilter(_data);
            getTypeFilter(_data);
            getYearFilter(_data);
            getColorFilter(_data);
            getTransFilter(_data);
            if(filtros.makes.length === 0) getMakeFilter(_data)
        break;
        case 'model':
            getMakeFilter(_data);
            getTypeFilter(_data);
            getYearFilter(_data);
            getColorFilter(_data);
            getTransFilter(_data);
            if(filtros.models.length === 0) getModelFilter(_data)
        break;
        case 'vehicle_type':
            getMakeFilter(_data);
            getModelFilter(_data);
            getYearFilter(_data);
            getColorFilter(_data);
            getTransFilter(_data);
            if(filtros.type.length === 0) getTypeFilter(_data)
        break;
        case 'year':
            getMakeFilter(_data);
            getModelFilter(_data);
            getTypeFilter(_data);
            getColorFilter(_data);
            getTransFilter(_data);
            if(filtros.year.length === 0) getYearFilter(_data)
        break;
        case 'color':
            getMakeFilter(_data);
            getModelFilter(_data);
            getTypeFilter(_data);
            getYearFilter(_data);
            getTransFilter(_data);
            if(filtros.color.length === 0) getColorFilter(_data)
        break;
        case 'transmission':
            getMakeFilter(_data);
            getModelFilter(_data);
            getTypeFilter(_data);
            getYearFilter(_data);
            getColorFilter(_data);
            if(filtros.transmission.length === 0) getTransFilter(_data)
        break;

    }
    localStorage.setItem('dataFilter', JSON.stringify(_data));
    setCars(_data);
}

  const getModelFilter = (carsData: any) =>{
    let result: any = [];
    let resultFin: MenuProps['items'] = [];
    carsData.forEach((data : any) =>{ result?.push(data.model) })
    result = result.filter((item: any,index: number)=>{ return result?.indexOf(item) === index; })
    result.sort();
    result.forEach((elem: any, index: number) =>{
      resultFin?.push({
        key: index,
        label: elem
      })
    })
    setModelFilters(resultFin)
  }

  const getTypeFilter = (carsData: any) =>{
    let result: any = [];
    let resultFin: MenuProps['items'] = [];
    carsData.forEach((data : any) =>{ result?.push(data.vehicle_type) })
    result = result.filter((item: any,index: number)=>{ return result?.indexOf(item) === index; })
    result.sort();
    result.forEach((elem: any, index: number) =>{
      resultFin?.push({
        key: index,
        label: elem
      })
    })
    setTypeFilters(resultFin)
  }

  const getYearFilter = (carsData: any) =>{
    let result: any = [];
    let resultFin: MenuProps['items'] = [];
    carsData.forEach((data : any) =>{ result?.push(data.year) })
    result = result.filter((item: any,index: number)=>{ return result?.indexOf(item) === index; })
    result.sort().reverse();
    result.forEach((elem: any, index: number) =>{
      resultFin?.push({
        key: index,
        label: elem
      })
    })
    setYearFilters(resultFin)
  }

  const getTransFilter = (carsData: any) =>{
    let result: any = [];
    let resultFin: MenuProps['items'] = [];
    carsData.forEach((data : any) =>{ if(data.transmission !== '') result?.push(data.transmission) })
    result = result.filter((item: any,index: number)=>{ return result?.indexOf(item) === index; })
    result.sort();
    result.forEach((elem: any, index: number) =>{
      resultFin?.push({
        key: index,
        label: elem
      })
    })
    setTransFilters(resultFin)
  }

  const getColorFilter = (carsData: any) =>{
    let result: any = [];
    let resultFin: MenuProps['items'] = [];
    carsData.forEach((data : any) =>{ result?.push(data.color) })
    result = result.filter((item: any,index: number)=>{ return result?.indexOf(item) === index; })
    result.sort();
    result.forEach((elem: any, index: number) =>{
      resultFin?.push({
        key: index,
        label: elem
      })
    })
    setColorFilters(resultFin)
  }

  const getPriceFilter = (carsData: any) =>{
    let result: any = []
    carsData.forEach((data: any) =>{ result.push(data.price) })
    let _max: any = Math.max(...result)
    setMaxPrice(_max)
    setValuePrice([0, _max])
  }

  const getKmFilter = (carsData: any) =>{
    let result: any = []
    carsData.forEach((data: any) =>{ result.push(data.kilometers) })
    let _max: any = Math.max(...result)
    setMaxKm(_max)
    setValueKm([0, _max])
  }

  const orderBy = (value: any) =>{
    setOrder(value);       
    if(value !== ''){
      getCars(value);
    }
  }

  const handleChangePrice = (value: any) => {
    setValuePrice(value );
    checkFiltros('price', value);
  };

  const handleChangeKm = (value: any) => {
    setValueKm(value );
    checkFiltros('km', value);
  };

  const deleteFilter = (type: any) =>{
    let _filtros = filtros;
      if(type === 'all'){
          _filtros.makes = []
          setMakeSelectKeys(_filtros.makes)
          _filtros.models = []
          setModelSelectKeys(_filtros.models)
          _filtros.type = []
          setTypeSelectKeys(_filtros.type)
          _filtros.year = []
          setYearSelectKeys(_filtros.year)
          _filtros.color = []
          setColorSelectKeys(_filtros.color)
          _filtros.transmission = []
          setTransSelectKeys(_filtros.transmission)
          _filtros.price = []
          setValuePrice([0, maxPrice])
          _filtros.km = []
          setValueKm([0, maxKm])
      }
      if(type === 'make'){
          _filtros.makes = []
          setMakeSelectKeys(_filtros.makes)
      }
      if(type === 'model'){
          _filtros.models = []
          setModelSelectKeys(_filtros.models)
      }
      if(type === 'vehicle_type'){
          _filtros.type = []
          setTypeSelectKeys(_filtros.type)
      }
      if(type === 'year'){
          _filtros.year = []
          setYearSelectKeys(_filtros.year)
      }
      if(type === 'color'){
          _filtros.color = []
          setColorSelectKeys(_filtros.color)
      }
      if(type === 'transmission'){
          _filtros.transmission = []
          setTransSelectKeys(_filtros.transmission)
      }
      if(type === 'price'){
          _filtros.price = []
          setValuePrice([0, maxPrice])
      }
      if(type === 'km'){
          _filtros.km = []
          setValueKm([0, maxKm])
      }
      
      setFiltros(_filtros)
      localStorage.setItem("filtros", JSON.stringify(_filtros));
      filtrar(type)
      setShowMas(false)
  }

  const formatter = (value: any) => {        
    return `${moneyFormat(value)}`
  };

  const formatterkm = (value: any) => {        
    return `${kmFormat(value)}`
  };

  return (
    <Container id="buy">
      <Row className="bg">
        <Col span={24}>
          <img alt="Triplo Autos" src="/img/logo.webp" />
        </Col>
      </Row>
      <Row className="p80">
        <Col span={12}>
          <h1 className="titleh1">"COOL CARS FOR COOL KIDS"</h1>
          <p className="subtitle">Escoge el tuyo</p>
        </Col>
        <Col span={12} className='text-end'>
          <Select className='select-order' defaultValue=""
            style={{ width: 145 }} popupClassName='dropdwon-order' onChange={orderBy}
            value={order}
            options={[
              {
                value: '',
                label: 'Ordenar por',
              },
              {
                value: 'asc',
                label: 'Menor precio',
              },
              {
                value: 'desc',
                label: 'Mayor precio',
              }
            ]}
          />
        </Col>
      </Row>
      <Row className='p80'>
        <Col span={24}>
          <div className='filtros-new'>
            <div className="fc-filtros">
              <Dropdown trigger={['click']}
                menu={{ 
                  multiple: true,
                  items: makeFilters,   
                  selectable: true,
                  selectedKeys: makeSelectKeys,
                  subMenuCloseDelay: 2000,
                  onSelect: handleChangeMake,   
                  onDeselect: handleChangeMake
                }}
                overlayClassName="dropdownfiltros"
              >
                <Typography.Link>
                  <Space>
                    Marcas
                    <DownOutlined className='svg-arrow' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
             <div className="fc-filtros">
              <Dropdown trigger={['click']}
                menu={{ 
                  multiple: true,
                  items: modelFilters,   
                  selectable: true,
                  selectedKeys: modelSelectKeys,
                  onSelect: handleChangeModel,   
                  onDeselect: handleChangeModel         
                }}
                overlayClassName="dropdownfiltros"
              >
                <Typography.Link>
                  <Space>
                    Modelos
                    <DownOutlined className='svg-arrow' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
            <div className="fc-filtros">
              <Dropdown trigger={['click']}
                menu={{ 
                  multiple: true,
                  items: typeFilters,   
                  selectable: true ,
                  style:{ display: 'grid', gridTemplateColumns: '50% 50%' },
                  selectedKeys: typeSelectKeys,
                  onSelect: handleChangeType,   
                  onDeselect: handleChangeType   
                }}
                overlayClassName="dropdownfiltros"
              >
                <Typography.Link>
                  <Space>
                    Tipo
                    <DownOutlined className='svg-arrow' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
            <div className="fc-filtros">
              <Dropdown trigger={['click']}
                menu={{ 
                  multiple: true,
                  items: yearFilters,   
                  selectable: true,
                  selectedKeys: yearSelectKeys,
                  onSelect: handleChangeYear,   
                  onDeselect: handleChangeYear        
                }}
                overlayClassName="dropdownfiltros"
              >
                <Typography.Link>
                  <Space>
                    Año
                    <DownOutlined className='svg-arrow' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
            <div className="fc-filtros">
              <Dropdown trigger={['click']}
                dropdownRender={() => (
                <Row>
                  <Col span={12}>
                    <div className='form-group form-group1'>
                      <label>Desde</label>
                      <Input type='number' value={ valuePrice[0] } className='form-control' prefix={<DollarOutlined />} />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='form-group'>
                      <label>Hasta</label>
                      <Input type='number' value={ valuePrice[1] } className='form-control' prefix={<DollarOutlined />} />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Slider range={{ draggableTrack: false }} min={0} max={ maxPrice } tooltip={{ formatter }} onChange={ handleChangePrice }
                            railStyle={{ backgroundColor: '#ff860080' }}    
                            defaultValue={ valuePrice }/>
                  </Col>                    
                </Row>
              )} overlayClassName="dropdownfiltrosSlider">
                <Typography.Link>
                  <Space>
                    Precio
                    <DownOutlined className='svg-arrow' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
            <div className="fc-filtros">
              <Dropdown trigger={['click']} 
                dropdownRender={() => (
                  <Row>
                    <Col span={12}>
                      <div className='form-group form-group1'>
                        <label>Desde</label>
                        <Input type='number' value={ valueKm[0] } className='form-control' prefix={ 'Km' } />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className='form-group'>
                        <label>Hasta</label>
                        <Input type='number' value={ valueKm[1] } className='form-control' prefix={ 'Km' } />
                      </div>
                    </Col>
                    <Col span={24}>
                    <Slider range={{ draggableTrack: false }} min={0} max={ maxKm } tooltip={{ formatter: formatterkm }} onChange={ handleChangeKm }
                            railStyle={{ backgroundColor: '#ff860080' }}    
                            defaultValue={ valueKm }/>
                    </Col>                    
                  </Row>
                )} overlayClassName="dropdownfiltrosSlider">
                <Typography.Link>
                  <Space>
                    Kilómetros
                    <DownOutlined className='svg-arrow' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
            <div className="fc-filtros">
              <Dropdown trigger={['click']}
                menu={{ 
                  multiple: true,
                  items: colorFilters,   
                  selectable: true,
                  selectedKeys: colorSelectKeys,
                  onSelect: handleChangeColor,   
                  onDeselect: handleChangeColor, 
                  style:{ display: 'grid', gridTemplateColumns: '50% 50%' }             
                }}
                overlayClassName="dropdownfiltros"
              >
                <Typography.Link>
                  <Space>
                    Color
                    <DownOutlined className='svg-arrow' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
            <div className="fc-filtros">
              <Dropdown trigger={['click']}
                menu={{ 
                  multiple: true,
                  items: transFilters,   
                  selectable: true,
                  selectedKeys: transSelectKeys,
                  onSelect: handleChangeTrans,   
                  onDeselect: handleChangeTrans,
                  style:{ display: 'grid', gridTemplateColumns: '50% 50%' }            
                }}
                overlayClassName="dropdownfiltros"
              >
                <Typography.Link>
                  <Space>
                    Transmisión
                    <DownOutlined className='svg-arrow' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div> 
          </div>
        </Col>
        <Col span={24}>
        {
            filtros.makes.length > 0 ? 
            (<p className='pfilter-sel' key={'fs-makes'} onClick={() => deleteFilter('make')}>Marcas: { filtros.makes.join(', ') } <CloseCircleOutlined /></p>)
            : ''
        }
        {
            filtros.models.length > 0 ? 
            (<p className='pfilter-sel' key={'fs-models'} onClick={() => deleteFilter('model')}>Modelos: { filtros.models.join(', ') } <CloseCircleOutlined /></p>)
            : ''
        }
        {
            filtros.type.length > 0 ? 
            (<p className='pfilter-sel' key={'fs-type'} onClick={() => deleteFilter('vehicle_type')}>Tipo de vehículo: { filtros.type.join(', ') } <CloseCircleOutlined /></p>)
            : ''
        }
        {
            filtros.year.length > 0 ? 
            (<p className='pfilter-sel' key={'fs-year'} onClick={() => deleteFilter('year')}>Año: { filtros.year.join(', ') } <CloseCircleOutlined /></p>)
            : ''
        }
        {
            filtros.price.length > 0 ? 
            (<p className='pfilter-sel' key={'fs-price'} onClick={() => deleteFilter('price')}>Precio: { moneyFormat(filtros.price[0]) } - { moneyFormat(filtros.price[1]) } <CloseCircleOutlined /></p>)
            : ''
        }
        {
            filtros.km.length > 0 ? 
            (<p className='pfilter-sel' key={'fs-km'} onClick={() => deleteFilter('km')}>Kilometraje: { kmFormat(filtros.km[0]) } - { kmFormat(filtros.km[1]) } <CloseCircleOutlined /></p>)
            : ''
        }
        {
            filtros.color.length > 0 ? 
            (<p className='pfilter-sel' key={'fs-color'} onClick={() => deleteFilter('color')}>Color: { filtros.color.join(', ') } <CloseCircleOutlined /></p>)
            : ''
        }
        {
            filtros.transmission.length > 0 ? 
            (<p className='pfilter-sel' key={'fs-trans'} onClick={() => deleteFilter('transmission')}>Transmisión: { filtros.transmission.join(', ') } <CloseCircleOutlined /></p>)
            : ''
        }
        {
            (   filtros.makes.length > 0 || filtros.models.length > 0  || filtros.type.length > 0 ||  
                filtros.year.length > 0 || filtros.price.length > 0 || filtros.km.length > 0 || filtros.color.length > 0  || 
                filtros.transmission.length > 0 || filtros.transmission.length > 0) ? 
            (<p className='pfilter-sel-2' key={'fs-all'} onClick={() => deleteFilter('all')}>Borrar filtros <CloseCircleOutlined /></p>)
            : ''
        }
        </Col>
      </Row>
      <Row className="p80">
      {
          cars.length > 0 ? cars.slice(0, showMas ? cars.length : 4).map(
            (item: any, index) => (
              <Col span={24} xs={24} md={12} key={index}>
                <Link to={"/comprar/detalle/"+item.id}>
                  <div className='img-wrap' >
                      <img src={item.img_main } className="img-fluid img__img img_car" alt="Car #1" loading="lazy" />
                      <div className="description">
                          <div className='content'>
                              <p>{ item.make }</p>
                              <p>{ item.model }</p>
                              <p>{ moneyFormat(item.price) }</p>
                          </div>
                      </div>
                  </div>  
                </Link>                  
              </Col>
            )
        ): 
        (
            <Col span={24} className='text-center'>
                <h3>La búsqueda no arrojó ningún resultado.</h3>
            </Col>
        )
        }
      </Row>
      <Row>
          <Col xs={24} className='text-center'>
              {
                  showMas ? '' : (<p className='verMas' onClick={verMas}>Ver más</p>)
              }                    
          </Col>
      </Row>
    </Container>
  );
};

export default withTranslation()(Buy);
