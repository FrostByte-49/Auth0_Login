import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return null;

  return (
    isAuthenticated &&
    user && (
      <div className="profile">
        <img src={user.picture} alt={user.name} />
        <div className="profile-name">{user.name}</div>
        <div className="profile-email">{user.email}</div>
      </div>
    )
  );
};

export default Profile;
