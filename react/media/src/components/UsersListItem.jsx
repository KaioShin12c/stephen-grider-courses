import React from "react";
import { removeUser } from "../store/thunks/removeUser";
import useThunk from "../hooks/useThunk";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isRemoveUserLoading, removeUserError] =
    useThunk(removeUser);

  const handleDeleteUser = (user) => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button
        loading={isRemoveUserLoading}
        onClick={() => handleDeleteUser(user)}
      >
        <GoTrashcan />
      </Button>
      {removeUserError && "Error deleting user..."}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
