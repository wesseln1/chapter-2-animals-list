import React, {Component} from 'react'
import EmployeeList from "./Employees/EmployeeList"
import LocationList from "./Locations/LocationList"
import AnimalList from "./Animals/AnimalList"
import "./Kennel.css"

class Kennel extends Component{
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker"},
    { id: 2, name: "Jordan Nelson"},
    { id: 3, name: "Zoe LeBlanc"},
    { id: 4, name: "Blaise Roberts"}
]
  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way"},
    { id: 2, name: "Nashville South", address: "10101 Binary Court"}
  ]
  animalsFromAPI = [
    { id:1, name: "Chester"}
  ]
  state = {
    employees: this.employeesFromAPI,
    locations: this.locatonsFromAPI,
    animals: this.animalsFromAPI
  }
  render() {
    return (
      <article className="kennel">
      <EmployeeList employees={this.state.employees} />
      <LocationList locations={this.state.locations}/>
      <AnimalList animals={this.state.animals}/>
      </article>
    )
  }
}
export default Kennel