export default function Preview(){
    const width = 750

    return (
        <section className = 'container-fluid bg-light py-5'>
            <div className = 'row'>
                <div className = 'col-12 mx-auto' style = {{maxWidth: `${width}px`}}>
                    <div className = 'text-dark py-5 px-4' style = {{minHeight: `${1.414 * width}px`}}>
                        <header>
                            <h3 className = 'bold text-uppercase'>WORK REPORT FOR THE MONTH OF OCTOBER, 2022</h3>
                            <div className = 'text-capitalize mb-1 half-bold'>constructed by: Musa-Azeez Taslim Eniola</div>
                            <div className = 'text-capitalize mb-1 half-bold'>date: 08/11/2022</div>
                            <hr className = 'border-secondary' />
                        </header>
                    </div>
                </div>
            </div>
            <style jsx>{`
                *{
                    font-size: 12px;
                }
            `}</style>
        </section>
    )
}
