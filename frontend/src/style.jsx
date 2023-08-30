import styled from 'styled-components'
import imgBckgrnd from './imgs/bkgrnd.png'

export let theme = {
    _031419:'#031419',
    _082933:'#082933',
    _053C4C:'#053C4C',
    _f6fdff3e:'#f6fdff3e',
    _F6FDFF:'#F6FDFF',
    _f0fbff30:'#f0fbff30',
    _585858dd:'#585858dd',
    _F0FBFF:'#F0FBFF',
    _E1EAED:'#E1EAED',
    _C9D2D6:'#C9D2D6',
    _585858:'#585858'
}

export let Fonts = {
    Kavoon: "'Kavoon', cursive"
}
export let Header = styled.div`
    background-color: ${theme._031419};
    padding-left: 10px;
    width: 100%;
    padding-right: 10px;
    position: fixed;
    z-index: 100;
    height: 70px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    & fieldset{
        width: 400px;
        height: 50px;
        border: none;
        display: flex;
        flex-direction: row;
        padding: 0;
        & input{
            width: calc(100% - 10px);
            height: 50px;
            color: ${theme._F0FBFF};
            font-size: 20px;
            padding: 0;
            padding-left: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border: none;
            margin: 0;
            font-family: ${Fonts.Kavoon};
            background-color: ${theme._082933};
            &:focus{
                outline: 0;
            }
        }
        & div{
            display: flex;
            font-size: 20px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: ${theme._F0FBFF};
            width: 50px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            height: 50px;
            background-color: ${theme._053C4C};
        }
    }
`
export let IconBtn = styled.button`
    color: ${theme._F0FBFF};
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    border-radius: 100%;
    font-size: 20px;
    transition: 200ms ease-in-out;
    &:hover{
        background-color: ${theme._f0fbff30};
    }
`
export let GapArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    height: ${props => props.height};
    align-items: center;
    justify-content: center;
    row-gap: ${props => props.gap};
`
export let ButtonSlder = styled.button`
    width: 90%;
    height: 50px;
    border-radius: 5px;
    padding: 0;
    z-index: 10000;
    border: none;
    display: flex;
    flex-direction: row;
    transition: 200ms ease-in-out;
    background-color: ${props => props.primary? theme._031419 : theme._F6FDFF };
    color: ${props => props.primary? theme._F6FDFF : theme._031419 };
    & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &#icon{
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 20px;
        }
        &#text{
            width: 80%;
            height: 100%;
            & h1{
                height: 50%;
                width: 100%;
                font-size: 15px;
                padding: 0;
                text-align: left;
                margin: 0;
                margin-top: 5px;
            }
            & span{
                padding: 0;
                margin: 0;
                height: 50%;
                width: 100%;
                font-size: 13px;
                padding: 0;
                text-align: left;
                margin: 0;
            }
        }
    }
    &:hover{
        background-color: ${props => props.primary? theme._082933 : theme._E1EAED };
        margin-left: 5px;
    }
`
export let Spacer = styled.span`
    flex: 1 1 auto;
`
export let Home = styled.div`
    background-color: ${theme._F6FDFF};
    width: 100%;
    height: 100%;
`
export let Nproduto = styled.div`
    background-image: url(${imgBckgrnd});
    position: absolute;
    width: 100%;
    height: calc(100% - 70px);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    & .space{
        padding-top: 20px;
    }
    & form{
        display: flex;
        box-shadow: 5px 5px 25px #000;
        border-radius: 5px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        padding-bottom: 30px;
        padding-top: 30px;
        width: 70%;
        margin-top: 30px;
        background-color: ${theme._f6fdff3e};
        backdrop-filter: blur(10px);
        font-family: ${Fonts.Kavoon};
        row-gap: 10px;
        & h1{
            color: ${theme._F6FDFF};
            padding: 0;
            margin: 0;
        }
        & .inptArea{
            width: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10px;
            & button{
                width: calc(100% + 20px);
                height: 40px;
                background-color: ${theme._F6FDFF};
                color: ${theme._545C60};
                font-family: ${Fonts.Kavoon};
                font-size: 18px;
            }
            & input,textarea{
                background-color: ${theme._F6FDFF};
                color: ${theme._545C60};
                font-family: ${Fonts.Kavoon};
                font-size: 18px;
                padding-left: 20px;
                width: 100%;
                height: 40px;
                border: none;
                &.max{
                    width: 200%;
                }
                &:focus{
                    outline: 0;
                }
                &::placeholder{
                    color: ${theme._545C60};
                    font-family: ${Fonts.Kavoon};
                    font-size: 18px;
                }
            }
            textarea{
                padding-top: 10px;
                height: 400px;
            }
            & .inptFile{
                height: 350px;
                padding: 0;
                background-color: ${theme._F6FDFF};
                & h2{
                    color: ${theme._585858dd};
                    font-family: ${Fonts.Kavoon};
                    font-size: 18px;
                    margin: 0;
                    margin-top: 10px;
                    margin-left: 20px;
                }
                & input{
                    padding: 0;
                    margin-top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0%;
                }
                &#MoreSend{
                    width: 100%;
                }
                &#imgCard{
                    width: 500px;
                }
                &#imgBackground{
                    width: 100%;
                }
            }
        }
    }
`
export let Sidebar = styled.div`
    height: calc(100% - 70px);
    top: 70px;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${props => props.open? '100%':'1px'};
    z-index: 1000;
    opacity: ${props => props.open? '100%':'0%'};
    transition: 300ms;
    & nav{
        background-color: ${props => props.theme? theme._F6FDFF : theme._585858};
        width: ${props => props.open? '300px':'1px'};
        padding-top: 20px;
        height: calc(100% - 20px);
        & div{
            width: 100%;
            display: flex;
            row-gap: 10px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &.header{
                height: 10%;
            }
            &.body{
                height: 70%;
            }
            &.footer{
                height: 20%;
            }
        }
    }
    & button#close{
        border: none;
        height: 100%;
        background-color: ${theme._031419};
        opacity: 20%;
        width: ${props => props.open? 'calc(100% - 300px)':'1px'};

    }
`;