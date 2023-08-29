import { 
    Header,
    GapArea,
    Spacer,
    ButtonSlder,
    IconBtn,
    Sidebar,
    theme
} from "../../style"
import { MenuOutlined,
    SettingOutlined,
    TransactionOutlined,
    BulbOutlined,
    GlobalOutlined,
    SearchOutlined,
    DashboardOutlined,
    LaptopOutlined,
    UserOutlined,
    GroupOutlined,
    AppstoreAddOutlined,
    ShoppingCartOutlined 
} from '@ant-design/icons';
import React, { useState } from 'react';

let btnSlideBar = (icone,title,theme,func,primary=false) =>
    <ButtonSlder theme={theme} onClick={func} primary={primary}>
        <div id="icon">
            {icone}
        </div>
        <div id="text">
            <h1>{title}</h1> 
        </div>
    </ButtonSlder>
export default _ =>{
    const [open, setOpen] = useState(true);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const [Theme, setTheme] = useState(() =>{
        console.log(localStorage.getItem('theme'))
        return localStorage.getItem('theme')
    })
    let switchTheme = () =>{
        setTheme(!Theme)
        localStorage.setItem('theme',!Theme)
    }
    return<>
        <Header>
            <IconBtn onClick={showDrawer}>
                <MenuOutlined />
            </IconBtn>
            <IconBtn>
                <ShoppingCartOutlined />
            </IconBtn>
            <Spacer/>
            <fieldset>
                <div>
                    <SearchOutlined />
                </div>
                <input type="text" />
            </fieldset>
            <Spacer/>
            <IconBtn>
                <ShoppingCartOutlined />
            </IconBtn>
            <IconBtn>
                <UserOutlined />
            </IconBtn>
        </Header>
        <Sidebar theme={Theme} open={open}>
            <nav>
                <div className="header">
                    {btnSlideBar(<UserOutlined/>,'Pedro',Theme,null, true)}
                </div>
                <div className="body">
                    {btnSlideBar(<SettingOutlined/>,'Configuração',Theme)}
                    {btnSlideBar(<ShoppingCartOutlined/>,'Carrinho',Theme)}
                    {btnSlideBar(<LaptopOutlined/>,'Laptop',Theme)}
                    {btnSlideBar(<GlobalOutlined/>,'Endereço',Theme)}
                    {btnSlideBar(<DashboardOutlined />,'Dashboard',Theme)}
                    {btnSlideBar(<AppstoreAddOutlined />,'Criar produto',Theme)}
                    {btnSlideBar(<GroupOutlined />,'Administração',Theme)}
                </div>
                <div className="footer">
                    {btnSlideBar(<BulbOutlined/>,`Thema: ${Theme? 'claro':'escuro'}`,Theme,switchTheme)}
                    {btnSlideBar(<TransactionOutlined/>,'Linguagem: PTBR',Theme)}
                </div>
            </nav>
            <button id="close" onClick={onClose}></button>
        </Sidebar>
    </>
}

// SettingOutlined,
// TransactionOutlined,
// BulbOutlined,
// GlobalOutlined,
// SearchOutlined,
// LaptopOutlined,
// UserOutlined,
// ShoppingCartOutlined 