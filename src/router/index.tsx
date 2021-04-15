import React from 'react'
import { Redirect } from 'react-router-dom'


const Dashboard = React.lazy(() => import('@/views/dashboard/Dashboard'))
const Policy = React.lazy(() => import('@/views/policy'))
const PolicyDetail = React.lazy(() => import('@/views/policydetail'))

const routes = [
    { path: '/', exact: true, render: () => <Redirect to="/Dashboard" /> },
]