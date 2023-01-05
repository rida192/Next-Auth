import { useSession, signIn } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  // console.log(session);
  if (!session) {
    // signIn();
    return <h1>You are not auth</h1>;
  } else {
    return <div>Dashboard Page</div>;
  }
  // if (status === "loading") return <h1>Loading...</h1>;
};

export default Dashboard;
