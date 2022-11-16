import { useSelector } from "react-redux";
import { ISingleUser } from "../../common/context/entities/users";
import { IState } from "../../common/context/reducers";
import { IUsersReducer } from "../../common/context/reducers/usersReducer";

interface FeedProps {
}

export const Feed = (props: FeedProps) => {

  const { users } = useSelector<IState, IUsersReducer>(state => ({
    ...state.users
  }));

  return (
    <>
      {users.map((user: ISingleUser) => {
        return (
          <span key={user.id}>
            {user.username}
          </span>
        );
      })}
    </>
  );
};