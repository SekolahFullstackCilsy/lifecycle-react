import { useEffect, memo } from "react"
import { withHeading } from '../../hoc/withHeading'

function Component({ person }) {

  useEffect(() => {
    return () => {
      console.log('akan dijalankan ketika unmount', person.title)
    }
  }, [])

  return (
    <div key={person.id}>
      <p>{person.title} - {person.userId}</p>
    </div>
  )
}

const MemoizedComponent = memo(Component)

const Person = withHeading(MemoizedComponent)

export { Person }