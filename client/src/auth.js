import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {auth} from './_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {
    //null => 아무나 출입이 가능한 페이지
    //true => 로그인한 유저만 출입이 가능한 페이지
    //false=> 로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(props){
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                if(!response.payload.isAuth){
                    if(option) {
                        props.history.push('/sign_in')
                    }
                } else {
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/home')
                    } else {
                        if(option === false)
                            props.history.push('/home')
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent {...props} user={user} />
        )
    }

    return AuthenticationCheck
}