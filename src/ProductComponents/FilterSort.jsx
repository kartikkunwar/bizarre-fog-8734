import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import "./FilterSort.css"

const FilterSort = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [sortBy, setSortBy] = useState(searchParams.getAll('sortBy') || "")

    console.log(searchParams.getAll("category"))

    const [categoryType, setCategoryType] = useState(searchParams.getAll("category") || [])

    const[genderType,setGenderType] = useState(searchParams.getAll("gender") || [])


    const handleGenderFilter = (e)=>{
        
        const genderOption = e.target.value;
        // console.log(genderOption)

        let newGenderType = [...genderType];
      
        if(newGenderType.includes(genderOption)){
            newGenderType.splice(newGenderType.indexOf(genderOption),1)
        }else{
            newGenderType.push(genderOption)
        }
       
        setGenderType(newGenderType)
    }

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
        genderType && (params.gender = genderType) 
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params)

    }, [categoryType, setSearchParams, sortBy,genderType])

    return (
        <div className='filter'>
            <h2>Filters</h2>
            <div className='filter-1'>
                  <h4>Categories</h4>

                <div className='filter-2'>
                    <input type="checkbox" value="Beachwear" defaultChecked={categoryType.includes("Beachwear")} onChange={handleFilter} />
                    <label>Beachwear</label>
                </div>

                <div className='filter-2'>
                    <input type="checkbox" value="Coats" defaultChecked={categoryType.includes("Coats")} onChange={handleFilter} />
                    <label>Coats</label>
                </div>

                <div className='filter-2'>
                    <input type="checkbox" value="Suits" defaultChecked={categoryType.includes("Suits")} onChange={handleFilter} />
                    <label>Suits</label>
                </div>

                <div className='filter-2'>
                    <input type="checkbox" value="Shorts" defaultChecked={categoryType.includes("Shorts")} onChange={handleFilter} />
                    <label>Shorts</label>
                </div>

                <div className='filter-2'>
                    <input type="checkbox" value="Shirts" defaultChecked={categoryType.includes("Shirts")} onChange={handleFilter} />
                    <label>Shirts</label>
                </div>
            </div>

            <div className='filter-1'>
            <h4>Price</h4>
            <div onChange={handleSortBy}>
                <div className='filter-2'>
                    <input type="radio" name="sortBy" value="asc" defaultChecked={sortBy === 'asc'} />
                    <label>Low - High</label>
                </div>

                <div className='filter-2'>
                    <input type="radio" name="sortBy" value="desc" defaultChecked={sortBy === 'desc'} />
                    <label>High - Low</label>
                </div>
                </div>
            </div>
            <div className='filter-1'>
            <h4>Gender</h4>
      <div className='filter-2'>
            <input type="checkbox" value="Women" defaultChecked={genderType.includes("Women")} onChange={handleGenderFilter}/>
            <label>Women</label>
        </div>

        <div className='filter-2'>
            <input type="checkbox" value="Men" defaultChecked={genderType.includes("Men")} onChange={handleGenderFilter}/>
            <label>Men</label>
        </div>
            </div>
        </div>
    )
}

export default FilterSort;