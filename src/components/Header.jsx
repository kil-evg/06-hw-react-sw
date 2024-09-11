import React from 'react'
import Navigation from './Navigation'

const Header = () => {
    return (
        <header className="rounded-top-4">
            <Navigation />
            <h1 className="text-center py-4">Luke Skywalker</h1>
        </header>
    )
}

export default Header