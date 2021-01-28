import React, { PureComponent } from 'react';
import {NavLink} from 'react-router-dom';

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
                <div>
                    
                </div>
            </div>
        </header>
    )
}