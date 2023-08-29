import { Nproduto, Spacer } from './../../style'
export default _ =>
    <Nproduto>
        <form action="">
            <h1>Criar Produto</h1>
            <div className='inptArea'>
                <input type="text" placeholder='Nome' />
            </div>
            <div className='inptArea'>
                <input type="text" placeholder='Departamento' className='max' />
                <input type="text" placeholder='Preço'/>
            </div>
            <div className='inptArea'>
                <textarea name="" id="" cols="30" rows="10" placeholder='Descrição'>
                </textarea>
            </div>
            <div className='inptArea'>
                <input type="text" placeholder='Loja'/>
                <input type="text" placeholder='Marca'/>
            </div>
            <div className='inptArea'>
                <div id='MoreSend' className='inptFile'>
                    <h2>Imagem de mais vendidos</h2>
                    <input type="file" name="" id="" />
                </div>
                <Spacer/>
                <div id='imgCard' className='inptFile'>
                    <h2>Imagem de capa</h2>
                    <input type="file" name="" id="" />
                </div>
            </div>
            <div className='inptArea'>
                <div id='imgBackground' className='inptFile'>
                    <h2>Imagem de Background</h2>
                    <input type="file" name="" id="" />
                </div>
            </div>
        </form>
        <div className='space'>

        </div>
    </Nproduto>