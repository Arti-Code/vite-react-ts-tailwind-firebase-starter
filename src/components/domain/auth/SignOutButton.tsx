import { useAuth } from "~/lib/firebase";

type Props = {};

export const SignOutButton = (props: Props) => {
  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="btn btn-warning normal-case"
    >
      Sign Out
    </button>
  );
};


export const SignOutNavButton = () => {
  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
  };
// <a className="btn btn-ghost rounded-btn">New</a>
  return (
    <a
      onClick={handleClick}
      className="btn btn-outline btn-warning rounded-btn"
    >
      SignOut
    </a>
  );
};