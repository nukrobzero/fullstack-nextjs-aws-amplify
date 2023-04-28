import LayoutAdmin from "@/components/backend/Layout/layout";
import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { listBlogs, listBlogsAdmin } from "@/pages/api/graphql/queries";
import Link from "next/link";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { deleteBlog } from "@/pages/api/graphql/mutations";
import { useRouter } from "next/router";
import PopUpBTN from "@/components/backend/etc/popupdelete";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { FcSearch } from "react-icons/fc";

interface Props {
  blogs: any;
}

export default function Blogs({ blogs }: Props) {
  const router = useRouter();
  const [isOpenPopUpDelete, setIsOpenPopUpDelete] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(0);

  // Data/page
  const [perPage, setPerPage] = useState(8);

  // filter the blogs based on the search query
  const filteredBlogs = blogs.filter(
    (blog: any) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handelDelete = async (id: string, image: string) => {
    try {
      await API.graphql(
        graphqlOperation(deleteBlog, {
          input: {
            id,
          },
        })
      );
      await Storage.remove(image);
      router.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <LayoutAdmin>
        <div>
          <h1 className="text-4xl font-bold py-4 inline-block">Blogs</h1>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span>
                <FcSearch size={30} />
              </span>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-black">
              <thead className="text-xs text-slate-800 uppercase bg-blue-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Blog name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created At
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.length === 0 ? (
                  <tr className="bg-white border-b hover:bg-gray-200">
                    <td colSpan={6} className="text-center py-4">
                      No data found
                    </td>
                  </tr>
                ) : (
                  filteredBlogs.map((blog: any) => (
                    <tr
                      key={blog.id}
                      className="bg-white border-b hover:bg-gray-200"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                      >
                        {blog.title}
                      </th>
                      <td className="px-6 py-4">{blog.category.title}</td>
                      <td className="px-6 py-4">{blog.status}</td>
                      <td className="px-6 py-4">{blog.date}</td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/dashboard/blogs/${blog.slug}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() =>
                            setIsOpenPopUpDelete(!isOpenPopUpDelete)
                          }
                          className="font-medium text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                        {isOpenPopUpDelete && (
                          <div>
                            <PopUpBTN
                              onClickYes={() =>
                                handelDelete(blog.id, blog.coverImage)
                              }
                              onClickNo={() =>
                                setIsOpenPopUpDelete(!isOpenPopUpDelete)
                              }
                            />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* Paginate table */}
          <div className="flex justify-center md:justify-end py-4">
            <ReactPaginate
              pageCount={Math.ceil(blogs?.length / perPage)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={({ selected }) => setCurrentPage(selected)}
              containerClassName="flex justify-center py-2 px-4 rounded-lg bg-white shadow-md"
              pageClassName="mx-2"
              pageLinkClassName="py-2 px-4 rounded-full"
              activeClassName="bg-blue-400 rounded-full"
              previousClassName="mr-2"
              nextClassName="ml-2"
              previousLinkClassName=""
              nextLinkClassName=""
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Link href={`/dashboard/blogs/create`}>
              <button className="uppercase mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
    query: listBlogsAdmin,
  });

  return {
    props: {
      blogs: data.listBlogs.items,
    },
  };
};
