"use client"

import { FormEvent, useState } from "react"

export const EmailInput = () => {
    const [email, setEmail] = useState('')
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setEmail('')
    }
    return (<form onSubmit={handleSubmit} className="bg-black py-2  flex max-w-[400px] ">
        <input className="text-white flex-1 px-5 bg-black outline-none" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <button type='submit' className="text-white px-5">SUBMIT</button>
    </form>)
}