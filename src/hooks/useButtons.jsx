import React, { useState } from 'react'

const useButtons = (ButtonNames, defaultName) => {
  const defaultState = ButtonNames.map(name => name === defaultName)
  const [whoActive, setState] = useState(defaultState)

  function setWhoActive(activeName) {
    const newState = ButtonNames.map(name => name === activeName)

    setState(newState)
  }


  return [whoActive, setWhoActive]
}

export default useButtons