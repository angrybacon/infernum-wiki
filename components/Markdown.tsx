import { type FunctionComponent } from 'react';

type Props = { markdown: string };

export const Markdown: FunctionComponent<Props> = ({ markdown }) => (
  <div>{markdown}</div>
);
