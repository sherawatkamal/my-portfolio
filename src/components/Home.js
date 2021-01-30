import React, { PureComponent } from 'react'
import image from '../pexels-skitterphoto-630754.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="Hola" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-500 font-bold cursive leading-none lg:leading:snug home-name ">Hola! I'm Kamal.</h1>
            </section>
        </main>
    )
}