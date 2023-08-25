import { 
    Header,
    GapArea,
    Spacer,
    ButtonSlder,
    IconBtn,
    theme
} from "../../style"
import { MenuOutlined,
    SettingOutlined,
    TransactionOutlined,
    BulbOutlined,
    GlobalOutlined,
    SearchOutlined,
    LaptopOutlined,
    UserOutlined,
    ShoppingCartOutlined 
} from '@ant-design/icons';
import React, { useState } from 'react';
import { Drawer } from 'antd';

let btnSlideBar = (icone,title) =>
    <ButtonSlder primary={false}>
        <div id="icon">
            {icone}
        </div>
        <div id="text">
            <h1>{title}</h1> 
        </div>
    </ButtonSlder>
export default _ =>{
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
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
        <Drawer title={
            <ButtonSlder primary={true}>
                <div id="icon">
                    <UserOutlined /> 
                </div>
                <div id="text">
                    <h1>Nome do usuário</h1> 
                    <span>Cliente</span>
                </div>
            </ButtonSlder>
        } 
        footer={
            <GapArea gap='5px' height='100%'>
                {
                    [
                        btnSlideBar(<BulbOutlined />,'Thema: claro'),
                        btnSlideBar(<TransactionOutlined />,'Linguagem: ptbr'),
                    ]
                }
            </GapArea>
        }
        placement="left" onClose={onClose} open={open}>
            <GapArea gap='10px' height='100%'>
                {
                    [
                        btnSlideBar(<SettingOutlined />,'Configuração'),
                        btnSlideBar(<ShoppingCartOutlined />,'Carrinho'),
                        btnSlideBar(<LaptopOutlined />,'Produtos'),
                        btnSlideBar(<GlobalOutlined />,'Endereços'),
                    ]
                }
            </GapArea>
        </Drawer>
    </>
}