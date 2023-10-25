export const saveProfileToLS = (body: IUser) => {
  localStorage.setItem("user", JSON.stringify(body));
  localStorage.removeItem("firebase:previous_websocket_failure");
};

export const getProfileFromLS = () => {
  if (typeof Storage !== undefined) {
    const user = localStorage.getItem("user");
    localStorage.removeItem("firebase:previous_websocket_failure");
    return user ? JSON.parse(user) : null;
  }
};

export const clearProfileFromLS = () => {
  localStorage.clear();
};
