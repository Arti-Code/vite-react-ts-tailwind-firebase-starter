/* import AvatarSVG from 'avatar.svg'; */
import {Avatar} from '~/components/shared/Avatar';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInNavButton } from '../domain/auth/SignInButton';
import { SignOutNavButton } from '../domain/auth/SignOutButton';

export const Nav = () => {
    const { state } = useAuthState();
    let sign_btn;
    if (state.state === 'UNKNOWN') {
        null;
    } else if (state.state === 'SIGNED_IN') {
        sign_btn = <SignOutNavButton />;
    }  else if (state.state === 'SIGNED_OUT') {
        sign_btn = <SignInNavButton />;
    }
    //state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? txt = 'Login' : txt = 'Logout'
    return (
    <div className="navbar bg-base-300 rounded-box">
        <div className="flex-1 px-2 lg:flex-none">
            <a className="text-lg font-bold">Robots</a>
        </div> 
        <div className="flex justify-end flex-1 px-2">
            <div className="flex items-stretch">
                <a className="btn btn-ghost rounded-btn">New</a>
                <a className="btn btn-ghost rounded-btn">Devices</a>
                { sign_btn }
                <div className="divider divider-horizontal"></div>
                {/* <a className="btn btn-ghost rounded-btn" href='login'>{txt}</a> */}
                <Avatar />
            </div>
        </div>
    </div>
    );
};