import LayoutAdmin from "@/components/backend/Layout/layout";
import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { listBlogs } from "@/pages/api/graphql/queries";
import Link from "next/link";

interface Props {
  blogs: any;
}

export default function Blogs({ blogs }: Props) {
  return (
    <div>
      <LayoutAdmin>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h1 className="text-4xl font-bold py-4 inline-block">Blogs</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Blog name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CreatedAt
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs?.map((blog: any) => (
                  <tr
                    key={blog.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {blog.title}
                    </th>
                    <td className="px-6 py-4">{blog.category.title}</td>
                    <td className="px-6 py-4">{blog.date}</td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/dashboard/blogs/${blog.slug}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Link href={`/dashboard/blogs/create`}>
              <button className="uppercase mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create
              </button>
            </Link>
          </div>
        </div>
      </LayoutAdmin>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: listBlogs,
  });

  return {
    props: {
      blogs: data.listBlogs.items,
    },
  };
};
