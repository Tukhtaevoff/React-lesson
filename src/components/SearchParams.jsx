import React, { useState } from "react";

const STUDENTS = ["Muhammad", "Ali", "John", "Pahlavon"];



export const SearchParams = () => {

    const [count, setCount] = useState(1);
    const [location, setLocation] = useState("Tashkent,Hadra UZ")
    const [student, setStudent] = useState("");


    return (
        <>
            <div className="search-params">
                {/* <div>
                <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>increment</button>
                </div> */}
                <form>
                 

                    <label htmlFor="location">
                        Location
                   
                    <input id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                        <button onClick={() => setCount(count + 1)}>Submit</button>
                    </label>
                    <label htmlFor="student">
                        Student
                        <select id="student" value={student} onChange={(e) => { setStudent(e.target.value)}}>
                            {STUDENTS.map((student) => (
                            <option key={student} value={student}>
                                {student}
                            </option>
                            ))}
                        </select>
                        STUDENTS
                        </label>
                </form>
            </div>
        </>
    )
}

export default SearchParams;