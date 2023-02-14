import React from 'react'
import Project from './Project'

function PortfolioList ({ proyectos }) {
    return (
        <div>
            {proyectos.map(item => (
                <Project key={item.id} {...item} />
            ))}
        </div>
    );
}

export default PortfolioList