import { UilSearch, UilMapMarkerAlt } from '@iconscout/react-unicons'

function SearchInput() {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text"
                       className="text-xl font-light p-2 w-full focus:outline-none shadow-xl capitalize"
                       placeholder="Search for city...."
                />
                <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                <UilMapMarkerAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"  />
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button
                    name="metric"
                    className="text-white text-xl font-light"
                >°C</button>
                <p className="text-white mx-1 text-xl">|</p>
                <button
                    name="imperial"
                    className="text-white text-xl font-light"
                >°F</button>
            </div>
        </div>
    )
}

export default SearchInput