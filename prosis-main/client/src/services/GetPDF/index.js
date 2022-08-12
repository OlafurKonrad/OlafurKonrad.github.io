
import { Preview, print } from 'react-html2pdf';

const GetPDF = () => {
    
    
    return(
    <div>
        <Preview id={'jsx-template'} >
            <div>
                <h1>This is the information that we want to see in the pdf</h1>
                <p>Here comes The DTE</p>
            </div>
        </Preview>
        <button onClick={()=>print('DTE-Results', 'jsx-template')}> print</button>
    </div>
    );

}


export default GetPDF;
