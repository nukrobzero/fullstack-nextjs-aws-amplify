/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreateNews = /* GraphQL */ `
  subscription OnCreateNews($filter: ModelSubscriptionNewsFilterInput) {
    onCreateNews(filter: $filter) {
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
export const onUpdateNews = /* GraphQL */ `
  subscription OnUpdateNews($filter: ModelSubscriptionNewsFilterInput) {
    onUpdateNews(filter: $filter) {
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
export const onDeleteNews = /* GraphQL */ `
  subscription OnDeleteNews($filter: ModelSubscriptionNewsFilterInput) {
    onDeleteNews(filter: $filter) {
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
export const onCreateCareers = /* GraphQL */ `
  subscription OnCreateCareers($filter: ModelSubscriptionCareersFilterInput) {
    onCreateCareers(filter: $filter) {
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
export const onUpdateCareers = /* GraphQL */ `
  subscription OnUpdateCareers($filter: ModelSubscriptionCareersFilterInput) {
    onUpdateCareers(filter: $filter) {
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
export const onDeleteCareers = /* GraphQL */ `
  subscription OnDeleteCareers($filter: ModelSubscriptionCareersFilterInput) {
    onDeleteCareers(filter: $filter) {
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
