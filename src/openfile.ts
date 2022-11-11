import { readFile } from "node:fs/promises";

export const openFile = async (path?: string): Promise<Buffer> => {
  if (!path) throw new Error("No hay imagen");
  //   const directoryPath = join(os.tmpdir(), nombreImagen);
  return await readFile(path, { encoding: undefined });
};
