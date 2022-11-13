import {useState, useEffect} from 'react'

export default function Index(){
    return (
        <header className = 'theme-bg'>
            <div className = 'container'>
                <div className = 'row a-i-c py-3 j-c-space-between'>
                    <div className = 'col-12 col-md-auto pb-4 pb-md-0'>
                        <div className = 'row a-i-c j-c-space-between'>
                            <div className = 'col-auto'>
                                <a href = '/' className = 'bold text-white h4'>
                                    <img src = '/protea-logo.png' width = '170' />
                                </a>
                            </div>
                            <div className = 'col-auto d-md-none'>
                                <button className = 'border-0 bg-white rounded-lg px-2'>
                                    <span className = 'theme-color bi-border-width fa-2x'></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-12 col-md-5'>
                        <SearchBar action = '/search' />
                    </div>
                </div>
            </div>
        </header>
    )
}

function SearchBar({action}){
    const [seachQuery, setSearchQuery] = useState('')

    return (
        <div className = 'container-fluid bg-white rounded-2x'>
            <form action = {action || ''} method = 'get' className = 'row a-i-c'>
                {
                    (seachQuery.length < 1)
                    ? (
                        <div className = 'col-auto'>
                            <span className = 'bi-search fo-s-20 text-muted'></span>
                        </div>
                    )
                    : (
                        <div className = 'col-auto'>
                            <button onClick = {() => setSearchQuery('')} type = 'button' className = 'border-0 bg-clear outline-0 d-block flicker'>
                                <span className = 'bi-x fo-s-18 text-muted'></span>
                            </button>
                        </div>
                    )
                }
                <div className = 'col'>
                    <input value = {seachQuery} onChange = {(e) => setSearchQuery(e.target.value)} placeholder = 'Search your delicacy...' name = 'query' className = 'd-block outline-0 w-100 py-3 bg-clear border-0' />
                </div>{
                    (seachQuery.length > 0)
                    ? (
                        <div className = 'col-auto'>
                            <button type = 'submit' className = 'border-0 bg-clear outline-0 d-block flicker'>
                                <span className = 'bi-arrow-right fo-s-18 text-muted'></span>
                            </button>
                        </div>
                    )
                    : <></>
                }
            </form>
        </div>
    )
}
