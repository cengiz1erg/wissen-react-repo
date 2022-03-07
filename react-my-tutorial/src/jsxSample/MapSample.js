

function MapSample() {

    let metalGroups = ['Iron Maiden', 'Gojira', 'Parkway Drive', 'Black Sabbath']

    return (
        <div>
            <ul>
                {
                    // Key hatası
                    // https://reactjs.org/docs/lists-and-keys.html#keys
                    // metalGroups.map((item, key) =>(<li>{item}</li>))
                    
                    metalGroups.map((item, key) => {
                        return (<li key={key}>{item}</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default MapSample