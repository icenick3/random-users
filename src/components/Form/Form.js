import React, {useState} from 'react';

const Form = ({getParameters}) => {

    const nationality = ["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NO", "NL", "NZ", "TR", "US"]
    const gender = ["all","male", "female"]
    const [genderState, setGenderState] = useState([])
    const [nationalityState, setNationalityState] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        getParameters({genderState, nationalityState})
        localStorage.setItem('genderParams', genderState)
        localStorage.setItem('nationalityParams', nationalityState)
        setNationalityState([])
    }

    return (
        <div className={'form'}>
            <form onSubmit={onSubmit}>
                <div className={'gender'}>
                    <p>gender</p>
                    <select onChange={(e) => setGenderState(e.target.value)} >
                        {gender.map(value => <option value={value}>{value} </option>)}
                    </select>
                </div>
                <div className={'nationality'}>
                    <p>nationality</p>
                    <select onChange={(e) => setNationalityState([...nationalityState, e.target.value.toLowerCase()])} multiple>
                        {nationality.map(value => <option value={value}>{value}</option>)}
                    </select>
                </div>

                <button>Apply filters</button>
            </form>
        </div>
    );
};

export default Form;
