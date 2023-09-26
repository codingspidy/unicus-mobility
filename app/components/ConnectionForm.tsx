'use client'
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'


const ConnectionForm = () => {
    const [firstName, setFirstName] = useState<string>('');
    // const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [location, setLocation] = useState('');
    const [product, setProduct] = useState('');
    const [userEmailError, setUserEmailError] = useState<string>('');
    const [subjectError, setSubjectError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [formSent, setFormSent] = useState<boolean>(false);
    const [gender, setGender] = useState<string>('')

    const handleSubmit = async () => {
        if (email.length == 0) {
            return setUserEmailError('Email is required');
            // } else if (email.length > 0 && !validateEmail(email)) {
            // 	return setUserEmailError('Please enter a valid email address');
            // } else {
            setUserEmailError('');
        }

        // const clearForm = () => {
        //     setFirstName('');
        //     setLastName('');
        //     setEmail('');
        //     setSubject('');
        //     setMessage('');
        // };

        // if (subject.length == 0) {
        //     return setSubjectError('Please enter contact subject!');
        // } else {
        //     setSubjectError('');
        // }

        // try {
        // 	setLoading(true);
        // 	const response = await axios.post(`${strapi_end_point}/api/contacts`, {
        // 		data: {
        // 			firstName: firstName,
        //             lastName: lastName,
        // 			email: email,
        // 			subject: subject,
        // 			message: message,
        // 		},
        // 	});
        // 	setLoading(false);
        // 	setFormSent(true);
        // 	clearForm();
        // 	setTimeout(() => {
        // 		setFormSent(false);
        // 	}, 5000);
        // } catch (error) {
        // 	setLoading(true);
        // 	if (axios.isAxiosError(error)) {
        // 		if (error.response?.data.error.message.toLowerCase().includes('email')) return setUserEmailError(error.response?.data.error.message);
        // 	}
        // 	setLoading(false);
        // }
    };

    return (
        <section className="py-[70px]">
            <div className='innerDiv'>
                <h3 className='text-secondary text-center md:text-4xl text-3xl font-semibold mb-1'>STAY AMPED AND CONNECTED</h3>
                <p className='text-black text-center text-lg md:text-xl font-medium mb-5'>Let&#39;s Together Enable Generations to Drive Sustainably</p>
                <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                    <input
                        className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Name'
                        type='text'
                        id='name'
                        name='name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Email'
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>
                <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                    <input
                        className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Mobile'
                        type='text'
                        id='name'
                        name='name'
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Location'
                        id='email'
                        name='email'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                </div>


                <div className="mb-6 w-full sm:w-1/2 relative">
                    <FontAwesomeIcon icon={faChevronDown} className="absolute top-3 right-3 text-[#4f4f4f]" />
                    <select
                        className="rounded-lg placeholder:text-[#4F4F4F] w-full border border-[#DEDEDE] py-[11px] px-3 appearance-none sm:text-base text-xs"
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                        value={gender}>
                        <option value="Product" className="text-[#4f4f4f] placeholder:text-[#4F4F4F]">Product</option>
                        <option value="eMotion Prefab EV Kit">eMotion Prefab EV Kit</option>
                        <option value="Batteries">Batteries</option>
                    </select>
                </div>

                {/* <span className='text-yellow block my-6 text-base'>{formSent && <>You&#39;re response has been saved! Our team will reach out to you soon.</>}</span> */}
                <div className='text-center mb-3 w-fit mx-auto'>
                    <button onClick={handleSubmit} type='submit' className='bg-secondary text-white px-[60px] rounded-full py-3 flex items-center justify-center relative'> { /* onClcik={handleContact} disabled={loading} */}
                        {loading && <span className='spinner-loader mr-2'></span>}
                        Submit
                        <span className="w-10 h-10 rounded-full bg-white absolute top-[4px] right-1">
                            <FontAwesomeIcon className="h-[18px] text-black mt-2" icon={faArrowRight} />
                        </span>
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ConnectionForm
