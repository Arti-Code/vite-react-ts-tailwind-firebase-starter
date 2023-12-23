import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import { Nav } from '~/components/shared/Nav';
import { Nav2 } from '~/components/shared/Nav2';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="Robotic Works" />
      <Nav2 />
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
            <div className="my-auto grid gap-2">
              <div className="mt-4 grid gap-2">
                {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
                <button className="btn btn-info" onClick={() => setIsOpen(true)}>Display Dialog</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-error">Error</button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
