import { useSession, getSession } from "next-auth/react";
const Blog = ({ data }) => {
  return (
    <>
      <div>Blog Page - {data}</div>
    </>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        perminant: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? "100 post in blog" : "free blog posts",
    },
  };
}
