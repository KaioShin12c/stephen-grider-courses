import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const { data } = useSelector((state) => state.users);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUserLoading, creatingUserError] =
    useThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, []);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>{loadingUsersError}</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between m-3">
        <h1 className="m-2 text-xl ">Users</h1>
        <Button loading={isCreatingUserLoading} onClick={handleUserAdd}>
          + Add User
        </Button>
      </div>{" "}
      {content}
    </div>
  );
};
export default UsersList;
