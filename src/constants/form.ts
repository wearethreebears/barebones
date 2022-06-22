export const FORM_ENCODES = {
  DEFAULT: "application/x-www-form-urlencoded",
  MEDIA: "multipart/form-data",
} as const;

export const FORM_METHODS = {
  POST: "post",
  GET: "get",
} as const;
