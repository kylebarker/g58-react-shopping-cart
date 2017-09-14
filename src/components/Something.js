import React from 'react'

const Something = ({people}) => {
  let listOfPeople = people.map((person, ind) => <li key={ind}>{person.name}</li>)
  return (
    <ul>
      {listOfPeople}
    </ul>
  )
}

export default Something
