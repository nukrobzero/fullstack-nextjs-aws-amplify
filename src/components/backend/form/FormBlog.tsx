import Editor from "@/components/backend/editor";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutAdmin from "../Layout/layout";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createBlog } from "@/pages/api/graphql/mutations";
import { v4 as uuidv4 } from "uuid";

interface Props {
  page: any;
  category: any;
  type: string;
  imageStorage: string;
}

export default function FormBlog({
  page,
  category,
  type,
  imageStorage,
}: Props) {
  const router = useRouter();
  const [showupload, setShowupload] = useState(false);
  const [content, setContent] = useState(
    page === undefined ? "" : page.content
  );
  const [title, setTitle] = useState(page === undefined ? "" : page.title);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(
    page === undefined ? "" : page.description
  );
  const [keywords, setKeywords] = useState(
    page === undefined ? "" : page.keywords
  );
  const [date, setDate] = useState(
    page === undefined ? new Date().toISOString().substr(0, 10) : page.date
  );
  const [status, setStatus] = useState(
    page === undefined ? "Published" : page.status
  );
  const [categoryId, setCategoryId] = useState(
    page === undefined ? "" : page.categoryId
  );

  const [isFormValid, setIsFormValid] = useState(false);

  // Check if all required fields have been filled in
  const requiredFieldsFilledIn =
    title.trim() !== "" &&
    content.trim() !== "" &&
    description.trim() !== "" &&
    keywords.trim() !== "";

  if (isFormValid !== requiredFieldsFilledIn) {
    setIsFormValid(requiredFieldsFilledIn);
  }

  const hendelCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const imagePah = uuidv4();
      const slug = title.replace(/\s+/g, "-").toLowerCase();
      await Storage.put(imagePah, image, {
        // @ts-ignore
        contentType: image.type, // contentType is optional
      });
      const newBlog = await API.graphql(
        graphqlOperation(createBlog, {
          input: {
            title,
            slug,
            coverImage: imagePah,
            content,
            description,
            keywords,
            date,
            status,
            blogCategoryId: categoryId,
          },
        })
      );
      router.push("/dashboard/blogs");
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    // if (!title) return;
    // const formData = new FormData();
    // formData.append("id", page.id);
    // formData.append("title", title);
    // formData.append("content", content);
    // formData.append("description", description);
    // formData.append("date", date);
    // formData.append("keywords", keywords);
    // formData.append("categoryId", categoryId);
    // formData.append("status", status);
    // formData.append("coverImage", page.coverImage);
    // if (files?.[0]) {
    //   formData.append("file", files[0]);
    // }
    // e.preventDefault();
    // try {
    //   await axios.put(`/api/dashboard/blog`, formData);
    //   router.push("/dashboard/blogs");
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <LayoutAdmin>
      <div>
        <div className="max-w-screen-md mx-auto">
          <div className="md:py-12">
            <h1 className="text-2xl font-semibold">{type} Blog</h1>
          </div>
          <form
            onSubmit={page === undefined ? hendelCreate : handleUpdate}
            className="flex flex-col justify-center space-y-4 mt-4 text-black"
          >
            <div>
              <label className="font-bold">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
                required
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>
            <div>
              <label className="font-bold">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                maxLength={160}
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                required
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>
            <div>
              <label className="font-bold">Keywords SEO</label>
              <input
                type="text"
                name="keywords"
                id="keywords"
                placeholder="Keywords for SEO"
                maxLength={160}
                value={keywords}
                onChange={(e: any) => setKeywords(e.target.value)}
                required
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>
            <div>
              <label className="font-bold">Category :</label>
              <select
                className="w-full rounded-lg border px-4 py-2"
                required
                onChange={(e: any) => setCategoryId(e.target.value)}
                value={categoryId}
              >
                <option value="">Please Select</option>
                {category?.map((data: any) => (
                  <option key={data.id} value={data.id}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e: any) => setDate(e.target.value)}
                required
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>
            <div>
              <label className="font-bold">Cover Image</label>
              {page === undefined ? (
                <div>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp"
                    onChange={(e: any) => setImage(e.target.files[0])}
                    required
                    className="block w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white hover:dark:border-gray-600 dark:placeholder-gray-400"
                  />
                  <p className="mt-1 text-xs" id="file_input_help">
                    PNG, JPG or WEBP (MAX. 800x400px).
                  </p>
                </div>
              ) : (
                <div>
                  <div
                    className={showupload === false ? "space-y-2" : "hidden"}
                  >
                    <Image
                      src={`${imageStorage}`}
                      width={150}
                      height={150}
                      alt={page.slug}
                      className="rounded-md"
                    />
                    <button
                      onClick={() => setShowupload(true)}
                      className="bg-orange-300 py-2 px-4 rounded-sm"
                    >
                      Change image
                    </button>
                  </div>
                  {showupload && (
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={(e: any) => setImage(e.target.files[0])}
                        required
                        className="block w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white hover:dark:border-gray-600 dark:placeholder-gray-400"
                      />
                      <p className="mt-1 text-xs" id="file_input_help">
                        PNG, JPG or WEBP (MAX. 800x400px).
                      </p>
                      <button
                        onClick={() => setShowupload(false)}
                        className="bg-green-200 py-2 px-4 rounded-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <Editor value={content} onChange={setContent} />
            </div>
            <div>
              <select
                value={status}
                onChange={(e: any) => setStatus(e.target.value)}
                className="w-full rounded-lg border px-4 py-2"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
            <div className="text-center space-x-4">
              <button
                disabled={!isFormValid}
                type="submit"
                className={`rounded py-2 px-4 font-bold text-white ${
                  isFormValid
                    ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {type}
              </button>
              <Link href={`/dashboard/blogs`}>
                <button
                  type="button"
                  className="rounded bg-green-400 py-2 px-4 font-bold text-white hover:bg-green-700"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
}
