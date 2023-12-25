import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import DeviceList from '~/components/shared/DeviceList';

function LogIn() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="Robotic Works" />

      <div className="hero min-h-screen">
        <div className="text-center hero-content">
              <div className="grid">
                {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
              </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
