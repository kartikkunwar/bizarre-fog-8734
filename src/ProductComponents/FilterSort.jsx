import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSort = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [sortBy, setSortBy] = useState(searchParams.getAll('sortBy') || "")

    console.log(searchParams.getAll("category"))

    const [categoryType, setCategoryType] = useState(searchParams.getAll("category") || [])

    const handleFilter = (e) => {

        const option = e.target.value;

        let newCategory = [...categoryType];
        if (newCategory.includes(option)) {
            newCategory.splice(newCategory.indexOf(option), 1)
        } else {
            newCategory.push(option)
        }

        setCategoryType(newCategory)
    }
    // console.log(categoryType)

    const handleSortBy = (e) => {
        setSortBy((e.target.value))
    }
    useEffect(() => {
        const params = {};
        categoryType && (params.category = categoryType);

        sortBy && (params.sortBy = sortBy);
        setSearchParams(params)

    }, [categoryType, setSearchParams, sortBy])

    return (
        <div>
            <h2>Filter</h2>
            <div>
                <input type="checkbox" value="Beachwear" defaultChecked={categoryType.includes("Beachwear")} onChange={handleFilter} />
                <label>Beachwear</label>
            </div>

            <div>
                <input type="checkbox" value="Coats" defaultChecked={categoryType.includes("Coats")} onChange={handleFilter} />
                <label>Coats</label>
            </div>

            <div>
                <input type="checkbox" value="Suits" defaultChecked={categoryType.includes("Suits")} onChange={handleFilter} />
                <label>Suits</label>
            </div>

            <div>
                <input type="checkbox" value="Shorts" defaultChecked={categoryType.includes("Shorts")} onChange={handleFilter} />
                <label>Shorts</label>
            </div>

            <div>
                <input type="checkbox" value="Shirts" defaultChecked={categoryType.includes("Shirts")} onChange={handleFilter} />
                <label>Shirts</label>
            </div>

            <h2>Price</h2>
            <div onChange={handleSortBy}>
                <div>
                    <input type="radio" name="sortBy" value="asc" defaultChecked={sortBy === 'asc'} />
                    <label>High - Low</label>
                </div>

                <div>
                    <input type="radio" name="sortBy" value="desc" defaultChecked={sortBy === 'desc'} />
                    <label>Low - High</label>
                </div>
            </div>
        </div>
    )
}

export default FilterSort;