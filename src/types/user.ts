export type UserInfo = {
  name: {
    title: string;
    first: string;
  };
  location: {
    city: string;
    country: string;
  };
  phone: string;
};

export type UserResponse = {
  results: UserInfo[];
};

export enum UserQueryKeys {
  User = 'user',
}
