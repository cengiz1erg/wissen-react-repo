import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd'
import { Link, Route, Routes } from 'react-router-dom';
import HomeView from './projectSample/Views/HomeView'
import ProductListView from './projectSample/Views/ProductListView';
import AddProductView from './projectSample/Views/AddProductView';


function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"> <Link to='/products'>Products</Link></Menu.Item>
            <Menu.Item key="2"> <Link to='/addproduct'>Add Product</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
        <Route path='/products' element={<ProductListView />}></Route>
        <Route path='/addproduct' element={<AddProductView />}></Route>
      </Routes>
    </>

  );
}

export default App;
