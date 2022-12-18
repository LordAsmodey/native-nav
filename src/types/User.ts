export type User = {
  displayName: string |undefined,
  createdAt: string,
  email: string,
  phoneNumber: string | undefined,
  photoURL: string | undefined,
  uid: string,
  stsTokenManager: {
    accessToken: string,
    expirationTime: number,
    refreshToken: string,
  },
};
