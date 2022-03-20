import { typeResolve } from './ts/type';

export const GA_TRACKING_ID = typeResolve<string>(
  process.env.NEXT_PUBLIC_GA_ID
);

export const pageview = (url: string) => {
  const params: Gtag.ConfigParams = { page_path: url };
  window.gtag('config', GA_TRACKING_ID, params);
};

// TODO: 引数の型指定があほっぽい
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string | undefined;
  label: string | undefined;
  value: number | undefined;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
