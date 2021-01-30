import React, { PureComponent, useEffect, useState } from 'react';
import sanityClient from '../client';
import ocean from "../ocean.jpg";
import me from "../me.jpg"

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type=="author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, []);

    if(!author) return <div> Loading... </div>;

    return (
        <main className="relative">
            <img src={ocean} alt="Ocean" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative ">
                <section className="bg-blue-600 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={me} className="rounded w-80 h-50 lg:h-80 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there. I'm {" "}
                            <span className="text-green-100 ">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <span  className="text-white">I'm a full stack web developer. Currently pursuing btech from sushant university.</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}