export enum TypesModal {
  uiOpenModal = "[ui] Open Modal",
  uiCloseModal = "[ui] Close Modal",
}

export enum TypesEvent {
  eventSetActive = "[event] Set Active",

  eventStartAddNew = "[event] Start Add New",

  eventAddNew = "[event] Add New",
  eventClearActiveEvent = "[event] Active Event",
  eventUpdated = "[event] Event updated",
  eventDeleted = "[event] Event deleted",
  eventLoaded = "[event] Event Loaded",
  eventLogout = "[event] Event Logout",
}

export enum TypesAuth {
  authCheckingFinish = "[auth] Finish Checking login state",
  authStartLogin = "[auth] Start login",
  authLogin = "[auth] Login",
  authStartRegister = "[auth] Start Register",
  authStartRenewToken = "[auth] Start Token Renew",
  authLogout = "[auth] Logout",
}
