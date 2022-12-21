import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import "./FilterSort.css"

const FilterSort = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [sortBy, setSortBy] = useState(searchParams.getAll('sortBy') || "")

    console.log(searchParams.getAll("category"))

    const [showcategory, setShowcategory] = useState(false)
    const [showprice, setShowprice] = useState(false)
    const [showgender, setShowgender] = useState(false)
    const [categoryType, setCategoryType] = useState(searchParams.getAll("category") || [])

    const [genderType, setGenderType] = useState(searchParams.getAll("gender") || [])


    const handleGenderFilter = (e) => {

        const genderOption = e.target.value;
        // console.log(genderOption)

        let newGenderType = [...genderType];

        if (newGenderType.includes(genderOption)) {
            newGenderType.splice(newGenderType.indexOf(genderOption), 1)
        } else {
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

    }, [categoryType, setSearchParams, sortBy, genderType])

    return (
        <div className='filter'>
            <Box w='80%' m='auto' ><Text fontSize='36px' fontWeight='bold' >Filters</Text></Box>
            <div className='filter-1' style={{marginTop:'30px'}}>
                <Button onClick={() => setShowcategory(!showcategory)} className='buttp'>{showcategory ? 'Categories ↑' : 'Categories ↓'}</Button>
                {showcategory && <Box>
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
                </Box>
                }
            </div>

            <div className='filter-1'>
                <Button onClick={() => setShowprice(!showprice)} className='buttp'>{showprice ? 'Price ↑' : 'Price ↓'}</Button>
                <div onChange={handleSortBy}>
                    {showprice && <Box>
                        <div className='filter-2'>
                            <input type="radio" name="sortBy" value="asc" defaultChecked={sortBy === 'asc'} />
                            <label>Low - High</label>
                        </div>

                        <div className='filter-2'>
                            <input type="radio" name="sortBy" value="desc" defaultChecked={sortBy === 'desc'} />
                            <label>High - Low</label>
                        </div>
                    </Box>
                    }
                </div>
            </div>
            <div className='filter-1'>
                <Button onClick={() => setShowgender(!showgender)} className='buttp'>{showgender ? 'Gender ↑' : 'Gender ↓'}</Button>
                {showgender&&<Box>
                <div className='filter-2'>
                    <input type="checkbox" value="Women" defaultChecked={genderType.includes("Women")} onChange={handleGenderFilter} />
                    <label>Women</label>
                </div>

                <div className='filter-2'>
                    <input type="checkbox" value="Men" defaultChecked={genderType.includes("Men")} onChange={handleGenderFilter} />
                    <label>Men</label>
                </div>
                </Box>
                }
            </div>
        </div>
    )
}

export default FilterSort;





