import React, { useState } from 'react';

type MyFormProps = {
    onSubmit: (form: { name: string; description: string }) => void;
};

const MyForm = ({onSubmit}: MyFormProps) => {

    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const {name, description} = form;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' type="text" value={name} onChange={handleChange} placeholder='name'/>
            <input name='description' type="text" value={description} onChange={handleChange}
                   placeholder='description'/>
            <button type='submit'>등록(console)</button>
            <div>
                <b>{name}</b> <span>({description})</span>
            </div>
        </form>
    );
};

export default MyForm;
