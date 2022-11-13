export default function TopRibbon(){
    const navItems = [
        {name: 'food', icon: 'food.png'},
        {name: 'beverages', icon: 'beverages.png'},
        {name: 'dessert', icon: 'dessert.png'},
        {name: 'starters', icon: 'starters.png'},
    ]

    return (
        <HorizontalScroll>{
            navItems.map(({name, icon}, index) => (
                <div className = 'col-auto' key = {index}>
                    <FoodBox icon = {icon} title = {name} />
                </div>
            ))
        }</HorizontalScroll>
    )
}

function HorizontalScroll({children}){
    return (
        <nav className = 'py-3'>
            <div className = 'container'>
                <div className = 'row flex-nowrap'>
                    <div className = 'd-none col-auto text-center py-4'>
                        <button className = 'h-100 bg-light p-2 border-0'>
                            <span className = 'bi-chevron-left theme-color fa-2x'></span>
                        </button>
                    </div>
                    <div className = 'col overflow-x-0 px-0'>
                        <div className = 'row a-i-c py-4 flex-nowrap'>
                            {children}
                        </div>
                    </div>
                    <div className = 'd-none col-auto text-center py-4'>
                        <button className = 'h-100 bg-light p-2 border-0'>
                            <span className = 'bi-chevron-right theme-color fa-2x'></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function FoodBox({icon, title}){
    return (
        <div style = {{maxWidth: '120px'}}>
            <button
                className = 'theme-bg d-flex a-i-c j-c-c shadow border-0 outline-0 rounded-circle mx-auto'
                style = {{
                    width: '120px',
                    height: '120px'
                }}>
                    <img className = 'd-block w-50' src = {`/images/icons/${icon}`} />
                </button>
            <div className = 'text-center one-line pt-2'>
                <span className = 'text-sentence theme-color bold' title = {title}>{title}</span>
            </div>
        </div>
    )
}
