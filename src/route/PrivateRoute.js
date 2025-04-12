import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({user, children}) => {
    //children은 하위 파트를 얘기하기 때문에 따로 선언 안해줘도 됨. 
    //app.js에서 PrivateRoute의 children 은 TodoPage
  return (
      user? children: <Navigate to='/login'/>
  )
}

//유저 값이 있으면? goto TodoPage. 없으면? goto /login

export default PrivateRoute