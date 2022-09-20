import React, { useEffect } from 'react'

const useWatchState = (name, state) => {

  const watcher = useEffect(() => {
    console.log(`${name}新值為${state}`)

    return (
      console.log(`${name}舊值為${state}`)
    )
  })

  return watcher
}

export default useWatchState