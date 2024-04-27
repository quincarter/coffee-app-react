import { useAuth } from "../utils/AuthContext";

export interface IDashboardProps {}

export const Dashboard = () => {
  const { user } = useAuth();
  return <div>DASHBOARD HERE!</div>;
};

export default Dashboard;
