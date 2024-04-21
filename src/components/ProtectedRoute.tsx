import { FC } from 'react'
import Profile from '../pages/Profile'

interface Props {
    children:JSX.Element
}

export const ProtectedRoute:FC=<Props> ({children}) => {
  return <div>ProtectedRoute</div>
}
<ProtectedRoute>
    <Profile/>
</ProtectedRoute>
