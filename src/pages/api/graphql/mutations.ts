/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      title
      slug
      coverImage
      content
      description
      keywords
      date
      status
      createdAt
      category {
        id
        title
        description
        createdAt
        updatedAt
      }
      updatedAt
      blogCategoryId
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      title
      slug
      coverImage
      content
      description
      keywords
      date
      status
      createdAt
      category {
        id
        title
        description
        createdAt
        updatedAt
      }
      updatedAt
      blogCategoryId
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      title
      slug
      coverImage
      content
      description
      keywords
      date
      status
      createdAt
      category {
        id
        title
        description
        createdAt
        updatedAt
      }
      updatedAt
      blogCategoryId
    }
  }
`;
export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    createNews(input: $input, condition: $condition) {
      id
      title
      slug
      coverImage
      content
      description
      keywords
      date
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateNews = /* GraphQL */ `
  mutation UpdateNews(
    $input: UpdateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    updateNews(input: $input, condition: $condition) {
      id
      title
      slug
      coverImage
      content
      description
      keywords
      date
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteNews = /* GraphQL */ `
  mutation DeleteNews(
    $input: DeleteNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    deleteNews(input: $input, condition: $condition) {
      id
      title
      slug
      coverImage
      content
      description
      keywords
      date
      status
      createdAt
      updatedAt
    }
  }
`;
export const createCareers = /* GraphQL */ `
  mutation CreateCareers(
    $input: CreateCareersInput!
    $condition: ModelCareersConditionInput
  ) {
    createCareers(input: $input, condition: $condition) {
      id
      title
      slug
      content
      description
      jobtype
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateCareers = /* GraphQL */ `
  mutation UpdateCareers(
    $input: UpdateCareersInput!
    $condition: ModelCareersConditionInput
  ) {
    updateCareers(input: $input, condition: $condition) {
      id
      title
      slug
      content
      description
      jobtype
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteCareers = /* GraphQL */ `
  mutation DeleteCareers(
    $input: DeleteCareersInput!
    $condition: ModelCareersConditionInput
  ) {
    deleteCareers(input: $input, condition: $condition) {
      id
      title
      slug
      content
      description
      jobtype
      status
      createdAt
      updatedAt
    }
  }
`;
