import React, { PureComponent } from 'react';
import {NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function About() {
    return (
        <header className="bg-blue-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-whiteP" 
                    className="inflex-flex items-center py-6 px-3 mr-4 text-blue-200 hover:text-purple-800 text-4xl font-bold cursive tracking-widest">
                        Kamal
                    </NavLink>
                    <NavLink to="/post" activeClassName="tex-blue-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-purple-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/projects" activeClassName="tex-blue-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-purple-800">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="tex-blue-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-purple-800">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://twitter.com/SherawatKamal" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                <SocialIcon url="https://www.linkedin.com/in/kamal-sherawat-5212721a6/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                <SocialIcon url="https://github.com/sherawatkamal" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}