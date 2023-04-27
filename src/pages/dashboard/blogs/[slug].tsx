import FormBlog from "@/components/backend/form/FormBlog";
import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { listBlogs, listCategories } from "@/pages/api/graphql/queries";
import { Storage } from "aws-amplify";

interface Props {
  blog: any;
  category: any;
  imageStorage: string;
}

export default function SlugBlog({ blog, category, imageStorage }: Props) {
  return (
    <FormBlog
      page={blog}
      category={category}
      imageStorage={imageStorage}
      type="Update"
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const SSR = withSSRContext();
  const slug = params?.slug as string;
  const { data: dataBlog } = await SSR.API.graphql({
    query: listBlogs,
  });

  const findBlog = dataBlog.listBlogs.items.find(
    (blog: any) => blog.slug.toString() === slug
  );

  const { data: dataCategories } = await SSR.API.graphql({
    query: listCategories,
  });

  //findImage
  const findImageURL = await Storage.get(findBlog.coverImage);

  if (!findBlog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: findBlog,
      category: dataCategories.listCategories.items,
      imageStorage: findImageURL,
    },
  };
};
