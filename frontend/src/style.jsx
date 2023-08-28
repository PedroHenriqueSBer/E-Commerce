import styled from 'styled-components'

export let theme = {
    _031419:'#031419',
    _082933:'#082933',
    _053C4C:'#053C4C',
    _F6FDFF:'#F6FDFF',
    _f0fbff30:'#f0fbff30',
    _F0FBFF:'#F0FBFF',
    _E1EAED:'#E1EAED',
    _C9D2D6:'#C9D2D6',
}

export let Fonts = {
    Kavoon: "'Kavoon', cursive"
}
export let Header = styled.div`
    background-color: ${theme._031419};
    width: calc() 100%;
    padding-left: 10px;
    padding-right: 10px;
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
    width: 94%;
    height: 50px;
    border-radius: 5px;
    padding: 0;
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