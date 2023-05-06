import { useAuth } from 'hooks/useAuth';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
