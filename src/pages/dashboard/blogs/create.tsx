import FormBlog from "@/components/backend/form/FormBlog";
import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";
import { listCategories } from "@/pages/api/graphql/queries";

interface Props {
  page: any;
  category: any;
}

export default function CreateBlog({ page, category }: Props) {
  return (
    <FormBlog page={page} category={category} imageStorage="" type="Create" />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: listCategories,
  });

  return {
    props: {
      category: data.listCategories.items,
    },
  };
};
