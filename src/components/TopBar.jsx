function TopBar() {
    const cities = [
        {
            id:1,
            name: 'Philadelphia'
        },
        {
            id:2,
            name: 'New York'
        },
        {
            id:3,
            name: 'Paris'
        },
        {
            id:4,
            name: 'London'
        },
        {
            id:5,
            name: 'Tokyo'
        }
    ]
    return (
        <div>
           <div className="flex items-center justify-around my-6">
               {cities.map((city) => (
                   <button key={city.id} className="text-white text-lg font-medium">{city.name}</button>
               ))}
           </div>
        </div>
    )
}

export default TopBar;