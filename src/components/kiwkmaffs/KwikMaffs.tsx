const KwikMaffs = () => {

    let userInput = '';

    return (
        <div>
            <input type='text' onChange={(e) => {
                e.preventDefault();
                userInput = e.target.value; 
            }} />
            <button onClick={() => {
                console.log('userInput', userInput);
            }}>Submit</button>
        </div>
    )
};

export default KwikMaffs; 