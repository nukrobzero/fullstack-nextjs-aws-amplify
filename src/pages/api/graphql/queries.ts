/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
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
export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCareers = /* GraphQL */ `
  query GetCareers($id: ID!) {
    getCareers(id: $id) {
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
export const listCareers = /* GraphQL */ `
  query ListCareers(
    $filter: ModelCareersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
