export enum TAB_CONTENT_ENUM {
  MARKDOWN = 'MARKDOWN',
  CODE = 'CODE',
  TEXT = 'TEXT',
}

export interface TabFragment {
  title: string;
  content: string;
  language: string;
  type: TAB_CONTENT_ENUM;
}
