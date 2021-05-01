export const rotate: { [key: string]: string } = {
  asc: "desc",
  desc: "asc",
  "": "asc",
};

export const compare = (v1: any, v2: any) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
