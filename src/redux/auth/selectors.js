export const selectUserAuth = state => state.auth.user;
export const selectTokenAuth = state => state.auth.token;
export const selectErrorAuth = state => state.auth.error;
export const selectIsLoggedInAuth = state => state.auth.isLoggedIn;
export const selectIsLoadingAuth = state => state.auth.isLoading;
export const selectIsRefreshingAuth = state => state.auth.isRefreshing;
