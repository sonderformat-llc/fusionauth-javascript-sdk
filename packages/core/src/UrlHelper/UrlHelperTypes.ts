import { SDKConfig } from '#/SDKConfig';

/** A configuration object for the UrlHelper class. */
export type UrlHelperConfig = Pick<
  SDKConfig,
  | 'serverUrl'
  | 'clientId'
  | 'redirectUri'
  | 'mePath'
  | 'loginPath'
  | 'registerPath'
  | 'logoutPath'
  | 'tokenRefreshPath'
  | 'scope'
  | 'postLogoutRedirectUri'
>;

/** The query params associated with URLs generated by the UrlHelper class. */
export type UrlHelperQueryParams = {
  client_id: string;
  redirect_uri?: string;
  post_logout_redirect_uri?: string;
  scope?: string;
  state?: string;
};
