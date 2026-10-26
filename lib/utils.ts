export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);
