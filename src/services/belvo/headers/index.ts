export const headersBelvo = new Headers({
  Authorization: `Basic ${btoa(
    `${process.env.BELVO_SECRET_KEY_ID}:${process.env.BELVO_SECRET_KEY_PASSWORD}`
  )}`,
  "Content-Type": "application/json",
});
