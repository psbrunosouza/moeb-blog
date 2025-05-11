export enum TAB_CONTENT_ENUM {
  TYPESCRIPT = 'TYPESCRIPT',
  HTML = 'HTML',
  PREVIEW = 'PREVIEW',
}

export interface TabFragment {
  title: string;
  content: string;
  language: string;
  type: TAB_CONTENT_ENUM;
  filename: string;
}
