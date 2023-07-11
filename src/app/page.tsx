import Link from "next/link";
import queryGraphql from "../shared/query-graphql/index";

export default async function UserListing() {
  const { users = [] } = await queryGraphql(`
    query {
      users {
        name
        username
      }
    }
  `);

  const getUsers = async () => {
    let response = await fetch(
      "https://api.planningcenteronline.com/people/v2/people",
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic " +
            btoa(process.env.PCO_APP_ID + ":" + process.env.PCO_SECRET),
        },
      }
    );
    let data = await response.json();
    const userList = data?.data?.map((user) => {
      return { name: user.attributes.last_name };
    });
    return userList;
  };
  console.log(await getUsers());
  return (
    <div>
      <h1>User Listing</h1>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            <Link href="/[username]" as={`/${user.username}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
