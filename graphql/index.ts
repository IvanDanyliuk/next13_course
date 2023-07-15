export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { $email }) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
    }
  }
`;

export const createUserMutation = `
  mutation CreateUser(input: $input) {
    user {
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
      id
    }
  }
`;