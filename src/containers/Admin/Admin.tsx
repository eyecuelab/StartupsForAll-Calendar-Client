import { FC } from "react";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setToken } from "../../store/slices/auth/authSlice";
import { resetUser } from "../../store/slices/user/userSlice";
import EventsList from "../../components/EventList/EventsList";
import "./index.css";
import AdminGoogle from "../../components/Google/AdminGoogle";

const Admin: FC | any = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ user }) => user);
  console.log("Loaded Admin page with user:", user);

  const handleLogout = () => {
    dispatch(setToken({ token: "" }));
    dispatch(resetUser());
  };

  if (!user || !user.isAdmin) {
    return <Redirect to={"/"} />;
  }

  //Check to see if admin.isGoogleAuth === true
  //If true, return 'App is authed blah...'
  //If false, return button to auth app
  return (
    <Wrapper>
      <h1>Admin page</h1>
      <div className="button">
        <button onClick={handleLogout}>Log Out</button>
        <AdminGoogle />
      </div>
      <EventsList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  padding-top: 14px;
  max-width: 345px;
  margin: 0 auto;
`;

export default Admin;
