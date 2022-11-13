import {Fragment} from 'react'
import Header from '/components/pages/Header'
import TopRibbon from '/components/pages/TopRibbon'

export default function Index(){
    return (
        <Fragment>
            <Header />
            <TopRibbon />
            <section className = 'container'>
                <div className = 'row mb-5'>
                    <div className = 'col-lg-8 border'>
                        <div className = 'row'>
                            <div className = 'col-12 mb-3'>
                                <h1 className = 'theme-color bold text-capitalize'>what's new</h1>
                            </div>
                            <div className = 'col-12'>
                                <div className = 'bg-light rounded-2x' style = {{minHeight: '300px'}}></div>
                            </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-12 mb-3'>
                                <h1 className = 'theme-color bold text-capitalize'>our menu</h1>
                            </div>
                            <div className = 'col-12'>
                                <div className = 'bg-light rounded-2x' style = {{minHeight: '300px'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-lg-4 border'>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
