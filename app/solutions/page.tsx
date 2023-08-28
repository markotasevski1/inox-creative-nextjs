import { Solution } from './Solution'
import { Machine } from '../../types/types'
async function getData() {
  const res = await fetch('http://127.0.0.1:1337/api/machines?populate=*')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Solutions() {
  const data = await getData()
  return (
    <div>
      {data.data.map((solution: Machine) => (
        <>
          <div key={solution.id}>{solution.id}</div>
          <Solution machineAttributes={solution.attributes} />
        </>
      ))}
    </div>
  )
}
