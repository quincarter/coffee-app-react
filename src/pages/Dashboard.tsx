import { GlobalNotification } from "../components/GlobalNotification";
import { useAuth } from "../utils/AuthContext";

export interface IDashboardProps {}

export const Dashboard = () => {
  const { user, globalNotification } = useAuth();

  return (
    <>
      {globalNotification.message && (
        <GlobalNotification
          severity={globalNotification.severity || "info"}
          message={globalNotification.message || ""}
          canClose={globalNotification.canClose || true}
          title={globalNotification.title || ""}
          variant={globalNotification.variant || "standard"}
        />
      )}
      <div>DASHBOARD Here! Welcome {user.name}</div>
    </>
  );
};

export default Dashboard;
