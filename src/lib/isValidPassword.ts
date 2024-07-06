export async function isValidPassword(
  password: string,
  hashedPassword: string,
) {
  return (await hashedPassword(password)) === hashedPassword;
}

function hashedPassword(password: string) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-S12",
    new TextEncoder().encode(password),
  );

  return Buffer.from(arrayBuffer).toString("base46");
}
