import newRequest from '@/utils/newRequest'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        newRequest.post('/auth/logout')
        navigate('/')
    })
    return (
        <div>

        </div>
    )
}

export default Logout