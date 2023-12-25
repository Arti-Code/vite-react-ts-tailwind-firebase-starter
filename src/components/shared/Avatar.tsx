import AvatarSVG from 'avatar.svg';

export const Avatar = () => (
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <img  src={AvatarSVG} alt='AvatarSVG' />
        </div>
    </div>
);