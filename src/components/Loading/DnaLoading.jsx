import {Dna} from 'react-loader-spinner'


function DnaLoading (){
    return(
        <>
        <div className="h-screen w-screen flex justify-center items-center">
        <Dna
            visible={true}
            height="480"
            width="480"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
/>    
        </div>
        </>
    );
}

export default DnaLoading;