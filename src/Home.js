import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
           <Banner />
            <div className="home__section">
                    <Card
                    src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    title="Experience"
                    description="life, love, eat"
                    />
                    <Card
                    src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    title="Adventure"
                    description="life, love, eat"
                    />
                           <Card
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    title="Foood"
                    description="life, love, eat"
                    />




                </div>

                <div className="home__section">
                    <Card/>
                    <Card/>
                    <Card/>

                </div>


        </div>
    )
}

export default Home
