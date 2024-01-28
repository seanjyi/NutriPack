"use client"

import Image from "next/image";
import * as React from 'react';
import { useState, useEffect } from 'react';
import { GeistSans } from 'geist/font/sans';
import { Search } from "@/components/ui/search";
import { Button } from "@/components/ui/button";
import { set } from "date-fns";
import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { LocationSelect } from "./locationselect";
import { MealtimeSelect } from "./mealtimeselect";
import { SearchDatePicker } from "./datepicker";
import { ResultsTable } from "./results";


export default function SearchPage() {

    const [date, setDate] = useState(new Date());
    const [mealtime, setMealtime] = useState("");
    const [location, setLocation] = useState("");
    const [filtersOn, setFiltersOn] = useState(false);
    const [dietViolations, setDietViolations] = useState({
        vegan: false,
        vegetarian: false,
        pescetarian: false,
        keto: false,
        halal: false,
        glutenfree: false,
        diabetic: false,
        wolfapproved: false
    });
    const [allergenViolations, setAllergenViolations] = useState({
        milk: false,
        eggs: false,
        fish: false,
        shellfish: false,
        treenuts: false,
        peanuts: false,
        wheat: false,
        soy: false
    });
    const [nutrientViolations, setNutrientViolations] = useState({
        highcarb: false,
        lowcarb: false,
        highfiber: false,
        lowfiber: false,
        highprotein: false,
        lowprotein: false,
        highfat: false,
        lowfat: false,
        lowsaturatedfat: false,
        notransfat: false,
        lowsodium: false
    });

    const handleFilterToggle = () => {
        setFiltersOn(!filtersOn);
    }

    const handleDietViolation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDietViolations({
            ...dietViolations,
            [e.target.name]: e.target.checked
        });
    }

    const handleAllergenViolation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAllergenViolations({
            ...allergenViolations,
            [e.target.name]: e.target.checked
        });
    }

    const handleNutrientViolation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNutrientViolations({
            ...nutrientViolations,
            [e.target.name]: e.target.checked
        });
    }

    const handleMealSelectChange = (e: string) => {
        setMealtime(e);
    }

    const handleLocationSelectChange = (e: string) => {
        setLocation(e);
    }

    const handleDateSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDate(new Date(e.target.value));
    }

    const createSchema = () => {
        const diet = Object.keys(dietViolations).filter((preference: string) => dietViolations[preference as keyof typeof dietViolations]);
        const allergens = Object.keys(allergenViolations).filter((preference: string) => allergenViolations[preference as keyof typeof allergenViolations]);
        const nutrients = Object.keys(nutrientViolations).filter((preference: string) => nutrientViolations[preference as keyof typeof nutrientViolations]);

        const schema = {
            date: date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear(),
            mealtime: mealtime,
            location: location,
            dietViolations: diet,
            allergenViolations: allergens,
            nutrientViolations: nutrients
        }
        return schema
    }

    const handleApiCall = async () => {
        
    }

    useEffect(() => {
        console.log(createSchema());
    }, [date, mealtime, location, dietViolations, allergenViolations, nutrientViolations]);

    return (
        
        <main className="flex min-h-screen flex-col items-center p-24">
            <a className="pr-9 place-self-start" href="/">
                <h2 className="text-3xl font-bold tracking-tight">
                    <span className="text-red-500 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    ←
                    </span>
                </h2>
              </a>
            <div className="flex flex-col place-items-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl pb-8">
                Find your next <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">meal</span>
                </h1>
                <div className="flex pb-6">
                    <SearchDatePicker date={date} setDate={setDate}></SearchDatePicker>
                    <MealtimeSelect onChange={handleMealSelectChange}/>
                    <LocationSelect onChange={handleLocationSelectChange}/>
                    <Button className="mr-6">Search</Button>
                    <details className="place-self-center" onToggle={handleFilterToggle}>
                        <summary>Advanced filters</summary>
                    </details>
                </div>
            </div>
            {filtersOn && (
            
            <Card className="w-[600px] p-6">
                <CardTitle className="pb-6">Filter</CardTitle>
                <CardContent className="flex justify-between pb-0 mb-0">
                    <div>
                        <b>Diets</b>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <input type="checkbox" id="vegan" name="vegan" value="vegan" onChange={handleDietViolation}/>
                                <label htmlFor="vegan">Vegan</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian" onChange={handleDietViolation}/>
                                <label htmlFor="vegetarian">Vegetarian</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="pescetarian" name="pescetarian" value="pescetarian" onChange={handleDietViolation}/>
                                <label htmlFor="pescetarian">Pescetarian</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="keto" name="keto" value="keto" onChange={handleDietViolation}/>
                                <label htmlFor="keto">Keto/Atkins</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="halal" name="halal" value="halal" onChange={handleDietViolation}/>
                                <label htmlFor="halal">Halal</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="glutenfree" name="glutenfree" value="glutenfree" onChange={handleDietViolation}/>
                                <label htmlFor="glutenfree">Gluten-free</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="diabetic" name="diabetic" value="diabetic" onChange={handleDietViolation}/>
                                <label htmlFor="diabetic">Diabetic</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="wolfapproved" name="wolfapproved" value="wolfapproved" onChange={handleDietViolation}/>
                                <label htmlFor="wolfapproved">Wolf Approved</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <b>Allergens</b>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <input type="checkbox" id="milk" name="milk" value="milk" onChange={handleAllergenViolation}/>
                                <label htmlFor="milk">Milk</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="eggs" name="eggs" value="eggs" onChange={handleAllergenViolation}/>
                                <label htmlFor="eggs">Eggs</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="fish" name="fish" value="fish" onChange={handleAllergenViolation}/>
                                <label htmlFor="fish">Fish</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="shellfish" name="shellfish" value="shellfish" onChange={handleAllergenViolation}/>
                                <label htmlFor="shellfish">Shellfish</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="treenuts" name="treenuts" value="treenuts" onChange={handleAllergenViolation}/>
                                <label htmlFor="treenuts">Tree Nuts</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="peanuts" name="peanuts" value="peanuts" onChange={handleAllergenViolation}/>
                                <label htmlFor="peanuts">Peanuts</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="wheat" name="wheat" value="wheat" onChange={handleAllergenViolation}/>
                                <label htmlFor="wheat">Wheat</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="soy" name="soy" value="soy" onChange={handleAllergenViolation}/>
                                <label htmlFor="soy">Soy</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <b>Nutrients</b>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <input type="checkbox" id="highcarb" name="highcarb" value="highcarb" onChange={handleNutrientViolation}/>
                                <label htmlFor="highcarb">High Carb</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="lowcarb" name="lowcarb" value="lowcarb" onChange={handleNutrientViolation}/>
                                <label htmlFor="lowcarb">Low Carb</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="highfiber" name="highfiber" value="highfiber" onChange={handleNutrientViolation}/>
                                <label htmlFor="highfiber">High Fiber</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="lowfiber" name="lowfiber" value="lowfiber" onChange={handleNutrientViolation}/>
                                <label htmlFor="lowfiber">Low Fiber</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="highprotein" name="highprotein" value="highprotein" onChange={handleNutrientViolation}/>
                                <label htmlFor="highprotein">High Protein</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="lowprotein" name="lowprotein" value="lowprotein" onChange={handleNutrientViolation}/>
                                <label htmlFor="lowprotein">Low Protein</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="highfat" name="highfat" value="highfat" onChange={handleNutrientViolation}/>
                                <label htmlFor="highfat">High Fat</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="lowfat" name="lowfat" value="lowfat" onChange={handleNutrientViolation}/>
                                <label htmlFor="lowfat">Low Fat</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="lowsaturatedfat" name="lowsaturatedfat" value="lowsaturatedfat" onChange={handleNutrientViolation}/>
                                <label htmlFor="lowsaturatedfat">Low Saturated Fat</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="notransfat" name="notransfat" value="notransfat" onChange={handleNutrientViolation}/>
                                <label htmlFor="notransfat">No Trans Fat</label>
                            </div>
                            <div className="flex flex-row">
                                <input type="checkbox" id="lowsodium" name="lowsodium" value="lowsodium" onChange={handleNutrientViolation}/>
                                <label htmlFor="lowsodium">Low Sodium</label>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            )}
            <ResultsTable data={{poop: true}}/>
        </main>
    );
}
